/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
        colors: {
            'bg-color': 'var(--bg-color)',
            'second-bg-color': 'var(--second-bg-color)',
            'text-color': 'var(--text-color)',
            'main-color': 'var(--main-color)',
        },
        },
    },
    plugins: [],
}
