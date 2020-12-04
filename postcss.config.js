const tailwindcss = require("tailwindcss");
module.exports = {
					processCssUrls: false,
           plugins: [
    // require('postcss-import'),
          tailwindcss("./tailwind.config.js"), 
    require("autoprefixer")
  ]
};

