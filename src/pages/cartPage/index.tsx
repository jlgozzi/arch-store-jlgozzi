// import useAppContext from "../../context/appContext";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { HomepageStyled } from "./style";
import useThemeContext from "../../context/themeContext";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import useAppContext from "../../context/appContext";
import ProductCard from "../../components/Product";
import { IDatabaseObject } from "../../interfaces";
import Cart from "../../components/cart";

const Homepage = () => {
  const { theme, loading } = useThemeContext();
  const { database } = useAppContext();

  const teste = useParams();
  console.log(teste);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <HomepageStyled theme={theme}>
      <Header />
      <SubHeader />
      <main>
        <Cart />
      </main>
      <Footer />
    </HomepageStyled>
  );
};

export default Homepage;
