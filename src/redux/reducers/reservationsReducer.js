const initialState = {
    reservations: [],
  };
  
  export const reservationsReducer = (state = initialState, action) => {
    switch (action.type) {
      // Ajoutez des actions pour gérer les réservations ici
      default:
        return state;
    }
  };  