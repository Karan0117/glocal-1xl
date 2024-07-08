import { Layout } from "./components/Layout";
import { GlobalStyles } from "./styles/globalStyles";
import { HomePage } from "./pages/Home";
import { CategoriesPage } from "./pages/Categories";

import { Routes, Route } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
