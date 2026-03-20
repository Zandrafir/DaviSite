module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  
  // Isso garante que a pasta de imagens que o CMS vai criar seja copiada
  eleventyConfig.addPassthroughCopy("assets");

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