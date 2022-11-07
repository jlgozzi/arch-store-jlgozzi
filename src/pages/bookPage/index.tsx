// import useAppContext from "../../context/appContext";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { HomepageStyled } from "../homepage/style";
import useThemeContext from "../../context/themeContext";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import useAppContext from "../../context/appContext";
import ProductCard from "../../components/Product";
import { IDatabaseObject } from "../../interfaces";
import { useEffect } from "react";

const BookPage = () => {
  const { theme, loading } = useThemeContext();
  const { dataList, filterList } = useAppContext();

  useEffect(() => {
    filterList("Livro");
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <HomepageStyled theme={theme}>
      <Header />
      <SubHeader />
      <main>
        <h1>Livros</h1>
        <ul>
          {dataList.map((product: IDatabaseObject, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ul>
      </main>
      <Footer />
    </HomepageStyled>
  );
};

export default BookPage;
