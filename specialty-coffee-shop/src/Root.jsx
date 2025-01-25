import React from "react";
import { Outlet } from "react-router-dom";

import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";
import Footer from "./components/Footer";

const Root = ({viewport}) => {
    return (
    <>
    {viewport < 1080 ? <MobileHeader /> : <DesktopHeader />}
    <Outlet />
    <Footer />
    </>
    );
    }

export default Root;
