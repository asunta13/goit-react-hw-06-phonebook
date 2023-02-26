import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "redux/contacts/contactsSlice";
import filterReducer from "redux/filter/filterSlice";

const rootReducer = combineReducers({
	contacts: contactsReducer,
	filter: filterReducer,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
