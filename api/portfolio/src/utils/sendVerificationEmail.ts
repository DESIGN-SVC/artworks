import { AppError } from '@shared/errors/appError';
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
const url = `${process.env.APP_URL}/token/confirmation/${token}`
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Email Verification - Artworks',
        html: `<html
  style="width: 600px; margin-left: auto; margin-right: auto"
  dir="ltr"
  lang="en"
>
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    class=""
    style="
      background-color: rgb(0, 0, 0);
      width: 600px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0px;
      margin-bottom: 0px;
    "
  >
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="
        max-width: 37.5em;
        font-family: Montserrat, Arial;
        background-color: rgb(32, 8, 55);
      "
    >
      <tbody>
        <tr style="width: 100%">
          <td>
            <img
              alt="Header"
              src="https://storage.cloud.google.com/gs-multimidia-assets/mail-content/portfolio/2024/julho/login-emails/header.png"
              style="
                display: block;
                outline: none;
                border: none;
                text-decoration: none;
                width: 600px;
              "
            />
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                padding-left: 40px;
                padding-right: 40px;
                background-color: rgb(32, 8, 55);
              "
            >
              <tbody>
                <tr>
                  <td>
                    <p
                      style="
                        font-size: 26px;
                        line-height: 24px;
                        margin: 0px;
                        color: rgb(255, 241, 241);
                        font-weight: 600;
                        text-align: center;
                      "
                    >
                      Hi ${name}!
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                padding-left: 40px;
                padding-right: 40px;
                padding-top: 30px;
                padding-bottom: 30px;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <p
                      style="
                        font-size: 18px;
                        line-height: 24px;
                        margin: 0px;
                        color: rgb(231, 214, 254);
                        text-align: center;
                      "
                    >
                      Welcome to the Artworks Producer&#x27;s portfolio! It is
                      with immense pleasure that we welcome you to the platform
                      that houses the talent and creativity of the Artworks
                      Producer from Concentrix. Access the link to continue your
                      registration:
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding-left: 40px; padding-right: 40px"
            >
              <tbody>
                <tr>
                  <td>
                    <a
                      href="${url}"
                      style="
                        color: #067df7;
                        text-decoration: none;
                        margin: 0px;
                        css-float: left;
                      "
                      target="_blank"
                      ><p
                        style="
                          font-size: 18px;
                          line-height: 24px;
                          margin: 0px;
                          color: rgb(231, 214, 254);
                          text-align: center;
                          background-color: rgb(90, 32, 146);
                          border-radius: 14px;
                          width: 400px;
                          padding-left: 60px;
                          padding-right: 60px;
                          padding-top: 30px;
                          padding-bottom: 30px;
                          word-break: break-all;
                        "
                      >
                        Link
                      </p></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                padding-left: 40px;
                padding-right: 40px;
                padding-top: 30px;
                padding-bottom: 80px;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <p
                      style="
                        font-size: 18px;
                        line-height: 24px;
                        margin: 0px;
                        color: rgb(231, 214, 254);
                        text-align: center;
                      "
                    >
                      Here, we showcase the diversity of work produced by our
                      team in various areas: Audiovisual, Photography, Digital
                      Design, and Front-end Development.<br /><br />We take
                      pride in providing this platform as an extension of your
                      creative studio. We wish you an inspiring and productive
                      time on our platform.<br /><br />Best regards, The
                      Artworks Team from Concentrix.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <img
              alt="Footer"
              src="https://storage.cloud.google.com/gs-multimidia-assets/mail-content/portfolio/2024/julho/login-emails/footer.png"
              style="
                display: block;
                outline: none;
                border: none;
                text-decoration: none;
                width: 600px;
              "
            />
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email: ', error);
        throw new AppError('Error sending email', 401)
    }
}