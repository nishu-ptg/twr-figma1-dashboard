import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

const DataSourceContext = createContext();

export const DataSourceProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const useApiData =
    searchParams.has("use-api-data") &&
    searchParams.get("use-api-data") !== "false";

  return (
    <DataSourceContext.Provider value={{ useApiData }}>
      {children}
    </DataSourceContext.Provider>
  );
};

export const useDataSource = () => useContext(DataSourceContext);
