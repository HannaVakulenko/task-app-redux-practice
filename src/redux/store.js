//=====after - by using redux-toolkit=====
import { configureStore } from '@reduxjs/toolkit';
// import { tasksReducer, filtersReducer } from './reducer';
// import { persistedTaskReducer } from './taskSlice';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filterSlice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    // tasks: persistedTaskReducer,
    filters: filtersReducer,
  },
  //   middleware(getDefaultMiddleware) {
  //     return getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     });
  //   },
});

// export const persistor = persistStore(store);
// action.js та reducer.js вже непотрібні

//==============before - by using redux============================
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
