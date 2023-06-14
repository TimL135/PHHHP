import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({build: {
            outDir: "./docs",
            assetsInlineLimit: 0
          },
    plugins: [
        laravel({
            input: 'resources/js/app.ts',
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        ,
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
      },
      manifest: {
        background_color: "#ffffff",
        theme_color: "#ffffff",
        name: "PHHHP",
        short_name: "PHHHP",
        start_url: "/PHHHP/",
        display: "standalone",
        icons: [
          {
            src: "icon.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
    }),
  ],
  server: {
    host: true,
  },
  base: "./"
});
