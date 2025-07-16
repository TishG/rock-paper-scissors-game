// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
	// If you had any custom env variables, you'd define them here, e.g.:
	// readonly VITE_CUSTOM_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
