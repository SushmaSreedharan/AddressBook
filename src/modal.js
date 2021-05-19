import "./App.css";
import React, { useState, useEffect } from "react";

function Modal() {
	return (
		<div id="modalDiv" class="modal">
			<span onClick={handleCloseModal} class="close" title="Close Modal"></span>
			<form class="modal-content" action="/action_page.php">
				<div class="container">
					<h1>Delete Account</h1>
					<p>Are you sure you want to delete your account?</p>

					<div class="clearfix">
						<button
							type="button"
							// onClick={handleDeleteModal}
							class="cancelbtn">
							Cancel
						</button>
						<button
							type="button"
							onClick={() => handleDeleteModal(contact)}
							class="deletebtn">
							Delete
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Modal;
