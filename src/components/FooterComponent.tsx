import { Footer, Text } from "../styles";
import { useTranslation } from "react-i18next";

const FooterComponent = () => {
  const { t } = useTranslation();

  return (
    <Footer>
      <Text
        style={{
          opacity: 0.5,
          fontSize: "0.7rem",
        }}
      >
        {t("built")} Alexander Queiroz.
      </Text>
    </Footer>
  );
};

export default FooterComponent;
