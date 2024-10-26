const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport(
    {
        service : "gmail",
        auth : {
            user: "ericyaodev@gmail.com",
            pass:"yaop070403***"
        }
    }
)

let optionEmail = {
    from : "ericyaodev@gmail.com",
    to : "parfaityaoeric123@gmail.com",
    subject:"Envoyer email avec NodeJS",
    html: '<h1>Bienvenue</h1><p>Email envoyé avec succès!</p>'
}

transporter.sendMail(optionEmail,(err,info)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(`Email envyé ${info.response}`)
    }
})