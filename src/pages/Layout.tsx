import React from 'react'
import { Outlet } from 'react-router-dom'
import BasicFooter from "../templates/components/footer/BasicFooter";
import CorneredNav from "../templates/components/nav-cornered/CorneredNav";

export const Layout = () => {
    return (
        <div className="layout">
            <header>
                <CorneredNav />
            </header>
            <section>
                <main>
                    <Outlet />
                </main>
            </section>
            <footer>
                <BasicFooter
                    backColor={'#303a49'}
                />
            </footer>
        </div>
    )
}
