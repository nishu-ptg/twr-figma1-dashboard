import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

const DataSourceContext = createContext();

export const DataSourceProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const apiDataParamKey = "use-api-data";

  const useApiData =
    searchParams.has(apiDataParamKey) &&
    searchParams.get(apiDataParamKey) !== "false";

  return (
    <DataSourceContext.Provider value={{ useApiData }}>
      {children}
    </DataSourceContext.Provider>
  );
};

export const useDataSource = () => useContext(DataSourceContext);
