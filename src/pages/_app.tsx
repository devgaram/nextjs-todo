import { AppProps } from "next/app";
import { useStore } from "../stores";
import StoreContext from "../contexts/StoreContext";

function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialState);

  return (
    <StoreContext.Provider value={store}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}

export default App;
