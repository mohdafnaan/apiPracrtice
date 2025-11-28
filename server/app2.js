import express from "express";
import sendEmail from "./utils.js";
import dotenv from "dotenv";
dotenv.config();
const app = express()
app.use(express.json());
const port = process.env.PORT;

app.post("/mailer",async(req,res)=>{
    try {
        let from = req.body.from;
        let pass = req.body.pass;
        let to = req.body.to;
        let subject = req.body.subject;
        let text = req.body.text;
        await sendEmail(from,pass,to,subject,text);
        res.status(200).json({msg : "mail send"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.listen(port)