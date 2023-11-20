// tailwind.config.js
module.exports = {
    // other configuration...
    content: [      'node_modules/preline/dist/*.js',  ],
  
    plugins: [
      require('preline/plugin'),
      require('tailwindcss-preline-ui'),
      // other plugins...
    ],
  
    // other configuration...
  };
  