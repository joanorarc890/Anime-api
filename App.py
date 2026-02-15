from fastapi import FastAPI
import requests
import os

app = FastAPI()

BASE = "https://api.jikan.moe/v4"

@app.get("/")
def home():
    return {"msg": "Anime API running 🚀"}

# 👉 Search Anime
@app.get("/anime/search/{name}")
def search_anime(name: str):
    r = requests.get(f"{BASE}/anime?q={name}")
    return r.json()

# 👉 Anime Detail
@app.get("/anime/{id}")
def anime_detail(id: int):
    r = requests.get(f"{BASE}/anime/{id}")
    return r.json()

# 👉 Streaming Links
@app.get("/anime/{id}/streaming")
def streaming(id: int):
    r = requests.get(f"{BASE}/anime/{id}/streaming")
    return r.json()
