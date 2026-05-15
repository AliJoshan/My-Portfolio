import typography from "@tailwindcss/typography";
import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "hsl(199,89%,58%)",
            },
        },
    },
    plugins: [typography, scrollbar],
};
