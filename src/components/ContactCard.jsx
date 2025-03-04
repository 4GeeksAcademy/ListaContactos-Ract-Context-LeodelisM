import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const ContactCard = ({name, address, phone, email, id}) => {

    return (
       
        <div className="card">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div className="me-3">
                    <img src="foto-perfil.jpg" className="rounded-circle" width="100" height="100" alt="Foto de perfil" />
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
                    <button className="btn btn-primary btn-sm"> 
                        <AiFillEdit /> Edit </button>
                    <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> 
                        <AiFillDelete /> Delete</button>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Are you sure?</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    If you delete this your contact will not be shown!
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Oh, No!</button>
                                        <button type="button" class="btn btn-primary">Yes, sure!</button>
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