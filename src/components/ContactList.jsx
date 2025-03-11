import React, { useEffect, useState } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import ContactCard from './ContactCard';

import apiClient from '../apiClient';

const ContactList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    renderizarContactos();
  }, []);

  async function renderizarContactos() {
    setLoading(true);
    setError(null); // Reinicia el error al comenzar

    try {
      // Obtener la agenda, o crearla si no existe

      try {
        await apiClient.getAgenda();
      } catch (agendaError) {
        console.log("Creando agenda porque no existe...");
        await apiClient.createAgenda();
      }

      // Obtener contactos después de tener una agenda
      const contacts = await apiClient.getContacts();

      dispatch({
        type: "set_contacts",
        payload: contacts
      });

    } catch (error) {
      console.error("Error al cargar contactos:", error);
      setError(error.message || "No se pudieron cargar los contactos");
    } finally {
      setLoading(false);
    }
  }

  // Renderizar mensaje de carga si está cargando
  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div><p>Cargando contactos...</p></div>;
  }

  return (
    <>
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
    </>
  );
};

export default ContactList;

