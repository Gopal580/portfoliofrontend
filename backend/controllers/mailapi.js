const nodemailer = require('nodemailer');

exports.mailapi = async (req, res) => {
  try {
    

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // console.log("yaha tak chal bhia");

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    };



    await transporter.sendMail(mailOptions);


 

    res.status(200).json({ success: true, message: "Saved and email sent." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to process." });
  }
};
