const initialState = {
    products: [],
  };
  
  export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      // Ajoutez des actions pour gérer les produits ici
      default:
        return state;
    }
  };  