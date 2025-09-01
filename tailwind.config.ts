import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'gadget-start': '#00ff9f', // electric green
        'gadget-mid': '#1e90ff',   // vibrant blue
        'gadget-end': '#8a2be2',   // deep purple
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config

