import React from "react"

function Minute({ minutes }) {
    const icons = ["☕️", "🍱"]

    function chooseIcon(minutes) {
        if (minutes > 30) {
            return (
                <small>{icons[1]} {minutes} min read</small>
            )
        } else {
            return (
                <small>{icons[0]} {minutes} min read</small>
            )
        }
    }

    return (
        <small className="minutes">
            { chooseIcon(minutes) }
        </small>
    )
}

export default Minute