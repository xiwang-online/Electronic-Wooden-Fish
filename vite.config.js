module.exports = {
  proxy:{
      '/api':{
        
          //target:'https://www.xiwang.online',
          target:'http://127.0.0.1:8000/',
          changeOrigin:true,  // 允许跨域
      }
  }

}