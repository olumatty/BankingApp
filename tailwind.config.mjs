export default {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          ".no-scrollbar": {
            "-ms-overflow-style": "none", // Hide scrollbar in IE and Edge
            "scrollbar-width": "none", // Hide scrollbar in Firefox
          },
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none", // Hide scrollbar in Chrome, Safari, Edge
          },
        });
      },
    ],
  };
  