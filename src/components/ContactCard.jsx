import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import apiClient from '../apiClient';

const ContactCard = ({ name, address, phone, email, id }) => {

    const { store, dispatch } = useGlobalReducer()

    const deleteContact = async (id) => {

        try {

            await apiClient.deleteContact(id);

            dispatch({
                type: "delete_contact",
                payload: id
            });

        } catch (error) {
            console.error(error)
        }
    };


    return (

        <div className="card">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div className="me-3">
                    <img src="src/assets/img/imagenperfil.png" alt="Imagen Perfil" />
                </div>
                <div className="flex-grow-1">
                    <h5 className="card-title"><strong>{name}</strong></h5>
                    <p className="card-text mb-1">
                        <AiFillEnvironment /> {address}
                    </p>
                    <p className="card-text mb-1">
                        <AiFillPhone /> {phone}
                    </p>
                    <p className="card-text">
                        <AiFillMail /> {email}
                    </p>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <Link to={`/edit/${id}`}
                        className="btn btn-primary btn-sm">
                        <AiFillEdit /> Edit
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target={`#staticBackdrop-${id}`}>
                        <AiFillDelete /> Delete
                    </button>
                    <div className="modal fade" id={`staticBackdrop-${id}`} 
                        data-bs-backdrop="static" 
                        data-bs-keyboard="false" 
                        tabindex="-1" 
                        aria-labelledby="staticBackdropLabel" 
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Are you sure?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    If you delete this your contact will not be shown!
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh, No!</button>
                                    <button
                                        onClick={() => deleteContact(id)}
                                        data-bs-dismiss="modal"
                                        type="button"
                                        className="btn btn-danger">Yes, sure!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactCard;