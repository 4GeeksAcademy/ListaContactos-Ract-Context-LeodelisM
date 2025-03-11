import {
    Link
} from "react-router-dom";

import ContactList from "../components/ContactList.jsx";


export const Home = () => {

	return (
		<div className="container mt-5">
			<div className="col-12 col-md-9 col-lg-8 mb-4 d-flex justify-content-end">
				<Link 
				className="btn btn-success btn-sm" 
				to="/add">Add New Contact
				</Link>
			</div>
			<ContactList/>
		</div>
    )
};