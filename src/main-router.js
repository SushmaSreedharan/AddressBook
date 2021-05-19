import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from "react-router-dom";
import ContactsComponent from "./contacts-component";
import EditComponent from "./edit-component";

const MainRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/contacts" component={ContactsComponent} />;
				<Route exact path="/contacts/edit/:id" component={EditComponent} />;
			</Switch>
			<Redirect to="/contacts" path="/" />
		</Router>
	);
};

export default MainRouter;
