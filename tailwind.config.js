/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(77.04% 73.21% at 50.00% 50.00%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                light: "#fafbfd",
                dark: "#1f1f1f",
                grayish: "#ecf3fd",
                greenish: {
                    500: "#53e462",
                },
                skyblue: {
                    500: "#00f1e8",
                },
            },
            fontSize: {
                "heading": ["42px", "51px"],
                "h2": ["28px", "42px"]
            }
        },
    },
    plugins: [
        require('tailwindcss-animated')
    ],
};
