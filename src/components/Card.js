import React, { useState } from "react";
import Images from "./Images";
import Detail from "./Detail";
import Coworkers from "../coworkers"



function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.firstName} {props.lastName}</h2>
                <Images img={props.img} />
            </div>
            <div className="bottom">
                <Detail detailInfo={props.title} />
                <Detail detailInfo={props.email} />
            </div>
        </div>
    );
}

export default Card;
