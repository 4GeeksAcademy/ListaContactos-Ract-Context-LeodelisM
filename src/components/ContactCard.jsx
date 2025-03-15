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
        <div className="card mb-3" style={{ borderRadius: "10px", borderColor: "#e0d6cc" }}>
        <div className="card-body p-4">
            <div className="d-flex align-items-center">
                {/* Imagen de perfil */}
                <div className="me-4">
                    <div style={{ 
                        width: "100px", 
                        height: "100px",  
                    }}>
                        <img 
                            src="src/assets/img/imagenperfil.png" 
                            alt="Imagen Perfil" 
                            className="img-fluid"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                </div>
                
                {/* Información de contacto */}
                <div className="flex-grow-1">
                    <h5 className="fw-bold mb-2" style={{ color: "#8b5a2b" }}>{name}</h5>
                    <div className="mb-1 d-flex align-items-center">
                        <AiFillEnvironment style={{ color: "#c17a43", marginRight: "8px" }} /> 
                        <span style={{ color: "#7d6e63", fontSize: "0.95rem" }}>{address}</span>
                    </div>
                    <div className="mb-1 d-flex align-items-center">
                        <AiFillPhone style={{ color: "#c17a43", marginRight: "8px" }} /> 
                        <span style={{ color: "#7d6e63", fontSize: "0.95rem" }}>{phone}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <AiFillMail style={{ color: "#c17a43", marginRight: "8px" }} /> 
                        <span style={{ color: "#7d6e63", fontSize: "0.95rem" }}>{email}</span>
                    </div>
                </div>
                
                {/* Botones de acción */}
                <div className="d-flex flex-column gap-2">
                    <Link 
                        to={`/edit/${id}`}
                        className="btn btn-sm px-3 text-white"
                        style={{ 
                            backgroundColor: "#d19275", 
                            borderColor: "#d19275", 
                            borderRadius: "6px",
                            width: "100px"
                        }}
                    >
                        <AiFillEdit className="me-1" /> Editar
                    </Link>
                    <button
                        type="button"
                        className="btn btn-sm px-3 text-white"
                        style={{ 
                            backgroundColor: "#670f22", 
                            borderColor: "#670f22",
                            color: "#a68a7b",
                            borderRadius: "6px",
                            width: "100px"
                        }}
                        data-bs-toggle="modal"
                        data-bs-target={`#staticBackdrop-${id}`}
                    >
                        <AiFillDelete className="me-1" /> Borrar
                    </button>
                </div>
            </div>
        </div>
        
        {/* Modal */}
        <div 
            className="modal fade" 
            id={`staticBackdrop-${id}`}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby={`staticBackdropLabel-${id}`}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ borderRadius: "10px", borderColor: "#e0d6cc" }}>
                    <div className="modal-header" style={{ borderColor: "#e0d6cc" }}>
                        <h5 className="modal-title" id={`staticBackdropLabel-${id}`} style={{ color: "#8b5a2b" }}>
                            ¿Estás seguro?
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body py-4" style={{ color: "#670f22" }}>
                        Si eliminas este contacto, no podrás recuperarlo =(
                    </div>
                    <div className="modal-footer" style={{ borderColor: "#e0d6cc" }}>
                        <button 
                            type="button" 
                            className="btn text-white"
                            style={{ 
                                backgroundColor: "#d19275", 
                                borderColor: "#e0d6cc",
                                color: "#a68a7b",
                                borderRadius: "6px"
                            }} 
                            data-bs-dismiss="modal"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={() => deleteContact(id)}
                            data-bs-dismiss="modal"
                            type="button"
                            className="btn text-white"
                            style={{ 
                                backgroundColor: "#670f22", 
                                borderColor: "#670f22",
                                borderRadius: "6px"
                            }}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ContactCard;