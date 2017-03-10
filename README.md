#安装cnpm 更换淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

#初始化
cnpm install

#运行 以开发环境方式
npm run dev

#浏览器访问
http://localhost:8080/

#首先用antd design mobile

问题1  传参问题 默认传递key 改变参数之后 key无法判断  =>函数不变 添加全局变量  让dispatch和 actions 存起来 然后直接调用
问题2   不需要缓存 因为数据是实时的  所以不去缓存 如果用缓存 就用localstorage

问题3  当我点击第一个的时候  自动请求第二个的数据  
```
少写了一个break中断循环
```

2017-3-9
调整Tab内部结构 把逻辑都写在container里面 让component只起到渲染的作用  10:50
把TAB切换的action合并  少些了N行代码  能合并的就合并  11:25


添加react flip move 实现李斯特的动画展现效果 13:50

2017-3-10
必须添加一个父路由 目的是为了设置一个登陆的状态贯穿全局