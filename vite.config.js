import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  //Add this test
  test: {
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
    reporters: ["verbose"],
  },
});
