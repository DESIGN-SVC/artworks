/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_ID: string;
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_CLIENT_ID_VIMEO: string;
  readonly PUBLIC_CLIENT_SECRET_VIMEO: string;
  readonly PUBLIC_ACCESS_TOKEN_VIMEO: string;
  readonly PUBLIC_ENCRYPTED_PASSWORD_KEY: string;
  readonly PUBLIC_ENCRYPTED_PASSWORD_IV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
