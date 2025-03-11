// usuario_Api = leodelis

export async function getContacts() {
    try {

        const response = await fetch(`https://playground.4geeks.com/contact/agendas/leodelis/contacts`);

        if (!response.ok) {
            throw new Error("No se pudieron cargar los contactos");
        }

        const data = await response.json();

        return data.contacts;

    } catch (error) {
        console.log("Error al cargar los contactos ");
    }
};

export async function createContact(contact) {
    try {

        const response = await fetch(`https://playground.4geeks.com/contact/agendas/leodelis/contacts`, {
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

export async function editContact(contactData) {

    try {
        const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/leodelis/contacts/${contactData.id}`,
            {
                method: "PUT",
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactData)

            }
        )

        if (!response.ok) throw new Error("Error al editar contacto");

        const data = await response.json();

        return data

    } catch (error) {
        console.log("error")

    }

}

export async function deleteContact(id) {

    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/leodelis/contacts/${id}`,
            {
                method: 'DELETE',
            }
        );

        if (!response.ok) throw new Error('Error al borrar la tarea');

    } catch (error) {
        console.log(error)
    }
};

//creo funciones para obtener una agenda y crear agenda

export async function getAgenda() {

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/leodelis`);

    if (!response.ok) {
        throw new Error("No se puede cargar la agenda");
    }

    const data = await response.json();

    return data.agendas;
};


export async function createAgenda() {

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/leodelis`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify("")
    });

    if (!response.ok) {
        throw new Error(`Error al crear agenda`);
    }

    const data = await response.json();
    return data;


};


export default {
    getContacts,
    createContact,
    editContact,
    deleteContact,
    getAgenda,
    createAgenda
}