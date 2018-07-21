# "# nodejs & vue" 

## vue
* 1. 使用npm全局安装vue-cli（前提是你已经安装了nodejs，否则你连npm都用不了），在cmd中输入一下命令

    ```javascript 
    npm install --global vue-cli
    ```

* 2. 初始化应用
    ```javascript 
    vue init webpack vuetest
    ```

* 3. 目录说明：
    * bulid   里面是一些操作文件，使用npm run *    时其实执行的就是这里的文件
    * config 配置文件，执行文件需要的配置信息
    * src   资源文件，所有的组件以及所用的图片都是在这个放着的简单看一下这个文件夹下都放了那些东西
        * assets  资源文件夹，放图片之类的资源，
        * components  组件文件夹，写的所有组件都放在这个文件夹下，现在有一个写好的组件已经放到里面了，
        * router  路由文件夹，这个决定了也面的跳转规则，
        * App.vue应用组件，所有自己写的组件，都是在这个组件之上运行了，
        * main.js    webpack入口文件，webpack四大特性entry入口、output输出，loader加载器，plugins插件，可以再项目中build\webpack.base.conf.js第12行看到这个入口文件是哪个。

* 4. 执行npm run dev命令

* 5. 执行npm run build命令
    * 生成dist文件

