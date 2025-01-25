import React from "react";
import { Outlet } from "react-router-dom";

import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";
import MobileMenu from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";
import Footer from "./components/Footer";

const Root = ({viewport}) => {
    return (
    <>
    {viewport < 1080 ? <MobileHeader /> : <DesktopHeader />}
    {viewport < 1080 ? <MobileMenu /> : <DesktopMenu />}
    <Outlet />
    <Footer />
    </>
    );
    }

export default Root;
