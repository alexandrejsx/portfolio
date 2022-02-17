import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import GlobalStyles from "./styles/global";
import {
  Main,
  Section,
  Container,
  SwitchButton,
  SwitchButtonCheckBox,
  SwitchButtonLabel,
  SwitchButtonLabelSpan,
} from "./styles";
import HeaderComponent from "./components/HeaderComponent";
import ResumeComponent from "./components/ResumeComponent";
import AboutComponent from "./components/AboutComponent";
import SkillsComponent from "./components/SkillsComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(checked) {
    const language = checked ? "pt-BR" : "en-US";

    localStorage.setItem("i18nextLng", language);

    i18n.changeLanguage(language);
  }

  return (
    <>
      <GlobalStyles />
      <Main>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <HeaderComponent />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Section id="language">
            <Container
              style={{
                justifyContent: "flex-start",
                maxWidth: "100rem",
                margin: "2rem auto 0",
              }}
            >
              <SwitchButton>
                <SwitchButtonCheckBox
                  onChange={(e) => handleChangeLanguage(e.target.checked)}
                />
                <SwitchButtonLabel>
                  <SwitchButtonLabelSpan>English</SwitchButtonLabelSpan>
                </SwitchButtonLabel>
              </SwitchButton>
            </Container>
          </Section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Section id="resume">
            <Container
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "100rem",
                margin: "0 auto",
              }}
            >
              <ResumeComponent />
            </Container>
          </Section>
          <Section id="about">
            <AboutComponent />
          </Section>
          <Section id="skills">
            <SkillsComponent />
          </Section>
          <Section id="footer">
            <FooterComponent />
          </Section>
        </motion.div>
      </Main>
    </>
  );
}

export default App;
