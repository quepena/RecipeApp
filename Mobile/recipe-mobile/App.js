import RootNavigator from "./components/RootNavigator";
import { Provider } from "react-redux";
import { store } from './store'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </>
  );
}
