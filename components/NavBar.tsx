"use client";
import { navTitle } from "@/contents/Item";
import useControlPage from "@/utils/hooks/useControlPage";
import { useDimensions } from "@/utils/hooks/useDimision";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { sidebar } from "@/utils/motion";
import { motion, useCycle } from "framer-motion";
import React, { useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ToggleMenu from "./ToggleMenu";

export interface LinkProps {
  page: string;
  currentId: string;
  setCurrentId: (id: string) => void;
}

export const Link = React.memo(Links);

function Links(props: LinkProps) {
  const { page, currentId, setCurrentId } = props;
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        currentId === lowerCasePage ? "text-yellow" : ""
      } transition duration-500 hover:text-yellow`}
      href={`#${lowerCasePage}`}
      onClick={() => setCurrentId(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default function NavBar() {
  const { isNavShow, currentId, setCurrentId } = useControlPage();
  const isDestop = useMediaQuery("(min-width: 1060px)");
  const NavBarBackground = isNavShow ? "" : "bg-red";

  const NavBarBgcls = React.useMemo(() => {
    return isNavShow ? "" : "bg-red";
  }, [isNavShow]);

  const [isOpened, setIsOpened] = useCycle(false, true);

  React.useEffect(() => {
    // 这里的代码会在 currentId 状态更新后执行
    console.log(currentId);
  }, [currentId]);

  return (
    <nav className={`${NavBarBackground} fixed top-0 z-40 w-full py-6`}>
      <div className="relative mx-auto flex w-5/6 items-center justify-between gap-16">
        <h4 className="font-playfair text-3xl font-bold">Y N</h4>

        {/* Desktop Nav */}
        {isDestop ? (
          <div className="flex items-center gap-8">
            {navTitle.map((item) => (
              <Link
                key={item.id}
                page={item.title}
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            ))}
          </div>
        ) : (
          <motion.div className="flex h-9 w-9 items-center justify-center rounded-full bg-red">
            <motion.div className="">
              <ToggleMenu isOpened={isOpened} setIsOpened={setIsOpened} />
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
