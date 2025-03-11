import {
    Link
} from "react-router-dom";

import useGlobalReducer from '../hooks/useGlobalReducer';

import ContactForm from "../components/ContactForm.jsx";

import apiClient from '../apiClient';

export const AddContact = () => {

    const { store, dispatch } = useGlobalReducer()

    const onSaveContact = async (contact) => {

        try {

            const added_contact = await apiClient.createContact(contact);

            dispatch({
                type: "add_contact",
                payload: added_contact
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
                <ContactForm onSave={onSaveContact} />
            </div>
        </div>
    )
}
