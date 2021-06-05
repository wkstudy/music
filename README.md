# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

- [x] 推荐页面
- [x] 歌单列表
- [x] 播放页面

### 说明

1. 播放音乐显示 403， 使用替代方案[参考](https://neteasecloudmusicapi.vercel.app/#/?id=%e8%8e%b7%e5%8f%96%e9%9f%b3%e4%b9%90-url)
   [图片](docs/img/desc.png)

```
注 : 部分用户反馈获取的 url 会 403,hwaphon找到的解决方案是当获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
```

### 启动

```
npm run dev
```

### 打包

```
npm run build
```

### eslint tslint prettier 配置

最后选择直接用 AlloyTeam 的配置规范
[参考 1](https://github.com/xcatliu/typescript-tutorial/blob/master/engineering/lint.md)
[参考 2](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md#vue)
