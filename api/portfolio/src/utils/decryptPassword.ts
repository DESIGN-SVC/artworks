import crypto from 'crypto';
import 'dotenv/config'

export function decryptPassword(encryptedPassword:string) {
    const keyString = process.env.ENCRYPTED_PASSWORD_KEY
    const ivString = process.env.ENCRYPTED_PASSWORD_IV;

    if (!keyString || !ivString) {
        throw new Error('Key and IV must be defined');
    }

    const key = Buffer.from(keyString, 'utf-8');
    const iv = Buffer.from(ivString, 'utf-8');

    const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    let decrypted = decipher.update(encryptedPassword, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
}