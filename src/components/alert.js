import React from "react"
import "./alert.css"

export default function Alert({ children }) {
    return (
        <p className="alert">
            {children}
        </p>
    )
}