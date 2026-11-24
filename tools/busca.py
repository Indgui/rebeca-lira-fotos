import json, os, subprocess, urllib.request, urllib.parse
Q = {
 "terapia": ["therapy session", "psychologist", "counseling", "therapist listening"],
 "infantil": ["child therapy", "play therapy", "child psychologist", "kid drawing with adult"],
 "tea": ["autism", "autistic child", "sensory play", "toddler blocks"],
 "avaliacao": ["child puzzle", "child concentration", "cognitive test", "child learning table"],
 "familia": ["family playing floor", "parent child playing", "mother son blocks", "father daughter playing"],
 "psicoped": ["homework help", "child reading with parent", "tutoring child", "child writing"],
 "online": ["online therapy", "video call laptop woman", "telehealth"],
 "pessoas": ["elderly couple", "senior woman smiling", "couple talking", "teenager portrait"],
}
H = {"User-Agent": "Mozilla/5.0", "Accept": "application/json"}
os.makedirs("out/thumbs", exist_ok=True)
meta = {}
for cat, qs in Q.items():
    seen, files = set(), []
    for q in qs:
        url = "https://unsplash.com/napi/search/photos?" + urllib.parse.urlencode({"query": q, "per_page": 30})
        try:
            data = json.load(urllib.request.urlopen(urllib.request.Request(url, headers=H), timeout=30))
        except Exception as e:
            print("ERR", q, e); continue
        for r in data.get("results", []):
            raw = r["urls"]["raw"]
            if r.get("premium") or "plus.unsplash" in raw or r["id"] in seen: continue
            if "images.unsplash.com/photo-" not in raw: continue
            seen.add(r["id"])
            pid = raw.split("photo-")[1].split("?")[0]
            n = len(meta)
            meta[n] = {"cat": cat, "q": q, "pid": pid, "w": r["width"], "h": r["height"], "alt": r.get("alt_description"), "by": r["user"]["name"]}
            f = f"out/thumbs/{n:03d}.jpg"
            try:
                urllib.request.urlretrieve(f"https://images.unsplash.com/photo-{pid}?w=360&h=270&fit=crop&q=70", f)
                files.append(f)
            except Exception as e:
                print("DL", pid, e)
            if len(files) >= 42: break
        if len(files) >= 42: break
    if files:
        args = ["montage"]
        for f in files:
            args += ["-label", os.path.basename(f)[:-4], f]
        args += ["-tile", "6x", "-geometry", "360x270+4+4", "-pointsize", "22", f"out/sheet_{cat}.jpg"]
        subprocess.run(args, check=True)
json.dump(meta, open("out/meta.json", "w"), indent=1, ensure_ascii=False)
