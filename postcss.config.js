module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    [require("postcss-import"), require("postcss-nesting")],
    tailwindcss: {},
    autoprefixer: {},
  },
};
