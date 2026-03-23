module.exports = function(eleventyConfig) {
  // 1. Copia a pasta do painel administrativo para o site final
  eleventyConfig.addPassthroughCopy("admin");

  // 2. Copia a pasta de imagens para o site final
  eleventyConfig.addPassthroughCopy("assets");

  // 3. Configurações de entrada e saída
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};