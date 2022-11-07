// import useAppContext from "../../context/appContext";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { DashboardStyled } from "./style";
import useThemeContext from "../../context/themeContext";

import banner from "../../assets/banner2.avif";
import Footer from "../../components/Footer";

const Dashboard = () => {
  // const { database } = useAppContext();
  const { theme, loading } = useThemeContext();

  const teste = useParams();
  console.log(teste);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <DashboardStyled theme={theme}>
      <Header />
      <main>
        <div className="main-container">
          <h1 className="main-title blinkCursor">Bem Vindo!</h1>
          <p className="main-paragraph">
            Esta é a Arch-Store, dê uma olhada em nossos produtos!
          </p>
          <Link to={`/homepage`}>
            <button className="main-button">Ver Produtos</button>
          </Link>
        </div>
        <figure>
          <img src={banner} alt="banner" />
        </figure>
      </main>
      <Footer />
    </DashboardStyled>
  );
};

export default Dashboard;
