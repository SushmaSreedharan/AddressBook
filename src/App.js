import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ContactsComponent from "./contacts-component";
import EditComponent from "./edit-component";
import MainRouter from "./main-router";

function App() {
	return (
		<Router>
			<MainRouter />
		</Router>
	);
}

export default App;

export const initialState = [
	{
		id: 1,
		firstName: "Aida",
		lastName: "Ross",
		phoneNum: "202-555-0193",
		email: "6dkdflx@texasaol.com"
	},
	{
		id: 2,
		firstName: "Inigo ",
		lastName: "Frazier",
		phoneNum: "202-555-0142",
		email: "9mos@mvoa.site"
	},
	{
		id: 3,
		firstName: "James",
		lastName: "Solomon",
		phoneNum: "202-555-0132",
		email: "fkha@billseo.com"
	},
	{
		id: 4,
		firstName: "Cataleya",
		lastName: "Dean",
		phoneNum: "202-555-0112",
		email: "mmoin.ko@rackar.com"
	},
	{
		id: 5,
		firstName: "Ailsa",
		lastName: "Snyder",
		phoneNum: "202-555-0173",
		email: "1sou@goet.buzz"
	},
	{
		id: 6,
		firstName: "Nannie",
		lastName: "Jacobson",
		phoneNum: "202-555-0377",
		email: "cbob3200_dj@pk.buzz"
	}
];

export const contactReducer = (state = initialState, action) => {
	switch (action.type) {
		case "DELETE": {
			return state;
		}
		case "EDIT": {
			let newState = Object.assign(state);
			return newState;
		}
	}
};
