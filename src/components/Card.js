import React from "react";

export default function Card (props) {
    return (
    <section>
        <aside>
            <img className="section__image" src={props.item.image} alt={props.item.alt} />
        </aside>
        <main>
            <div className="main__headline">
                <img className="main__tag" src="./images/tag.png" alt="placeTag" />
                <h4 className="main__state">{props.item.state}</h4>
                <a className="main__link" href={props.item.link}>View on Google Maps</a>
            </div>
           <div>
               <h1 className="main__title">{props.item.title}</h1>
                <h3 className="main__date">{props.item.date}</h3>
               <p className="main__text">
                   {props.item.text}
               </p>
           </div>
        </main>
    </section>
    )
}