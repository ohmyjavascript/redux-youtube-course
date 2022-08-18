import {
  ADD_FAVORITE,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_INIT,
  SAVE_PRODUCT,
} from './actions';

const INIT_STATE = {
  entities: {},
  isLoaded: false,
  isLoading: false,
};

function productsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case LOAD_PRODUCTS_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_PRODUCTS:
      const sliced = action.payload.slice(0, 8);
      const entities = sliced.reduce((acc, item) => {
        return {
          ...acc,
          [item.id]: item,
        };
      }, {});

      return {
        ...state,
        entities: entities,
        isLoaded: true,
        isLoading: false,
      };

    case ADD_FAVORITE:
      const changedEntity = state.entities[action.payload];
      changedEntity.isFavorite = !changedEntity.isFavorite;
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload]: changedEntity,
        },
      };

    case SAVE_PRODUCT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload,
        },
      };

    default:
      return state;
  }
}

export default productsReducer;
