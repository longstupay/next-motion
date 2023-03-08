"use client";

import { navTitle } from "@/contents/Item";
import useControlPage from "@/utils/hooks/useControlPage";
import { sidebar } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "./NavBar";

interface ToggleMenuProps {
  isOpened: boolean;
  setIsOpened: () => void;
}

function ToggleMenu(props: ToggleMenuProps) {
  const { isOpened, setIsOpened } = props;
  const { currentId, setCurrentId } = useControlPage();
  //打开时禁用滚动
  React.useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpened]);

  return (
    <React.Fragment>
      <div className="" onClick={() => setIsOpened()}>
        {!isOpened ? (
          <img alt="menu-icon" src="/assets/menu-icon.svg" />
        ) : (
          <img alt="close-icon" src="/assets/close-icon.svg" />
        )}
      </div>
      {
        <motion.div
          initial={false}
          animate={isOpened ? "open" : "closed"}
          variants={sidebar}
          className="fixed right-0 top-0 -z-10 h-full w-[300px] bg-blue"
        >
          <div className="flex h-full flex-col items-center justify-center gap-8 font-bold">
            {navTitle.map((item) => (
              <Link
                key={item.id}
                page={item.title}
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            ))}
          </div>
        </motion.div>
      }
    </React.Fragment>
  );
}

export default ToggleMenu;
