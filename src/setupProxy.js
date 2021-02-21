const { createProxyMiddleware } = require('http-proxy-middleware'); // 导入代理模块创建代理
// 创建代理
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:9000',
      changeOrigin: true,
    })
  );
};