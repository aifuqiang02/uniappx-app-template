# lime-vibrate 震动组件
一个基于 UTS 实现的震动功能组件，支持安卓、鸿蒙Next、iOS平台。通过简单的 API 调用，可以实现设备的震动效果，增强用户交互体验。

## 文档链接
📚 插件详细文档请访问以下站点：
- [震动插件文档 - 站点1](https://limex.qcoon.cn/native/vibrate.html)
- [震动插件文档 - 站点2](https://limeui.netlify.app/native/vibrate.html)
- [震动插件文档 - 站点3](https://limeui.familyzone.top/native/vibrate.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-vibrate`
2. 在页面中使用震动功能
3. 安卓需要自定义基座，win开发的ios也需要自定义基座

## 代码演示

### 基础用法
最简单的震动功能调用。

```js
// 导入震动功能
import { vibrate } from '@/uni_modules/lime-vibrate'

// 触发150毫秒的震动
vibrate()

// 指定时间
// ios不支持指定时间
vibrate(200)
```


## API文档

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| vibrate | 触发设备震动（ios无效） | duration: number (震动持续时间，单位毫秒) | void |

## 平台兼容性

| 平台 | 支持情况 |
| --- | --- |
| Android | ✅ 支持 |
| iOS | ✅ 支持 |
| 鸿蒙Next | ✅ 支持 |
| Web | ❌ 不支持 |
| 小程序 | ✅ 不支持 |



## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |
