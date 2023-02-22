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

## 使用NextJS搭建一个富有交互的首页

主要使用的技术栈有：NextJS、Tailwind、Framer Motion

> NextJS启用实验性的App Dir模式

```yml
nextjsVersion 13.1.6
framer-motionVersion 9.0.7
```

### 安装Tailwind和Framer Motion

```bash

在create-next-app的基础上，安装Tailwind

[TailwindCSS](https://tailwindcss.com/docs/guides/nextjs)

```base
pnpm install -D tailwindcss postcss autoprefixer
pnpm exec tailwindcss init -p
# 随后按官网配置tailwind.config.js
pnpm i framer-motion
```

## 项目基础目录结构

首先整理脚手架自带的一些文件，然后按照自己的需求进行目录结构的划分

### app目录

初始结构

📦app  
 ┣ 📜globals.css  
 ┣ 📜head.tsx  
 ┣ 📜layout.tsx  
 ┣ 📜page.module.css  
 ┗ 📜page.tsx  

整理思路

1. 在根目录下创建styles目录，把globals.css放到styles目录下
2. 在根目录下创建components目录和sections目录以及utils目录、constants目录
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



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
