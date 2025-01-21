import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // @ts-expect-error error comes from vitest/config import
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  build: {
    outDir: "../backend/dist/frontend-build",
    emptyOutDir: true,
  },
});
