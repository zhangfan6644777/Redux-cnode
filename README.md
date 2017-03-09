#安装cnpm 更换淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

#初始化
cnpm install

#运行 以开发环境方式
npm run dev

#浏览器访问
http://localhost:8088/

#首先用antd design mobile

问题1  传参问题 默认传递key 改变参数之后 key无法判断  =>函数不变 添加全局变量  让dispatch和 actions 存起来 然后直接调用
问题2   不需要缓存 因为数据是实时的  所以不去缓存 如果用缓存 就用localstorage

问题3  当我点击第一个的时候  自动请求第二个的数据  
```
少写了一个break中断循环
```
