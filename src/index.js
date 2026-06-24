import connectDB from "./db/index1.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});
connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`server is running on port: ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("mongo db conection falilled", err);
})