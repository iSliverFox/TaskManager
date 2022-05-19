# TaskManager🍟
轻量的在线任务管理器，随时随地管理你的待办【基于Vue开发】
## 目录
- [TaskManager](#TaskManager)
  - [源文件说明](#源文件说明) 
  - [项目说明](#项目说明)
    - [环境需求](#环境需求)  
    - [组件说明](#组件说明)  
    - [屏幕截图](#屏幕截图)  
    - [补充说明](#补充说明) 
  - [如何使用](#如何使用)
  - [参与人员](#参与人员)
  - [Star数量统计](#Star数量统计)

## 源文件说明🏟️
- Public：
  存储主页面及图标的文件夹
- src：
  Vue文件的存放地址，包含组件和main.js
- node_modules：
  请自行生成该文件
- 其他文件：
  Vue的相关配置文件
  
## 项目说明🛥️
### 环境需求
- 请确保计算机安装并配置有npm与vue以及webpack等开发工具和环境
  - 本项目基于Vue2开发，上下兼容Vue2&Vue3框架
- 关于node_modules文件
  - 建议使用Vite生成[https://vitejs.cn] node_modules更加快捷
- 插件
  - 轻量项目，所以并未引入插件 
### 组件说明
- App.vue：入口组件
  - MyHeader：头部组件。包含添加待办的输入框以及添加按钮【支持enter直接添加】
  - MyList：列表组件。
    - MyItem：待办组件。包含已存在的待办
  - MyFooter：底部组件。
 ### 屏幕截图
 - 主界面🪂
![image](https://user-images.githubusercontent.com/66202597/169225414-52b7ecf2-101b-4b54-87ea-0fa584a8d64a.png)
- 悬停编辑&删除🍧
![image](https://user-images.githubusercontent.com/66202597/169225360-5e98e07c-1932-46f8-93ff-c6ba4b90eff8.png)
- 已完成待办状态变化🎉
 ![image](https://user-images.githubusercontent.com/66202597/169225502-0d0f99d2-cd92-4309-a987-27b7e2936d8f.png)
### 补充说明
使用了cookie存储待办，未连接在线服务器，如果想要实现跨平台管理待办，需要自行配置在线服务器。后续可能会有其他衍生版本，并将基于Vue3开发。因此这是TaskManager的早期版本。

## 如何使用🎖️
- 可以在源码基础上自行完善与修改
- 可以下载release版本，更加轻量
- release版本使用了本地server进行访问，release中包含有已配置的server
- 也可以自行修改代码解决404问题

## 参与人员




