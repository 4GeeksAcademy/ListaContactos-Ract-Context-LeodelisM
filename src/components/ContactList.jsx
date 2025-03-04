import React from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import ContactCard from './ContactCard'; 

const ContactList = () => {

    const {store, dispatch} = useGlobalReducer()

    return (
      <div className="container mt-5">
          <div className="col-12 col-md-9 col-lg-8 mb-4 d-flex justify-content-end">
            <button className="btn btn-success btn-sm">Add New Contact</button>
          </div>
        
          {/* Verifica si hay contactos */}
          {store.contacts.length === 0 ? (
            <h3 className="text-center mt-5">No contacts found</h3>
          ) : (
            /* Si hay contactos, recorre la la lista contacts en store */
            store.contacts.map((contact) => (
              <div key={contact.id} className="col-6 d-flex flex-column mb-3 m-auto">
                <ContactCard
                  name={contact.name}
                  address={contact.address}
                  phone={contact.phone}
                  email={contact.email}
                  id={contact.id}
                />
              </div>
            ))
          )}
        </div>
    );
  };
        
export default ContactList;

