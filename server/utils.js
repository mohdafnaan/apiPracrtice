import mailer from "nodemailer";
import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();
async function sendEmail(user,pass,to,subject,text) {
    let userDetails = mailer.createTransport({
        service : "gmail",
        auth : {
            user: user,
            pass : pass
        }
    })
    let sender = await userDetails.sendMail({
        to : to,
        subject : subject,
        text : text
    })
    console.log(sender.messageId);
}

async function SMS(sid,token,from,to , body) {

     let sender = twilio(sid,token);

     let user = await sender.messages.create({
        from : from,
        to : to,
        body : body
     })
     console.log("message sent");
}
export  {sendEmail, SMS};