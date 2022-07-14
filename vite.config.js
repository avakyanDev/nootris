import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
import { viteStaticCopy } from 'vite-plugin-static-copy'



export default defineConfig({
  root: "src",
  plugins: [
    pugPlugin({ pretty: true }),
    viteStaticCopy({
      targets: [
        {
          src: 'images',
          dest: ''
        }
      ]
    })
  ],
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  handleHotUpdate({ file, server }) {
        if (file.endsWith('.scss') || file.endsWith('.pug')) {
          console.log('reloading json file...');

          server.ws.send({
            type: 'full-reload',
            path: '*'
          });
        }
      },
});
