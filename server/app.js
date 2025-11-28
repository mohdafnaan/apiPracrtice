import express from "express";
import dotenv from "dotenv";
import e from "express";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get("/",(req,res)=>{
    try {
        res.status(200).json ({msg : "server is live"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.post("/add",(req,res)=>{
    try {
        let num1 = Number(req.body.a);
        let num2 = + req.body.b;
        let final = num1 + num2;
        res.status(200).json({msg : final})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.post("/multiply",(req,res)=>{
    try {
        let num1 = Number(req.body.a);
        let num2 = + req.body.b;
        let final = num1 * num2;
        res.status(200).json({msg : final})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.post("/compare",(req,res)=>{
    try {
        let num1 = Number(req.body.a);
        let num2 = + req.body.b;
        if(num1>num2){
            return res.status(200).json({msg :`${num1} is greater`})
        }else{
            res.status(200).json({msg : `${num2} is greater`})
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.post("/evenorodd",(req,res)=>{
    try {
        let num= Number(req.body.a);

        if(num % 2){
            return res.status(200).json({msg :`${num} is odd`})
        }else{
            res.status(200).json({msg : `${num} is even`})
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.post("/reverse",(req,res)=>{
    try {
        let a = req.body.a;

        let splitString = a.split("");
        let reverse = splitString.reverse();
        res.status(200).json({msg : reverse})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.post("/palindrome",(req,res)=>{
    try {
        let a = req.body.a;
        let splitString = a.split("");
        let reverse = splitString.reverse();
        let arra = Array.of(reverse)
        if(reverse == arra){
            return res.status(200).json({msg : "it is palindrome"})
        }else{
            return res.status(200).json({msg : "it is not a palindrome"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.post("/vowels",(req,res)=>{
    try {
        let a = req.body.a;
        let splitString = a.split("");
        console.log(splitString);
        let arr = ["a","e","i","o","u"]
        let vowel = splitString.every(arr);
        console.log(vowel);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.post("/age",(req,res)=>{
    try {
        let age = req.body.age;
        if(age>18){
            return res.status(200).json({msg : "eligible"})
        }else{
            return res.status(200).json({msg : "not eligible"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})

app.listen(port,()=>{
    console.log(`server id running at http://localhost:${port}`);
})