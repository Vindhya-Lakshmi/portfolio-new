const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {

    const { name, email, phone, subject, message } = req.body;

    try {

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "vindhyalakshmiofficial@gmail.com",
            replyTo: email,
            subject: subject,

            html: `
                <h2>New Portfolio Contact</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Phone:</strong> ${phone}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>
            `
        });

        res.json({
            success: true,
            message: "Message Sent Successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "Failed"
        });

    }

});

module.exports = router;