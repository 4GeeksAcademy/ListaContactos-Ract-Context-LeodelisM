export const initialStore = ()=>{
  return {
    contacts: [
      {
        id: 1,
        name: "Juan Pérez",
        address: "Calle Principal 123",
        phone: "555-1234",
        email: "juan@ejemplo.com"
      },
      {
        id: 2,
        name: "María López",
        address: "Avenida Central 456",
        phone: "555-5678",
        email: "maria@ejemplo.com"
      },
      {
        id: 3,
        name: "Carlos Rodríguez",
        address: "Boulevard Norte 789",
        phone: "555-9012",
        email: "carlos@ejemplo.com"
      },
      {
        id: 4,
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
    default:
      throw Error('Unknown action.');
  }    
}
