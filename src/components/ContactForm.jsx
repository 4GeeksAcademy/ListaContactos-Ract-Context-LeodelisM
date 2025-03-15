import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ContactForm = ({ onSave, contact }) => {
    const [name, setName] = useState(contact?.name || "");
    const [address, setAddress] = useState(contact?.address || "");
    const [phone, setPhone] = useState(contact?.phone || "");
    const [email, setEmail] = useState(contact?.email || "");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const onClickSave = (e) => {
        e.preventDefault();

        if (!name.trim() || !address.trim() || !phone.trim() || !email.trim()) {
            alert("Todos los campos son requeridos");
            return; 
        }

        onSave({ name, address, phone, email, id: contact?.id });

        navigate("/contacts");
    }

    return (

        <form className=" col-6 m-auto justify-content-center" style={{ backgroundColor: "#fffaf5", borderRadius: "10px", border: "1px solid #e0d6cc" }}>
            <div className="m-4">
                <label className="form-label" style={{ color: "#8b5a2b", fontWeight: "500", marginBottom: "8px" }}>Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputname"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    style={{
                        padding: "10px 15px",
                        borderColor: "#e0d6cc",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        color: "#7d6e63"
                    }}
                />
            </div>
            <div className="m-4">
                <label className="form-label" style={{ color: "#8b5a2b", fontWeight: "500", marginBottom: "8px" }}>Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    required
                    style={{
                        padding: "10px 15px",
                        borderColor: "#e0d6cc",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        color: "#7d6e63"
                    }}
                />
            </div>
            <div className="m-4">
                <label className="form-label" style={{ color: "#8b5a2b", fontWeight: "500", marginBottom: "8px" }}>Phone</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                    style={{
                        padding: "10px 15px",
                        borderColor: "#e0d6cc",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        color: "#7d6e63"
                    }}
                />
            </div>
            <div className="m-4">
                <label className="form-label" style={{ color: "#8b5a2b", fontWeight: "500", marginBottom: "8px" }}>Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    style={{
                        padding: "10px 15px",
                        borderColor: "#e0d6cc",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        color: "#7d6e63"
                    }}
                />
            </div>
            <div className="d-flex justify-content-end m-4">
                <button
                    onClick={onClickSave}
                    className="btn text-white"
                    style={{
                        backgroundColor: "#d19275",
                        borderColor: "#d19275",
                        borderRadius: "8px",
                        padding: "8px 25px",
                        boxShadow: "0 2px 4px rgba(209, 146, 117, 0.2)"
                    }}
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default ContactForm;