// @ts-nocheck

export const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 1,
      },
    },
  };
  
  export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });
  
  export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });
  
  export const textVariant = (delay) => ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  });
  
  export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };
  
  export const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };
  
  export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });
  
  export const planetVariants = (direction) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      rotate: 120,
    },
    show: {
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay: 0.5,
      },
    },
  });
  
  export const zoomIn = (delay, duration) => ({
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });
  
  export const footerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 0.5,
      },
    },
  };
  

  // landing page motion



export const stagger = {
  show:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:-1
    }
  }
}



export const easeing = [0.6,-0.05,0.01,0.99];

export const header={
  hidden:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easeing}
  },
  show:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      ease:easeing
    }
  }
};

export const bannerVar = {
  hidden:{
    opacity:0,
    scale:0,
  },
  show: {
    opacity:1,
    scale:1,
    transition:{
      duration:0.3,
      easeing:easeing,
      when:"beforeChildren",
    }
  }
}


export const firstName = {
  hidden:{
    y:-20,
  },
  show:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}
// delayChildren 当使用变体时，子元素动画将在这个持续时间（以秒为单位）后开始。你可以直接将过渡属性添加到frane和Var中。把它添加到变体中通常会提供更多的灵活性
//，因为它允许你定制每个视觉状态的延迟。

// staggerChildren 用于在动画中创建延迟。它将在每个子元素上应用延迟，而不是在整个动画上应用延迟。这意味着你可以在动画中创建更多的视觉层次结构。
//当使用变体时，子组件的动画可以通过这个持续时间（以秒为单位）错开。
//例如，如果staggerChildren是0.01，第一个子组件将延迟0秒，第二个延迟0.01，第三个延迟0.02，以此类推。
//计算出的交错延迟将被添加到delayChildren中。

export const lastName = {
  hiddem:{
    y:20,
  },
  show:{
    y:0,
    transition:{
      delayChildren:0.52,
      staggerChildren:0.28,
      staggerDirection:-1,
    }
  }
}





export const star={
  hidden:{
    y:160,
    opacity:0,
    transition:{duration:0.8, ease:easeing}
  },
  show:{
    y:0,
    opacity:1,
    transition:{
      duration:1.3,
      ease:"easeOut"
    }
  }
};