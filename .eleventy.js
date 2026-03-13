module.exports = function(eleventyConfig) {
  // ESSA É A LINHA MAIS IMPORTANTE:
  eleventyConfig.addPassthroughCopy("admin");

  // Copia as imagens para que elas não sumam
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