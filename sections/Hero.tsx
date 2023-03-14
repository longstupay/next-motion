'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

function Hero() {
    const ref = useRef(null);

    /** @type {*}
     *  emd emd，ref的底部和view的底部重合；end start,ref的底部和视口的顶部重合
     */
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
    const position = useTransform(scrollYProgress, (pos) =>
        pos === 1 ? 'relative' : 'fixed'
    );
    return (
        <motion.section
            style={{ opacity }}
            ref={ref}
            className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_calc(300px)_calc(300px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
        >
            <motion.div
                style={{ scale, x: '-50%', position }}
                className="left-1/2 z-10 flex flex-col items-center"
            >
                <p className="mb-2 text-xl font-light">
                    <span className="font-medium">Projects</span> Beta
                </p>
                <p className="mb-8 text-center text-xs font-light text-text">
                    by{' '}
                    <a
                        href="https://www.codesandbox.com"
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                    >
                        CodeSandbox
                    </a>
                    ,
                    <br />
                    rebuilt by{' '}
                    <a
                        href="https://www.frontend.fyi"
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                    >
                        Frontend.FYI
                    </a>
                </p>

                <h1 className="mb-12 text-center font-heading text-3xl leading-[1]">
                    Development
                    <br />
                    reimagined.
                </h1>

                <a href="#" className="flex items-center text-lg text-primary">
                    Import GitHub project
                </a>
            </motion.div>
        </motion.section>
    );
}

export default Hero;
