import Product from "../component/Product/Product";

const Home = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  };

  const headerStyle = {
    marginTop: "30px",
  };
  return (
    <header style={style} className="main__header">
      <h1>Welcome to redux toolkit here.</h1>
      <h3 style={headerStyle}> Products </h3>
      <Product />
    </header>
  );
};

export default Home;
