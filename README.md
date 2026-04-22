# uniappx-app-template

`uni-app x` App 模板项目，适合作为移动端 App 基础壳快速复制使用。

## 模板包含内容

- 登录页示例：一键登录 + 验证码登录双态
- 首页三段式壳：列表 / 录入 / 我的
- 页面级状态管理示例：药品列表、录入草稿、个人信息
- 上传与媒体选择基础封装：`lib/media.uts`、`lib/upload.uts`
- 接口请求与鉴权封装：`lib/api.uts`、`lib/auth.uts`
- 本地图标字体与基础视觉风格示例

## 目录结构

```text
uniappx-app-template/
├── lib/
├── pages/
├── static/
├── store/
├── App.uvue
├── AGENTS.md
├── manifest.json
└── pages.json
```

## 套用模板后建议优先修改

1. 修改 `manifest.json` 中的应用名、`appid`、描述、图标和启动图。
2. 修改 `.env.development`、`.env.tunnel`、`.env.production` 中的接口地址。
3. 修改 `lib/config.uts`，确保默认 API 地址符合当前项目。
4. 修改 `pages/login/index.uvue` 中品牌文案、协议文案、登录说明。
5. 修改 `pages/home/components/medicine-list-tab.uvue` 与 `pages/home/components/profile-tab.uvue` 中首页标题和示例业务文案。
6. 按实际业务调整 `store/` 下的状态结构与 `pages/home/home-logic.uts` 的接口字段映射。
7. 更新 `AGENTS.md`，补充你自己项目的开发约定。

## 不建议直接保留的示例内容

- 药品列表字段与页面文案
- 示例用户昵称与会员等级
- 示例登录流程提示文案
- 示例业务按钮与占位文案

## 开发说明

- 本模板适合在 HBuilderX 中直接打开运行。
- 已忽略 `node_modules/`、`unpackage/`、`.hbuilderx/`。
- 如果你在仓库根目录维护环境切换脚本，请同步更新 `lib/config.uts` 的生成逻辑。

## 建议首个动作

1. 复制模板到业务目录。
2. 初始化自己的 Git 仓库。
3. 完成应用名、接口地址、登录协议文案替换。
4. 根据业务改首页 tab 结构和数据模型。
