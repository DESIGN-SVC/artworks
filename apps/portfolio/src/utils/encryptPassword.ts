import { createCipheriv } from "node:crypto";

export function encryptPassword(password: string) {
  const key = Buffer.from(
    import.meta.env.PUBLIC_ENCRYPTED_PASSWORD_KEY,
    "utf-8",
  );
  const iv = Buffer.from(import.meta.env.PUBLIC_ENCRYPTED_PASSWORD_IV, "utf-8");

  if (!key || !iv) {
    throw new Error("Key and IV must be defined");
  }

  const cipher = createCipheriv("aes-128-cbc", key, iv);
  let encrypted = cipher.update(password, "utf8", "base64");
  encrypted += cipher.final("base64");

  return encrypted;
}
