const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Tejas Borde" <tejasborde2@gmail.com', // sender address
    to: "tejasborde99@gmail.com", // list of receivers
    subject: "TEST MAIL", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
}

main().catch(console.error);
