const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const BASE_URL = "https://api.jikan.moe/v4";

// 👉 Get Anime Streaming Links
app.get("/anime/:id/streaming", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`${BASE_URL}/anime/${id}/streaming`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch streaming info",
            message: error.message
        });
    }
});

// 👉 Search Anime
app.get("/anime/search/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const response = await axios.get(`${BASE_URL}/anime?q=${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 👉 Anime Detail
app.get("/anime/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`${BASE_URL}/anime/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});