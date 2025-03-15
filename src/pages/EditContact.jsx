import {
    Link, useParams
} from "react-router-dom";
import React, { useState } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import ContactForm from "../components/ContactForm.jsx";
import apiClient from '../apiClient';

export const EditContact = () => {

    const {store, dispatch} = useGlobalReducer();
    const [error, setError] = useState(null);
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
            console.error("Erros al editar contacto.", error)
        }
    };

	return (
		<div className="container mt-5">
			<div className="col-6 d-flex justify-content-end m-auto mb-4">
            <Link to="/contacts" className="btn text-white"style={{
                backgroundColor: "#670f22",
                color: "#a68a7b",
                borderRadius: "8px",
                borderColor: "#670f22",
                padding: "8px 16px"
            }}>Regresar a Contactos</Link>
			</div>
			<div>
                {contact !== undefined ?
                <ContactForm onSave={editContact} contact={contact}/> :
                <h2>Contact not found</h2>}
            </div>
		</div>
    )
};