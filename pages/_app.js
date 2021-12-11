import { Provider } from "react-redux";
import store from "../app/store";
import Authenticate from "../components/Authenticate";
import Global from "../styled/Global";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Global />
      <Layout>
        <Authenticate>
          <Component {...pageProps} />
        </Authenticate>
      </Layout>
    </Provider>
  );
}

export default MyApp;
