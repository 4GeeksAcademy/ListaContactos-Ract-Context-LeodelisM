import {
    Link
} from "react-router-dom";

import useGlobalReducer from '../hooks/useGlobalReducer';

import ContactForm from "../components/ContactForm.jsx";

export const AddContact = () => {

    const {store, dispatch} = useGlobalReducer()

    const onSaveContact = (contact) => {
        dispatch({type: "add_contact", payload: contact});
    }

	return (
		<div className="container mt-5">
			<div className="col-12 col-md-9 col-lg-8 mb-4 d-flex justify-content-end">
				<Link to="/">Back</Link>
			</div>
			<div>
                <ContactForm onSave={onSaveContact}/>
            </div>
		</div>
    )
};
 