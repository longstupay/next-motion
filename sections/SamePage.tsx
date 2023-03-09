'use client';

import BranchIcon from '@/icons/BranchIcon';
import React from 'react';

function SamePage() {
    return (
        <section>
            <div className="relative h-[800vh]">
                <div className="sticky top-1/2 flex origin-center -translate-y-1/2 justify-center">
                    <div className="translate-x-centered-offset absolute left-1/2 top-1/2 h-[75vh] max-h-[48vw] -translate-y-1/2 scale-[var(--scale)] ">
                        <img
                            src="/main-screen.svg"
                            className="h-[75vh] max-h-[48vw] w-auto"
                        />
                        <span className="mt-3 block text-2xl text-white">
                            <BranchIcon className="mr-3 inline-block h-12 w-12" /> Feature
                            branch
                        </span>
                    </div>
                    <div className="translate-x-centered-offset absolute left-1/2 top-1/2 h-[75vh] max-h-[48vw]  -translate-y-1/2 scale-[var(--scale)]">
                        <img
                            src="/loading-screen.svg"
                            className="h-[75vh] max-h-[48vw] w-auto"
                        />
                        <div className="absolute inset-0">
                            <img
                                src="/main-screen.svg"
                                className="h-[75vh] max-h-[48vw] w-auto"
                            />
                        </div>
                        <span className="mt-3 block text-2xl text-white">
                            <BranchIcon className="mr-3 inline-block h-12 w-12" />{' '}
                            Frontend FYI&#39;s branch
                        </span>
                    </div>

                    <p className="translate-y-centered-offset absolute top-1/2 left-[calc(50%-60rem)] w-[50rem] pl-16 text-2xl leading-tight text-white">
                        <span className="text-primary">Built for flow</span>
                        <br />
                        Spin up a new branch for any sized project in seconds.
                    </p>
                </div>
                <p className="translate-y-centered-offset top-1/2 left-[20px] w-[300px] pl-16 text-2xl leading-tight text-white">
                    Not only share code,
                    <br />
                    <span className="text-primary">share the context.</span>
                </p>
                <p className="translate-y-centered-offset top-1/2 right-[20px] w-[300px] pr-16 text-xl leading-tight text-white">
                    Sometimes it&#39;s not about code.
                    <br />
                    <span className="text-primary">
                        Get everybody on the same page. Literally.
                    </span>
                </p>
            </div>
        </section>
    );
}

export default SamePage;
