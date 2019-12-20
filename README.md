<p align="center">
  <h1 align="center">宿舍管理 -- vue app</h1>
</p>

### 介绍
由vue搭建的、宿舍管理系统。这个是另一个spring boot项目{}的前端app。如果需要运行则需要启动后端项目。

or

注释<strong color="green">router/index.ts</strong>的axios的全局拦截器的这段代码即可。

```typescript
if (to.meta.requiresAuth) {
    if(store.state.token == null ||  store.state.token == undefined || store.state.token.length == 0) {
      next({name: 'login', query: {redirect: to.fullPath} });
      return;
    }
  }
```

### 界面展示

* 首页
![图片]()

* 登录页
![图片]()

* 公示板
![图片]()

* 个人信息页
![图片](https://github.com/icocowen/dms-vue/blob/master/doc/img/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E9%A1%B5.jpg)

* 统计报表页
![图片]()


### 项目安装
```
npm run install
```

### 运行
```
npm run serve
```

### 编译
```
npm run build
```

### Lints and fixes files
```
npm run lint
```