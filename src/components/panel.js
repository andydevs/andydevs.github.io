import React from "react";
import "./panel.css";

export default function Panel({ color='gray', className, children }) {
    return (
        <div className={'panel panel-' + color + ' ' + className}>
            {children}
        </div>
    )
}