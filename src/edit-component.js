import "./App.css";
import React, { useState, useEffect, useReducer, useRef } from "react";
import { contactReducer, initialState } from "./App";
import { Link } from "react-router-dom";

const EditComponent = ({ match }) => {
	const id = match.params.id;
	const [state, dispatch] = useReducer(contactReducer, initialState);
	const [currentData, setCurrentData] = useState({});

	const [firstName, setFirstName] = useState("");

	useEffect(() => {
		state.forEach((data, index) => {
			if (data.id == id) {
				setFirstName(data.firstName);
				setCurrentData(data);
			}
		});
	});

	const savechanges = () => {
		dispatch({ type: "EDIT", payload: currentData });
	};

	const editFirstNameValue = e => {
		let data = currentData;
		data.firstName = e.target.value;
		setCurrentData(data);
	};

	const editLastNameValue = e => {
		let data = currentData;
		data.lastName = e.target.value;
		setCurrentData(data);
	};

	const editContactValue = e => {
		let data = currentData;
		data.phoneNum = e.target.value;
		setCurrentData(data);
	};

	const editEmailValue = e => {
		let data = currentData;
		data.email = e.target.value;
		setCurrentData(data);
	};

	return (
		<div>
			{currentData && Object.values(currentData).length > 0 && (
				<ul class="edit-list">
					<li class="edit-sublist">
						<label class="label-input" for="first-name">
							First Name
						</label>
						<input
							class="edit-ip"
							name="first-name"
							placeholder={currentData.firstName}
							onChange={editFirstNameValue}></input>
					</li>
					<li class="edit-sublist">
						<label class="label-input" for="last-name">
							Last Name
						</label>
						<input
							class="edit-ip"
							name="last-name"
							placeholder={currentData.lastName}
							onChange={editLastNameValue}></input>
					</li>
					<li class="edit-sublist">
						<label class="label-input" for="phone">
							Phone Number
						</label>
						<input
							class="edit-ip"
							name="phone"
							placeholder={currentData.phoneNum}
							onChange={editContactValue}></input>
					</li>
					<li class="edit-sublist">
						<label class="label-input" for="email">
							Email
						</label>
						<input
							class="edit-ip"
							name="email"
							placeholder={currentData.email}
							onChange={editEmailValue}></input>
					</li>
				</ul>
			)}
			<Link to="/contacts">
				<button onClick={savechanges}>SAVE CHANGES</button>
			</Link>
		</div>
	);
};

export default EditComponent;
