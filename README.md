Setup: npm create vite@latest . -- --template react-ts (keep these files), then:
npm i && npm run dev
In vite.config.ts add: import tailwindcss from "@tailwindcss/vite"; plugins: [react(), tailwindcss()]
Copy src/ over the template's src/. main.tsx must import "./index.css" and render <App/>.
