import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cars from "./cars";
import carSlice from "./carSlice";
import book from "./myBook";

const persistConfigCars = {
    key: 'cars',
    storage,
    blacklist: ['updateId', 'resetId', 'register'],
};

const persistConfigCarSlice = {
    key: 'wishlist',
    storage,
    blacklist: [], // Tambahkan nama slicer yang tidak ingin disimpan di sini jika diperlukan
};

const persistConfigBook = {
    key: 'book',
    storage,
    blacklist: [], // Tambahkan nama slicer yang tidak ingin disimpan di sini jika diperlukan
};

const persistedReducerCars = persistReducer(persistConfigCars, cars);
const persistedReducerCarSlice = persistReducer(persistConfigCarSlice, carSlice);
const persistedReducerBook = persistReducer(persistConfigBook, book);

const rootReducer = combineReducers({
    cars: persistedReducerCars,
    wishlist: persistedReducerCarSlice,
    book: persistedReducerBook,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
