import React from "react";
import "./panel.css";

export default function Panel({ className='', children }) {
    return (
        <div className={`panel ${className}`}>
            {children}
        </div>
    )
}
Panel.Header = ({ children }) => <div className='panel-header'>{children}</div>
Panel.Footer = ({ children }) => <div className='panel-footer'>{children}</div>
Panel.Title = ({ children }) => <h3 className='panel-title'>{children}</h3>
Panel.Subtitle = ({ children }) => <h4 className='panel-subtitle'>{children}</h4>