<p align="center">
  <h1 align="center">宿舍管理 -- vue app</h1>
</p>

### 介绍 
由vue搭建的、宿舍管理系统。这个是另一个[spring boot项目](https://github.com/icocowen/dms-spring-boot)的前端app。如果需要运行则需要启动后端项目。

or 👌

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

* 首页 🐱‍🐉
![首页](https://github.com/icocowen/dms-vue/blob/master/doc/img/%E9%A6%96%E9%A1%B5.png)

* 登录页 🎗
![登录页](https://github.com/icocowen/dms-vue/blob/master/doc/img/%E7%99%BB%E5%BD%95%E9%A1%B5.png)

* 公示板 🎃
![公示板](https://github.com/icocowen/dms-vue/blob/master/doc/img/%E5%85%AC%E7%A4%BA%E6%9D%BF.png)

* 个人信息页 🎇
![个人信息页](https://github.com/icocowen/dms-vue/blob/master/doc/img/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E9%A1%B5.jpg)

* 统计报表页 🧨
![统计报表页](https://github.com/icocowen/dms-vue/blob/master/doc/img/%E7%BB%9F%E8%AE%A1%E6%8A%A5%E8%A1%A8%E9%A1%B5.png)

* 还有更多... 这就不截图了 🧣
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

#### 如果喜欢请点个star 😁✨




