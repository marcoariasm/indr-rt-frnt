import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutHome from "./template/LayoutHome";
import Layout from "./template/Layout";
import Home from "./views/Home";
import Planes from "./views/Planes";
import Resumen from "./views/Resumen";
import { FormDataProvider } from "./context/FormProvider";

function App() {
  return (
    <Router>
      <FormDataProvider>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutHome>
                <Home />
              </LayoutHome>
            }
          />
          <Route
            path="/step-1"
            element={
              <Layout>
                <Planes />
              </Layout>
            }
          />
          <Route
            path="/step-2"
            element={
              <Layout>
                <Resumen />
              </Layout>
            }
          />
        </Routes>
      </FormDataProvider>
    </Router>
  );
}

export default App;
