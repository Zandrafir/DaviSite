module.exports = function(eleventyConfig) {
  // Passa as extensões de imagens para a pasta public (assumindo que as imagens estão na raiz do projeto)
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.jpg");
  
  // Passa a pasta de administração do CMS
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};