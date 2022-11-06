// import useAppContext from "../../context/appContext";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { DashboardStyled } from "./style";
import useThemeContext from "../../context/themeContext";

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
        <h1 className="main-title blinkCursor">Bem Vindo!</h1>
        <figure>
          <img src="" alt="" />
        </figure>
        <button>Ver Produtos</button>
      </main>

      {/* <img src={database[0]?.img} alt={database[0]?.title}></img> */}
    </DashboardStyled>
  );
};

export default Dashboard;
