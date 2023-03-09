import Github from '@/icons/Github';
import React from 'react';

function NavBar() {
    return (
        <nav className="fixed inset-2 py-3 px-4">
            <div className="flex items-center justify-between">
                <div className="text-xl font-extrabold">
                    <span>Taib UI</span>
                </div>
                <div>
                    <Github className="h-6 w-6 fill-current text-white" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
