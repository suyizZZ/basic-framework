basic-farmwork(基于cratet-react-app框架改造)

提取第三方包 减小打包体积 定义全局对象 方便应用 

### `yarn start`

运行项目

### `yarn compile`

打包全局模板 `Utils` 等

### `yarn build`

打包项目文件

### `yarn prod`

打包项目文件  同时打包 全局模块 `Utils` 等  

提取公共模快 直接引用  不用webpack进行打包

`yarn global add serve`

`serve -s build`
