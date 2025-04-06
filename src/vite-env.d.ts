/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly UNSPLASH_SECRET_KEY: string;
    readonly VERCEL_OIDC_TOKEN: string;

    readonly VITE_UNSPLASH_ACCESS_KEY: string;
    readonly VITE_UNSPLASH_APP_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}