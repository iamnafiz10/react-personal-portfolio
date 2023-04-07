const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            fontFamily: {
                poppins: "'Poppins', sans-serif",
                jost: "'Jost', sans-serif",
            },
            colors: {
                'primary': "#00adff",
                'secondary': "#11CD88",
            }
        },
    },
    plugins: [],
});