import React from "react";
import Navbar from "./Navbar"
import {data} from "./Data";
import Card from "./Card";

export default function App () {

    const cards = data.map(item => {
        return (
            <Card 
                key = {item.id}
                item = {item}
            />
        )
    });

    return (
        <div className="container">
            <Navbar />
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}