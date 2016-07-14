#作为学习typescript的一个示例项目

###项目使用typescript & babel & webpack & gulp

###源码在src文件夹下
src/index.ts为入口文件

###运行此项目需要按如下步骤操作

####1、安装 [node](https://nodejs.org/en/download/)

####2、安装 node 依赖包
```
npm install
```
####3、执行命令编译源码
```
npm run build
```
执行此命令后:
* 将typescript代码转换为es2015的代码，放在build_ts文件夹下
* webpack将文件打包并输出


最后编译后的js代码将生成在dist文件夹下
