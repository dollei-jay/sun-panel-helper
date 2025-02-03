# Sun-Panel-Helper

<div align="center">
  <img src="https://pic2.ziyuan.wang/user/madrays/2025/02/logo _1__216e59a7de7ac.png" width="300" height="275" alt="Sun-Panel-Helper Logo" />

  [![Github](https://img.shields.io/badge/Github-123456?logo=github&labelColor=242424)](https://github.com/madrays/sun-panel-helper)
  [![Gitee](https://img.shields.io/badge/Gitee-123456?logo=gitee&labelColor=c71d23)](https://gitee.com/madrays/sun-panel-helper)
  [![docker](https://img.shields.io/badge/docker-123456?logo=docker&logoColor=fff&labelColor=1c7aed)](https://hub.docker.com/r/madrays/sun-panel-helper)

  [![GitHub stars](https://img.shields.io/github/stars/madrays/sun-panel-helper?style=flat&logo=github)](https://github.com/madrays/sun-panel-helper)
  [![Docker pulls](https://img.shields.io/docker/pulls/madrays/sun-panel-helper.svg?logo=docker)](https://hub.docker.com/r/madrays/sun-panel-helper)

  [Sun-Panel 项目](https://github.com/hslr-s/sun-panel)

  一款为 Sun-Panel 设计的可视化美化工具，让你的 Sun-Panel 锦上添花~
</div>

## 🌟 在线体验

我们提供了完整的演示环境，让你在部署前可以充分体验：

### 🎨 Sun-Panel-Helper Demo
- 地址：[demo.cocoyoo.cn](http://demo.cocoyoo.cn)
- 功能：
  - 体验完整的样式编辑功能
  - 预览各种美化效果
  - 测试部署流程

### 🎯 Sun-Panel 演示站
- 地址：[home.cocoyoo.cn](http://home.cocoyoo.cn)
- 特点：
  - 展示实际应用效果
  - 体验优化后的界面
  - 感受流畅的交互体验

> 💡 提示：你可以在 Helper Demo 中编辑样式，然后在演示站中查看效果，体验完整的美化流程！

## ✨ 功能特点

- 🔗 中转服务
  - 连接 Sun-Panel 前端与 Helper 后端
  - 自动同步配置文件
  - 实时更新无需重启
  - 支持多实例部署

- 🎨 可视化配置
  - 所见即所得的编辑体验
  - 实时预览修改效果
  - 参数持久化存储
  - 一键应用到面板

- 🛠️ 扩展支持
  - CSS 样式扩展
  - JS 功能增强
  - 组件动态加载
  - 配置自动同步

- 🚀 便捷部署
  - Docker 一键部署
  - 自动挂载配置
  - 支持反向代理
  - 完整的部署文档

## 🚀 快速部署

### 单独部署 Sun-Panel-Helper

使用 Docker Compose 一键部署:

```yaml
version: '3'
services:
  sun-panel-helper:
    image: madrays/sun-panel-helper:latest
    container_name: sun-panel-helper
    ports:
      - "33002:80"
    volumes:
      - /path/to/sunpanel/conf/custom:/app/backend/custom  # 替换为你的 Sun-Panel custom 目录路径
    restart: unless-stopped
```

### Sun-Panel + Helper 一键部署（以飞牛OS为例）

```yaml
version: "3.2"
services:
  # Sun-Panel 服务
  sun-panel:
    image: "hslr/sun-panel:latest"
    container_name: sun-panel
    volumes:
      - /vol1/@appshare/sunpanel/conf:/app/conf
      - /var/run/docker.sock:/var/run/docker.sock # 挂载docker.sock
      - /vol1:/os # 硬盘挂载点（根据自己需求修改）
    ports:
      - 3002:3002
    restart: always

  # Sun-Panel-Helper 服务
  sun-panel-helper:
    image: madrays/sun-panel-helper:latest
    container_name: sun-panel-helper
    ports:
      - "33002:80"
    volumes:
      - /vol1/@appshare/sunpanel/conf/custom:/app/backend/custom
    restart: always
```

启动命令：
```bash
docker-compose up -d
```

### 📝 初始登录信息

<div align="center" style="border: 1px solid #1677ff; padding: 20px; border-radius: 8px; background-color: #f0f5ff; margin: 20px 0; display: inline-block; min-width: 300px; box-shadow: 0 2px 12px rgba(0,0,0,0.1);">
  <details open>
    <summary style="font-weight: bold; color: #1677ff; margin-bottom: 10px; font-size: 16px;">Sun-Panel 登录信息</summary>
    <p style="margin: 5px 0; background: #fff; padding: 10px; border-radius: 6px;">
      账号：<code style="background: #e6f4ff; padding: 2px 6px; border-radius: 4px; color: #1677ff;">admin@sun.cc</code><br>
      密码：<code style="background: #e6f4ff; padding: 2px 6px; border-radius: 4px; color: #1677ff;">12345678</code>
    </p>
  </details>
  
  <details open>
    <summary style="font-weight: bold; color: #1677ff; margin: 15px 0 10px 0; font-size: 16px;">Sun-Panel-Helper 登录信息</summary>
    <p style="margin: 5px 0; background: #fff; padding: 10px; border-radius: 6px;">
      账号：<code style="background: #e6f4ff; padding: 2px 6px; border-radius: 4px; color: #1677ff;">helper</code><br>
      密码：<code style="background: #e6f4ff; padding: 2px 6px; border-radius: 4px; color: #1677ff;">helper123</code>
    </p>
  </details>
</div>

注意事项：
- 确保端口 3002 和 33002 未被占用
- 首次启动可能需要拉取镜像，请耐心等待
- Helper 的数据目录必须挂载到 Sun-Panel 的 custom 目录
- 路径根据实际环境调整，飞牛OS示例中使用 `/vol1/@appshare/sunpanel/conf/custom`

## 📸 效果展示

<div align="center">
  <p><strong>🏠 主页面</strong></p>
  <img src="https://pic2.ziyuan.wang/user/madrays/2025/02/A_75f5f43bbdc0a.png" width="100%" alt="主界面" />
  
  <p><strong>🎨 CSS 样式库</strong></p>
  <img src="https://pic2.ziyuan.wang/user/madrays/2025/02/B_b7b4eb8d92320.png" width="100%" alt="CSS 样式" />
  
  <p><strong>⚡ JS 功能库</strong></p>
  <img src="https://pic2.ziyuan.wang/user/madrays/2025/02/C_589854676665c.png" width="100%" alt="JS 功能" />
  
  <p><strong>🛍️ 组件市场</strong></p>
  <img src="https://pic2.ziyuan.wang/user/madrays/2025/02/D_268df6470994e.png" width="100%" alt="组件市场" />

  <p><strong>📌 固定组件</strong></p>
  <img src="https://pic2.ziyuan.wang/user/madrays/2025/02/E_0766b65ab947c.png" width="100%" alt="固定组件" />

  <p><strong>�� 自由组件</strong></p>
  <img src="https://pic2.ziyuan.wang/user/madrays/2025/02/F_306d0091e3254.png" width="100%" alt="自由组件" />

  <p><strong>🔧 实时预览与部署</strong></p>
  <img src="https://pic2.ziyuan.wang/user/madrays/2025/02/G_93fd756963097.png" width="100%" alt="实时预览调参部署" />
</div>

## 🔑 初始账号
- 账号：helper
- 密码：helper123

## ⚠️ 已知问题

<div style="border: 1px solid #ff4d4f; padding: 20px; border-radius: 8px; background-color: #fff2f0; margin: 20px 0; box-shadow: 0 2px 12px rgba(0,0,0,0.1);">
  <details open>
    <summary style="font-weight: bold; color: #ff4d4f; margin-bottom: 15px; font-size: 16px;">1. 样式冲突</summary>
    <ul style="margin: 0; padding-left: 20px; color: #434343;">
      <li>部分组件样式存在冲突</li>
      <li>对于必然冲突的项目，已在详情页面中标注说明</li>
      <li>目前需要用户自行调整以达到最佳显示效果</li>
    </ul>
  </details>

  <details open>
    <summary style="font-weight: bold; color: #ff4d4f; margin: 15px 0; font-size: 16px;">2. 组件冲突</summary>
    <ul style="margin: 0; padding-left: 20px; color: #434343;">
      <li>MaxKB 浮窗和小鱼页脚等 JS 组件之间存在冲突</li>
      <li>临时解决方案：尝试调整组件的部署顺序</li>
    </ul>
  </details>

  <details open>
    <summary style="font-weight: bold; color: #ff4d4f; margin: 15px 0; font-size: 16px;">3. Markdown 编辑器配置问题 🔧</summary>
    <ul style="margin: 0; padding-left: 20px; color: #434343;">
      <li>输入 API 前缀和用户名密码后保存配置，可能无法立即部署</li>
      <li>临时解决方案：
        <ul>
          <li>刷新页面（配置不会丢失）</li>
          <li>或切换到其他页面后再进行部署</li>
        </ul>
      </li>
      <li style="color: #389e0d; font-weight: bold;">状态：正在修复中</li>
    </ul>
  </details>

  <details open>
    <summary style="font-weight: bold; color: #ff4d4f; margin: 15px 0; font-size: 16px;">4. 天气组件安全性 🔧</summary>
    <ul style="margin: 0; padding-left: 20px; color: #434343;">
      <li>当前存在 API 密钥泄露风险</li>
      <li>临时采用硬编码方式处理</li>
      <li>建议：请谨慎在公网环境使用</li>
      <li style="color: #389e0d; font-weight: bold;">状态：正在优化中</li>
    </ul>
  </details>
</div>

## 🎯 项目介绍
Sun Panel Helper 是一个专注于增强 Sun-Panel 功能的辅助工具。我们致力于为您的 Sun-Panel 带来更多精彩的功能和更好的使用体验。

作为一个热爱折腾的 AI 爱好者，我希望通过这个项目展示 AI 辅助开发的无限可能。本项目由 Sun-Panel 作者红烧猎人技术指导，全程使用 AI 辅助开发。如果你也对 AI 开发或 Sun-Panel 美化感兴趣，欢迎加入交流群一起探讨！

## ☕ 请作者喝杯奶茶
如果这个项目对你有帮助，可以请作者喝杯奶茶，您的支持是我持续创作的动力 ❤️

<div align="center">
  <div style="display: inline-block; text-align: center; margin: 0 20px;">
    <img src="https://pic2.ziyuan.wang/user/madrays/2025/02/1_dd096325eadb7.jpg" alt="微信赞赏码" width="200"/>
    <p style="margin: 10px 0; font-size: 16px;">
      <span style="background: #07c160; color: white; padding: 4px 12px; border-radius: 4px;">微信赞赏</span>
    </p>
    <p style="color: #666; font-size: 14px;">感谢支持💗</p>
  </div>
  <div style="display: inline-block; text-align: center; margin: 0 20px;">
    <img src="https://pic2.ziyuan.wang/user/madrays/2025/02/2_0c5298607b84c.jpg" alt="支付宝赞赏码" width="200"/>
    <p style="margin: 10px 0; font-size: 16px;">
      <span style="background: #1677ff; color: white; padding: 4px 12px; border-radius: 4px;">支付宝赞赏</span>
    </p>
    <p style="color: #666; font-size: 14px;">加大电力⚡️</p>
  </div>
</div>

## 🤝 技术支持

- 作者：Madrays
- QQ 交流群：1019956856
- 投稿邮箱：2826910520@qq.com
- 项目指导：感谢 Sun-Panel 作者红烧猎人的技术支持

## 📈 项目统计

[![Star History Chart](https://api.star-history.com/svg?repos=madrays/sun-panel-helper&type=Date)](https://star-history.com/#madrays/sun-panel-helper&Date)
