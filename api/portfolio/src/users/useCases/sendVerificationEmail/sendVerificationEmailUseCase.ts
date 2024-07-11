import nodemailer from 'nodemailer'
import 'dotenv/config'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
})

interface SendVerificationEmailProps {
    email: string
    token: string,
    name:string
}

export class SendVerificationEmailUseCase {
    async execute({  email, token, name }: SendVerificationEmailProps) {
        const verificationUrl = `http://localhost:3030//verify-email?token=${token}`;
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: email,
            subject: 'Email de Verificação',
            html: `<p> Olá ${name}, Clique no link para verificar seu email: <a href="${verificationUrl}">Verificar Email</a></p>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw new Error('Erro ao enviar email: ' + error.message);
            }
        });
    }

}