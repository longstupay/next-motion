'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

function Collaboration() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end'],
    });

    const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.95], [1, 2.5, 2.5]);
    const xPic = useTransform(
        scrollYProgress,
        [0.1, 0.25, 0.7, 0.9],
        ['8%', '-55%', '-60%', '-80%']
    );

    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    return (
        <section className="mt-[-30vh]">
            <div ref={ref} className="h-[300vh] w-full">
                <div className="sticky top-[10vh]">
                    <div className="flex justify-center">
                        <motion.div
                            style={{ scale, x: xPic, opacity }}
                            className="origin-top"
                        >
                            <img
                                src="/main-screen.svg"
                                className="h-[75vh] max-h-[45vw] w-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Collaboration;
