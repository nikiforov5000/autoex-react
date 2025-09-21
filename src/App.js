import { I18nextProvider } from "react-i18next";
import Layout from "./Layout";
import { i18n } from "./config/i18n.config";

function App() {
  return (
    <div className="Layout">
      <I18nextProvider i18n={i18n}>
        <Layout />
      </I18nextProvider>
    </div>
  );
}

export default App;
