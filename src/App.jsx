import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataSourceProvider } from "./context/DataSourceContext";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <DataSourceProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </MainLayout>
      </DataSourceProvider>
    </Router>
  );
};

export default App;
