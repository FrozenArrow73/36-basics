import React from "react";

const Charlie = (props) => {
    if (props.num === undefined) return <h2>No Number</h2>
    return (
        <h2>{props.num > 50 ? "thats a big number" : "That's a small number"}</h2>
    )
}

export default Charlie