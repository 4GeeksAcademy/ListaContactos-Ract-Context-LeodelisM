export const initialStore = () => {
  return {
    contacts: []
  };
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'set_contacts':

      const contacts = action.payload;

      return {
        ...store,
        contacts: contacts
      };

    case 'add_contact':

      const contact = action.payload;

      return {
        ...store,
        contacts: [...store.contacts, contact]
      };

    case 'delete_contact':

      const deleteId = action.payload

      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id != deleteId)
      };

    case 'edit_contact':

      const editedContact = action.payload;

      return {
        ...store,
        contacts: store.contacts.map(contact => contact.id === editedContact.id ? editedContact : contact)
      }

    default:
      throw Error('Unknown action.');
  }
}

