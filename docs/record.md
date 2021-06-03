# 问题记录

1. [todo] 无法智能解析自定义(alias)的路径，导致无法提示相应信息
```
// vite.config.ts
import path from 'path';

  resolve: {
    alias: {
      '@': "/src",
      '@api': '/src/api',
      '@util': '/src/util', // 写法1
      '@assets': path.resolve(__dirname, 'src/assets') // 写法2
    }
  },

// app.vue
import { search } from '@api/index';


```
[图1](img/1.png)

2. [done] nodejs语法解析不了
```

const path = require('path') 
resolve: {
  alias: {
    '@assets': path.resolve(__dirname, 'src/assets')
  }
}
<!-- 提示require __dirname 无法找到 -->

import path from 'path'; // 提示需要使用 es6语法并安装 @types/node

```

3. css 预处理器less 配置不同，只需要
```
npm i less -d
```

4. postcss 配置 (autoprefixer不生效)
```
// postcss.config.js
module.exports = {
  plugins: {
    // autoprefixer 里什么都不传的话不生效
    'autoprefixer': {
      "overrideBrowserslist": [
        "defaults",
        "not ie < 11",
        "last 2 versions",
        "> 1%",
        "iOS 7",
        "last 3 iOS versions"
      ]
    }
  }
}
```
5. `lib-flexible` + `postcss-px2rem` 的插件配置报错,替换为`postcss-pxtorem`,两者的配置项会有所不同，[参考原因](https://github.com/vitejs/vite/issues/3046)

6. `npm run build`失败，原因是无法解析alias定义的路径名称，暂时不用alias定义路径打包
[图2](img/2.png)


7. 配置 @rollup/plugin-commonjs 出错, 暂时对这个插件的作用不太了解，是把项目里的commonjs语法转为es6吗？[error](https://github.com/vitejs/vite/issues/3394)

8. 热更新失效很常见，需要手动刷新

9. .vue文件不加后缀vetur报错`import SongSheetHeader from '../components/songsheet/SongSheetHeader.vue'`
10. 运行`npm run serve` 和运行`npm run dev`得到的结果不一样，在dev下正常的在serve时不正常，无法正常使用（好像运行的是之前版本的代码、路由也有点问题）


11. `import.meta.env`和`process.env`上的变量有什么区别？
目前来看 `import.meta.env`是利用dotenv加载.env相关文件上的变量，  `process.env`是nodejs进程上的变量，无法互相访问

12. 目前在项目中无法访问`process`,只能使用`import.meta.env`
13. ts规范严格，有错误`npm run build`无法成功
14. `npm run dev `成功的情况下`npm run build`可能存在无数个报错（大部分是关于ts）
15. `npm run build`时的ts报错
```
// songlist.vue
const handleClick = (id: number) => {
      emit('play', id);
    }

// songsheet.vue
<div  @play="handlePlay"></div>


const handlePlay = (id: Event) => {
      store.commit('MutateCurrentPos', {curPos: tracks.findIndex(item => item.id === id as unknown as number)})
    }

id明明是个number,但必须定义为Event,否则build出错
```
16. build[官网说明](https://cn.vitejs.dev/guide/build.html#building-for-production)
> 1. build默认打包的文件是要求 浏览器支持 esm script标签和esm动态导入的，可以配置的最低构建目标是es2015
> 2. 可以通过@vitejs/plugin-legacy 插件支持其他浏览器，打包的文件包含传统版本的chunk（浏览器不支持esm时按需加载）和支持es特性的chunk, 因此打包的体积肯定会比较大
[默认打包](img/3.png)
[安装@vitejs/plugin-legacy](img/4.png)