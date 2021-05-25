module.exports ={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'store':'@/store',
        'network':'@/network',
        'utils':'@/utils',
        'views':'@/views',
        
      }
    }
  }, 
  publicPath:'./'
}