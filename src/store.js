export const initialStore = ()=>{
  return {
    contacts: [
      {
        id: Date.now(),
        name: "Juan Pérez",
        address: "Calle Principal 123",
        phone: "555-1234",
        email: "juan@ejemplo.com"
      },
      {
        id: Date.now() + 1,
        name: "María López",
        address: "Avenida Central 456",
        phone: "555-5678",
        email: "maria@ejemplo.com"
      },
      {
        id: Date.now() + 2,
        name: "Carlos Rodríguez",
        address: "Boulevard Norte 789",
        phone: "555-9012",
        email: "carlos@ejemplo.com"
      },
      {
        id: Date.now() + 3,
        name: "Ana Martínez",
        address: "Plaza Mayor 234",
        phone: "555-3456",
        email: "ana@ejemplo.com"
      },
    ]
  };
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
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

    default:
      throw Error('Unknown action.');
  }    
}

