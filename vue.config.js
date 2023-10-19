module.exports = {
    pages: {
        index: {
            entry: './src/main.js',
            title: '网易云音乐'
        }
    },
    devServer: {
        open: false,
        port: 8002,
        proxy: {
            '/api': {
                target: `http://cloud-music.pl-fe.cn/`,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}