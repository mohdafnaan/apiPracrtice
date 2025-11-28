import mailer from "nodemailer";

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
export default sendEmail;