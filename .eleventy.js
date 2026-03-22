module.exports = function(eleventyConfig) {
  // 1. Copia a pasta do painel administrativo
  eleventyConfig.addPassthroughCopy("admin");

  // 2. Copia a pasta assets (onde estarão suas fotos)
  eleventyConfig.addPassthroughCopy("assets");

  // 3. Garante a cópia de imagens que possam estar soltas
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.jpeg");
  eleventyConfig.addPassthroughCopy("*.gif");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};