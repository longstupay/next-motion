'use client';

import Flow from '@/icons/Flow';
import Intellisense from '@/icons/Intellisense';
import Keyboard from '@/icons/Keyboard';
import MagicBranch from '@/icons/MagicBranch';
import Prebuilds from '@/icons/Prebuilds';
import Preview from '@/icons/Preview';
import React from 'react';

const content = [
    {
        icon: Prebuilds,
        title: 'Prebuilds',
        text: 'CodeSandbox continuously prebuilds your branches. This means no more waiting for dependencies to be downloaded and builds to finish.',
    },
    {
        icon: Intellisense,
        title: 'IntelliSense',
        text: 'Go beyond syntax highlighting and autocomplete. With smart completions based on variable types, function definitions, and imported modules.',
    },
    {
        icon: Flow,
        title: 'Built for flow',
        text: 'A completely redesigned experience to keep you in flow.',
    },
    {
        icon: MagicBranch,
        title: 'Magic Branch Management',
        text: 'Organize your development workflow and help your team move work forward',
    },
    {
        icon: Keyboard,
        title: 'Keyboard first design',
        text: 'Quick access makes for an efficient workflow. Navigate quickly with our extensive keyboard shortcuts.',
    },
    {
        icon: Preview,
        title: 'Live preview',
        text: 'See changes as you make them. With Hot reload Previews see your changes instantly. ',
    },
];

function MoreFeatures() {
    return (
        <section className="mx-auto grid w-full max-w-[120rem] grid-cols-3 gap-40 py-96">
            {content.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                    <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#151515]">
                        <Icon className="h-12 w-12 fill-current text-gray-100" />
                    </span>
                    <h3 className="mb-2 text-xl text-white">{title}</h3>
                    <p className="text-md">{text}</p>
                </div>
            ))}
        </section>
    );
}

export default MoreFeatures;