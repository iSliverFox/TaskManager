const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭语法检查
  // pages: {  //配置入口js文件
  //   index: {
  //       entry:''  //默认为main.js
  //     }
  // }
  // devServer: {
  //   proxy: {
  //     '/stu': {   //请求前缀【可以控制本次请求是否走代理】
  //       target: 'http://localhost:5000',   //请求的目标
  //       pathRewrite: { '^/stu': '' },  //覆写路径
  //       changeOrigin: true
  //     },
  //   }
  // }

})
