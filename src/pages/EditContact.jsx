import {
    Link, useParams
} from "react-router-dom";

import useGlobalReducer from '../hooks/useGlobalReducer';

import ContactForm from "../components/ContactForm.jsx";

export const EditContact = () => {

    const {store, dispatch} = useGlobalReducer();

    console.log({store});

    const { contactId } = useParams();

    const contact = store.contacts.find((c) => c.id === Number.parseInt(contactId));
    console.log({contact});

    const editContact = (editedContact) => {
        console.log({editedContact})
        dispatch({type: "edit_contact", payload: editedContact});
    }

	return (
		<div className="container mt-5">
			<div className="col-12 col-md-9 col-lg-8 mb-4 d-flex justify-content-end">
				<Link to="/">Back</Link>
			</div>
            <div>
                <p>Contact ID: {contactId}</p>
                <p>Contact Found:</p>
                <pre>{JSON.stringify(contact, null, 2)}</pre>
            </div>
			<div>
                {contact !== undefined ?
                <ContactForm onSave={editContact} contact={contact}/> :
                <h2>Contact not found</h2>}
            </div>
		</div>
    )
};