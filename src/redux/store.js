//before - using redux
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

//after - using redux-toolkit
import { configureStore } from '@reduxjs/toolkit';
// import { tasksReducer, filtersReducer } from './reducer';
import { tasksReducer } from './taskSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// action.js та reducer.js вже непотрібні
