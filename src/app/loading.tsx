import React from "react";

const loading = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-whit">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default loading;
