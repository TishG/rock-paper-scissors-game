import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/rock-paper-scissors-game/', // Replace with your repo name
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
	},
});
