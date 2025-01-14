const path=require('path')
// 进行路径拼接
const resolve=pathname=>path.resolve(__dirname,pathname)
const CracoLessPlugin = require('craco-less')
module.exports={
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {  },
            javascriptEnabled: true,
          },
        },
      },
    }
  ],
  webpack:{
    alias:{
      "@":resolve("src"),
      "components":resolve("src/components"),
       '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}