import React from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="pt-24 ">{children}</main>
            <Footer />
        </>
    );
};

export default DefaultLayout;
