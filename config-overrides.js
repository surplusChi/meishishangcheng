const path = require('path') // 导入node的内置模块

const { override,
   fixBabelImports, 
   addWebpackResolve,
   addWebpackAlias,
   addDecoratorsLegacy
} = require('customize-cra')

// 二次配置webpack配置
module.exports = override(
  // 按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  // resolve 配置别名或者扩展名
  addWebpackResolve({
    extensions: ['.js', '.json', '.jsx']
  }),
  // 给文件夹起别名
  addWebpackAlias({
      "@": path.resolve(__dirname, 'src/'),
      "@a": path.resolve(__dirname, 'src/assets/'),
      "@c": path.resolve(__dirname, 'src/components/'),
      "@u": path.resolve(__dirname, 'src/utils')
  }),
  // 配置装饰器
  addDecoratorsLegacy()
)