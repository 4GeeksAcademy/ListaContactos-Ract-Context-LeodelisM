import {
    Link, useParams
} from "react-router-dom";
import useGlobalReducer from '../hooks/useGlobalReducer';
import ContactForm from "../components/ContactForm.jsx";
import apiClient from '../apiClient';

export const EditContact = () => {

    const {store, dispatch} = useGlobalReducer();

    console.log({store});

    const { contactId } = useParams();

    const contact = store.contacts.find((c) => c.id === Number.parseInt(contactId));

    const editContact = async (editedContact) => {
         try {
        
            const editContactRespond = await apiClient.editContact(editedContact);

            dispatch({
                type: "edit_contact",
                payload: editContactRespond
            });

        } catch (error) {
            console.error(error)
        }
    };

	return (
		<div className="container mt-5">
			<div className="col-12 col-md-9 col-lg-8 mb-4 d-flex justify-content-end">
				<Link to="/">Back</Link>
			</div>
            <div>
                <p>Contact ID: {contactId}</p>
            </div>
			<div>
                {contact !== undefined ?
                <ContactForm onSave={editContact} contact={contact}/> :
                <h2>Contact not found</h2>}
            </div>
		</div>
    )
};