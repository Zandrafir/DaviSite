module.exports = function(eleventyConfig) {
  // Copia a pasta admin para o site final
  eleventyConfig.addPassthroughCopy("admin");
  
  // Copia as imagens para não sumirem
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.jpg");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};