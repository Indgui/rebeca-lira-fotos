import os, subprocess, urllib.request, json
os.makedirs("out/t", exist_ok=True)
H={"User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124 Safari/537.36"}
def url(s,i,w,h):
    if s=="u": return f"https://images.unsplash.com/photo-{i}?w={w}&h={h}&fit=crop&q=70"
    return f"https://images.pexels.com/photos/{i}/pexels-photo-{i}.jpeg?auto=compress&cs=tinysrgb&w={w}&h={h}&fit=crop"
items=[l.split() for l in open("tools/candidatos.txt") if l.strip()]
files=[];log=[]
for n,(s,i) in enumerate(items):
    f=f"out/t/{n:02d}.jpg"
    try:
        data=urllib.request.urlopen(urllib.request.Request(url(s,i,400,300),headers=H),timeout=30).read()
        open(f,"wb").write(data); files.append((n,f)); log.append(f"{n:02d} OK {s} {i}")
    except Exception as e: log.append(f"{n:02d} ERR {s} {i} {e}")
open("out/log.txt","w").write("\n".join(log))
for k in range(0,len(files),24):
    chunk=files[k:k+24]; args=["montage"]
    for n,f in chunk: args+=["-label",f"{n:02d}",f]
    args+=["-tile","6x","-geometry","400x300+6+6","-pointsize","28",f"out/sheet{k//24}.jpg"]
    subprocess.run(args,check=True)
