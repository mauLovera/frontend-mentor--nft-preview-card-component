import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        "soft-blue": "hsl(215, 51%, 70%)",
        "cyan": "hsl(178, 100%, 50%)",
      },
      neutral: {
        "body-bg": "hsl(217, 54%, 11%)",        
        "card-bg": "hsl(216, 50%, 16%)",        
        "line": "hsl(215, 32%, 27%)",        
        "white": "hsl(0, 0%, 100%)",        
      }
    }
  },
  plugins: [],
};
export default config;
