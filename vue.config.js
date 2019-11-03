module.exports = {
    devServer: {
        port:8081,
        disableHostCheck: true,
        proxy: {
            "/api": {
                target: "http://siwei.me",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            "/rec": {
                target: "https://rec.www.mi.com",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/rec": ""
                }
            }
        }
    }
};
