import Loading from "./Loading";

const SectionBody = ({ loading, error, children }) => {
  // return <Loading />;
  return loading ? (
    <Loading />
  ) : error ? (
    <p className="text-red-500">Error: {error}</p>
  ) : (
    children
  );
};

export default SectionBody;
