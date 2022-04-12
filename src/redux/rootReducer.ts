import { combineReducers } from "redux";
import { rootCertificates } from "tls";
import cart from "./cart/reducers";

const rootReducer = combineReducers({
    cart,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer