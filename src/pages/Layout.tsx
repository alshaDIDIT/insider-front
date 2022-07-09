import React from 'react'
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className="layout">
            <header>
            </header>
            <section>
                <main>
                    <Outlet />
                </main>
            </section>
            <footer>
            </footer>
        </div>
    )
}
