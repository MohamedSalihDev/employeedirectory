import React, { useState } from "react";
import Card from "./Card";
import coworkers from "../coworkers";
import style from "./style.css";

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            img={contact.imgURL}
            title={contact.title}
            email={contact.email}
        />
    );
}
function showTrainers() {
    return coworkers
        .filter(function (contact) {
            return contact.title === "Trainer";
        })
        .map(createCard);
}

function showCoaches() {
    return coworkers
        .filter(function (contact) {
            return contact.title === "Coach";
        })
        .map(createCard);
}
function showAdmin() {
    return coworkers
        .filter(function (contact) {
            return contact.title === "Admin";
        })
        .map(createCard);
}

function showAll() {
    return coworkers.map(createCard);
}

function sortedCard() {
    return coworkers
        .sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
        .map(createCard);
}

const [appearance, setState] = useState();
function Switcher(e) {
    console.log("swithcer fired");
    if (e.target.name === "All") {
        setState(showAll);
    } else if (e.target.name === "Coaches") {
        return setState(showCoaches);
    } else if (e.target.name === "Trainers") {
        return setState(showTrainers);
    } else if (e.target.name === "Admin") {
        return setState(showAdmin);
    } else if (e.target.name === "Sort") {
        return setState(sortedCard);
    }
}

function Dropdown() {
    return (
        <div>
            <div className="dropdown" onClick={Switcher}>
                <button className="dropbtn" onClick={Switcher}>
                    Choose Employee Directory
      </button>
                <div className="dropdown-content" onClick={Switcher}>
                    <a href="#" onChange={Switcher} name="All">
                        List All Co-workers
        </a>
                    <a href="#" onChange={Switcher} name="Coaches">
                        List Coaches only
        </a>
                    <a href="#" onChange={Switcher} name="Trainers">
                        List Trainers only
        </a>
                    <a href="#" onChange={Switcher} name="Admin">
                        List Admin only
        </a>
                    <a href="#" onChange={Switcher} name="Sort">
                        List all by alphabeical order
        </a>
                </div>
            </div>
        </div>
    );
}

function App() {

    return (
        <div>
            <h1 className="heading">Employee Directory</h1>
            <Dropdown />
            {appearance}

        </div>
    );
}

export default App;