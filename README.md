# XT Admin

XT Admin 是前端中、后台的前端应用级框架，使用了如下的技术构建：

- [Vue 3](https://cn.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 4](https://cn.vitejs.dev/)
- [TailwindCSS 3](https://tailwindcss.com/)
- [Sass](https://sass-lang.com/)

## 推荐开发环境

推荐使用 [VS Code](https://code.visualstudio.com/) 作为编辑器/IED。在 VSCode 中安装以下扩展：

- **必需**：[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- **推荐**：[eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- **推荐**：[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

> **注意：**不要使用 vuter 插件，该扩展专为 Vue 2 开发，现已不再维护。官方推荐使用 Volar 代替。

## 命令说明

安装项目依赖（仅当首次下载项目和当`package.json`文件更新时）：

```sh
npm install
```

运行服务：

```sh
npm run dev
```

检查和自动修正代码：

> 说明：项目集成了[ESLint](https://eslint.org/)、[Prettier](https://prettier.io/)和[Husky](https://typicode.github.io/husky/#/)。使用 Git 上传代码时，将会自动检查和修正需要上传的代码；如果出现无法自动修正的问题则会报告错误或警告。因此此命令一般无需手动执行。

```sh
npm run lint
```

编译打包：

```sh
npm run build
```

## 使用说明

XT Admin 包含前端中、后台常见界面模板、组件和模块，同时包含编译构建、代码格式化、响应模拟等开发环境下工具链的集成。

XT Admin 的目标是成为组织内项目开发的最佳实践，因此在设计、编码、架构和实现层面均遵循特定的标准。相关标准草案文件发布于语雀文档空间[中协通软件](https://xt-soft.yuque.com/staff-yb9xzg/og6phe)内，注册语雀账号并加入该空间来参与关于编码、低代码、接口等方面标准化文件起草与修订。