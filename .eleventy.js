module.exports = function(eleventyConfig) {
  // Diz ao Eleventy para copiar a pasta admin inteira para o site final
  eleventyConfig.addPassthroughCopy("admin");

  // Diz para copiar as imagens da raiz também
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.jpeg");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};