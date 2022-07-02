import express from "express";
import { database } from "./database/database";
import { Spoiler } from "./model/spoiler";
import router from "./routes/spoiler";



const app = express();

app.use(express.json());
app.use("/api", router)



app.listen(3333, async () => {
    const spoiler = Spoiler;
    await database.sync();
    console.log("Server is running!")
})

// app.use("/api", spoilerRoute)