module.exports = {
    plugins: [
        require('@tailwindcss/typography'),
    ],
    theme: {
        extend: {
            keyframes: {
                techScroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
            animation: {
                "tech-scroll": "techScroll 25s linear infinite",
            },
        },
    },
};