const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/wp-json",
    createProxyMiddleware({
      target: "https://navajowhite-beaver-644593.hostingersite.com",
      changeOrigin: true,
    })
  );
};
