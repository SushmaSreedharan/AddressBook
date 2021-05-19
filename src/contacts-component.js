import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import EditComponent from "./edit-component";
import { contactReducer, initialState } from "./App";

function ContactsComponent() {
	const [contacts, setContacts] = useState([]);
	const [currentContact, setCurrentContact] = useState({});
	const [showEdit, setShowEdit] = useState(false);

	const [state] = useReducer(contactReducer, initialState);
	console.log(state);

	useEffect(() => {
		setContacts(state);
	}, [state]);

	function openDeleteModal(contact) {
		document.getElementById("modalDiv").style.display = "block";
		setCurrentContact(contact);
	}
	function handleCloseModal() {
		document.getElementById("modalDiv").style.display = "none";
	}
	function handleDeleteModal() {
		document.getElementById("modalDiv").style.display = "none";
		let newContacts = contacts.splice(contacts.indexOf(currentContact), 1);
		setContacts(contacts.filter(contact => contact.id !== newContacts.id));
	}

	return (
		<div className="App">
			<div className="App-header">
				<p>Contact List</p>
				<div className="contact-container">
					{contacts.map(contact => {
						return (
							<div className="contact-card">
								<ul className="sub-contact-card">
									<li>First Name: {contact.firstName}</li>
									<li>Last Name: {contact.lastName}</li>
									<li>Phone no:{contact.phoneNum}</li>
									<li>Email:{contact.email}</li>
									<div class="button-option">
										<Link exact to={`/contacts/edit/${contact.id}`}>
											<button>Edit</button>
										</Link>

										<button onClick={() => openDeleteModal(contact)}>
											Delete
										</button>
										{/* <button>View</button> */}
									</div>

									{/* <li>Email:{contact.email}</li> */}
								</ul>
							</div>
						);
					})}

					<div id="modalDiv" class="modal">
						<span
							onClick={handleCloseModal}
							class="close"
							title="Close Modal"></span>
						<h1>Delete Account</h1>
						<p>Are you sure you want to delete your account?</p>
						<div class="container">
							<div class="clearfix">
								<button
									type="button"
									onClick={handleCloseModal}
									class="cancelbtn">
									Cancel
								</button>
								<button
									type="button"
									onClick={handleDeleteModal}
									class="deletebtn">
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactsComponent;
