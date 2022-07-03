import express from "express";
import { database } from "./database/database";
import router from "./routes/spoiler";



const app = express();

app.use(express.json());
app.use("/api", router)



app.listen(3333, () => {
    try {
        database.sync().then(() => console.log("Server is running!"));
    } catch (error) {
        console.log(error)
    }
    
})

// app.use("/api", spoilerRoute)