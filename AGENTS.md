# app 开发约定（模板版）

## 1. 核心原则

1. 能放一个文件就放一个文件。
2. 先保证可读性和维护效率，再考虑细分层。
3. 避免为了架构形式感增加文件数量。

## 2. 推荐目录结构

```text
src/app/
├── lib/
│   ├── api.uts
│   ├── auth.uts
│   ├── media.uts
│   └── upload.uts
├── store/
│   ├── medicine-list-state.uts
│   ├── medicine-entry-draft-state.uts
│   ├── profile-state.uts
│   └── xxx-state.uts
├── pages/
│   ├── login/
│   │   └── index.uvue
│   ├── home/
│   │   ├── index.uvue
│   │   ├── home-logic.uts
│   │   └── components/
│   └── feature-x/
│       ├── index.uvue
│       ├── feature-x-logic.uts
│       └── components/
└── pages.json
```

## 3. 常见问题

1. 什么时候拆 `*-logic.uts`？
   - 超过 300-400 行且明显难读，再拆。

2. `components` 里能放 `.uts` 吗？
   - 默认不放；`components` 只放 UI 组件。

3. 新功能最少要建哪些文件？
   - `index.uvue` + `feature-x-logic.uts` + `components/`。

4. 什么状态放 `store`？
   - 跨页面共享状态放 `store`；页面临时输入态不放。

5. 页面报 `Could not resolve` 怎么查？
   - 先看 import 路径；再看目标文件是否存在；最后看 `pages.json` 路由是否同步。

6. 怎么切 API 环境？
   - 在仓库根目录执行：`npm run app:env:dev` / `npm run app:env:tunnel` / `npm run app:env:prod`。

## 4. uvue 迁移注意事项（精简）

1. UTS 不是 JS：别直接用 JS 习惯写法（如 `String()`、`Number()`、复杂语法糖）。

2. 模板别直接读动态字段：`{{ item['name'] }}` 容易误判，改为脚本函数后在模板调用。

3. 网络请求优先回调封装：`uni.request/chooseImage/uploadFile` 用 `success/fail` 封 Promise，更稳。

4. 所有可空值先判空：`getStorageSync`、`payload['data']`、`item['images']` 等都先判 `null`。

5. 类型转换走保守写法：字符串拼接用 `'' + value`，已知类型用 `as`，少用构造式转换。

6. 数字要显式解析：不要把字符串直接断言成数字，统一走解析函数（如 `parseQuantity`）。

7. 少用高阶数组和展开语法：`map/includes/...`、`for...of` 在 UTS 环境稳定性较弱，优先 `for` 循环。

8. 模板保持简单：复杂判断/拼接/格式化放到 `<script setup lang="uts">`。

9. CSS 按 uvue 子集写：不要默认 Web CSS 全支持，优先明确尺寸和简单样式。

10. 字重别写 `800/900`，统一用 `400/500/600/700` 或 `normal/bold`；阴影别默认用 `shadow-*` 一类属性，先确认 uvue 支持。

11. 项目已接入 `Material Symbols Outlined` 本地字体图标；通用图标优先复用现有字体图标，不要默认手动画或临时字符替代。

12. 路由别混用 `switchTab`：非原生 tabBar 页面用 `reLaunch/navigateTo/navigateBack`。
