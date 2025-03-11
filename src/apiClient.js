export async function getContacts() {
    try {

        const response = await fetch('https://playground.4geeks.com/contact/agendas/leodelis/contacts');

        if (!response.ok) {
            throw new Error("No se pudieron cargar los contactos");
        }

        const data = await response.json();
    
        return data.contacts;

    } catch (error) {
        setError("Error al cargar los contactos ");
    }
};

export async function createContact(contact) { 
    try {

        const response = await fetch (`https://playground.4geeks.com/contact/agendas/leodelis/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });

        if (!response.ok) {
            throw new Error(`Error al crear contacto`);
        }
    
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error)
    };
};

export async function getContact() { }

export async function deleteContact() { }

export default {
    getContacts, createContact, getContact, deleteContact
}