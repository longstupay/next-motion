"use client";

import useControlPage from "@/utils/hooks/useControlPage";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import React from "react";
import { navTitle } from "@/contents/Item";
import AnchorLink from "react-anchor-link-smooth-scroll";

function DotNav() {
  // 媒体查询是否匹配,用于控制显示Dot Nav
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  // 当前锚点页
  const { setCurrentId, currentId } = useControlPage();

  const activeCls = `relative block before:absolute before:border-2 transition duration-500 before:h-6 before:w-6 before:-z-10 bg-yellow before:rounded-full before:-left-[50%] before:-top-[50%] before:p-0.5 `;

  React.useEffect(() => {
    // 这里的代码会在 currentId 状态更新后执行
    console.log(currentId);
  }, [currentId]);

  return isDesktop ? (
    <div className="fixed top-[50%] right-7">
      <div className="flex h-64 w-9 flex-col gap-6 ">
        {navTitle.map((k, i) => (
          <AnchorLink
            key={i}
            href={`#${k.id.toLowerCase()}`}
            className={`${
              currentId.toLowerCase() === k.id.toLocaleLowerCase()
                ? activeCls
                : "bg-gray-500"
            } h-3 w-3 rounded-full`}
            onClick={() => setCurrentId(k.id.toLowerCase())}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="hidden"></div>
  );
}

export default DotNav;
