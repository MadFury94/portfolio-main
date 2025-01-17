const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/wp-json",
    createProxyMiddleware({
      target: "https://brianwebdev.site",
      changeOrigin: true,
    })
  );
};
