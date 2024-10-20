import { Provider } from "react-redux";
import { oss } from "./online-shopping-store";
import App from "./App";

export default function OnlineShopping() {
  return (
    <Provider store={oss}>
      <App />
    </Provider>
  );
}
