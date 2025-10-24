import express from "express";

const app = express();

app.get("/", async (req, res) => {
 res.send("Welcome to Express");
});

app.listen(3210, () => {
 console.log("Start server port: 3210");
});

