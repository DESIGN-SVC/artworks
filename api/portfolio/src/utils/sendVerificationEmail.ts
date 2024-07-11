import 'dotenv/config'
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
    },
});

interface SendVerificationEmailProps {
    email: string
    token: string,
    name: string
}

export const sendVerificationEmail = async ({ email, token, name }: SendVerificationEmailProps) => {

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Email Verification',
        text: `Hello ${name}, Please verify your email by clicking the link: \nhttp:\/\/localhost:4200\/confirmation\/${token}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
}