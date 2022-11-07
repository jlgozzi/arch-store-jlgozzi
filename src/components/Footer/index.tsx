// import { useParams } from "react-router-dom";
// import useAppContext from "../../context/appContext";
import useThemeContext from "../../context/themeContext";
import { FooterStyled } from "./style";

const Footer = () => {
  // const teste = useParams();
  const { theme } = useThemeContext();

  return (
    <FooterStyled theme={theme}>
      <div>
        <p>Created By João Lucas Gozzi</p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
