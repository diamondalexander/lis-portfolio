const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    return {
      pathPrefix: "/lis-portfolio/",
      dir: {
        input: "src",
        output: "public"
      },
    };
  };