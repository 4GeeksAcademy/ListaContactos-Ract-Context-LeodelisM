import {
    Link
} from "react-router-dom"; import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactList from "../components/ContactList.jsx";

export const Contacts = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="container mt-4">
            <div className="d-flex col-6 justify-content-end gap-3 m-auto mb-3">
                <Link to="/" className="btn text-white" style={{
                    backgroundColor: "#670f22",
                    color: "#a68a7b",
                    borderRadius: "8px",
                    borderColor: "#670f22",
                    padding: "8px 16px"
                }}>
                    Regresar a agendas
                </Link>
                <Link
                    className="btn text-white"
                    style={{
                        backgroundColor: "#d19275",
                        borderColor: "#d19275",
                        borderRadius: "8px",
                        padding: "8px 25px",
                        boxShadow: "0 2px 4px rgba(209, 146, 117, 0.2)"
                    }}
                    to="/add"
                >
                    Agregar Contacto
                </Link>
            </div>

            <ContactList />
        </div>
    );
}; 
