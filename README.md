This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 使用 NextJS 搭建一个富有交互的首页

主要使用的技术栈有：NextJS、Tailwind、Framer Motion

> NextJS 启用实验性的 App Dir 模式

```yml
nextjsVersion 13.1.6
framer-motionVersion 9.0.7
```

### 安装 Tailwind 和 Framer Motion

````bash

在create-next-app的基础上，安装Tailwind

[TailwindCSS](https://tailwindcss.com/docs/guides/nextjs)

```base
pnpm install -D tailwindcss postcss autoprefixer
pnpm exec tailwindcss init -p
# 随后按官网配置tailwind.config.js
pnpm i framer-motion
````

## 项目基础目录结构

首先整理脚手架自带的一些文件，然后按照自己的需求进行目录结构的划分

### app 目录

初始结构

📦app
┣ 📜globals.css
┣ 📜head.tsx
┣ 📜layout.tsx
┣ 📜page.module.css
┗ 📜page.tsx

整理思路

1. 在根目录下创建 styles 目录，把 globals.css 放到 styles 目录下
2. 在根目录下创建 components 目录和 sections 目录以及 utils 目录、constants 目录
3. 添加相对应的文件

`mkdir components sections utils constants`

整理后的目录结构

📦utils
┗ 📜motion.ts
📦styles
┣ 📜globals.css
┗ 📜index.ts
📦components
┣ 📜Footer.tsx
┣ 📜index.ts
┗ 📜NavBar.tsx
📦sections
┣ 📜About.tsx
┗ 📜index.ts

## portfolio 项目

### Setting up Prettier

使用 pnpm 时，可能需要配置 pretter.config.js,且在 vscode 中的 prettier 插件配置文件路径（默认为空）
