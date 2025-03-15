import {Link} from "react-router-dom";
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
            console.error("Error al guardar contacto")
        }
    };

    return (
        <div className="container mt-5">
            <div className="col-6 m-auto mb-4 d-flex justify-content-end">
                <Link to="/contacts"className="btn text-white"style={{
                backgroundColor: "#670f22",
                color: "#a68a7b",
                borderRadius: "8px",
                borderColor: "#670f22",
                padding: "8px 16px"
            }}>Regresar a Contactos</Link>
            </div>
            <div>
                <ContactForm onSave={onSaveContact} />
            </div>
        </div>
    )
}
