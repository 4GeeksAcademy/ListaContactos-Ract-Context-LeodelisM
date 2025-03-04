import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ContactForm = ({onSave}) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();


    const onClickSave = (e) => {
        e.preventDefault();
        // TODO: add validations
        onSave({name, address, phone, email});

        navigate("/");
    }

    return (

        <form>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                type="text" 
                className="form-control" 
                id="inputname"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Address</label>
                <input 
                type="text" 
                className="form-control" 
                id="inputPassword"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input 
                type="text" 
                className="form-control" 
                id="inputPhone" 
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                type="email" 
                className="form-control" 
                id="inputEmail"
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
                required
                />
            </div>
            <button onClick={onClickSave} className="btn btn-primary">Save</button>
        </form>
    );
};

export default ContactForm;