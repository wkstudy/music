# 网易云音乐

> 目前已完成一下三个页面，可实现歌单库 -> 歌单列表  -> 播放的完成操作
> 为了对比做一些简单的对比，同样的项目还改了一个vue-cli版本的

- [x] 推荐页面(上方banner不可点击)
- [x] 歌单列表
- [x] 播放器



## 技术栈
1. 框架 vue3 + vue-router4 + vuex4
2. ui vant
3. 构建/打包工具: vite

## 在线访问地址
[在线体验](https://music-jade.vercel.app/index)
### 说明
1. 网易云音乐api使用的是[开源项目](https://github.com/Binaryify/NeteaseCloudMusicApi)，fork之后部署到了[vercel](https://vercel.com/dashboard)
2. 本项目同样页部署到了vercel上
3. 播放音乐显示 403， 使用替代方案[参考](https://neteasecloudmusicapi.vercel.app/#/?id=%e8%8e%b7%e5%8f%96%e9%9f%b3%e4%b9%90-url)
   [图片](docs/img/desc.png)
```
注 : 部分用户反馈获取的 url 会 403,hwaphon找到的解决方案是当获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
```

### 启动

```
npm run dev
npm run dev --rd=test
```

### 打包

```
npm run build
```

### vite preview
```
npm run build
npm run serve
```

### eslint tslint prettier 配置


最后选择直接用 AlloyTeam 的配置规范
[参考 1](https://github.com/xcatliu/typescript-tutorial/blob/master/engineering/lint.md)
[参考 2](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md#vue)
