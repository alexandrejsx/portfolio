import GlobalStyles from "./styles/global";
import { Main, Section, Container } from "./styles";
import { motion } from "framer-motion";
import HeaderComponent from "./components/HeaderComponent";
import ResumeComponent from "./components/ResumeComponent";
import AboutComponent from "./components/AboutComponent";
import SkillsComponent from "./components/SkillsComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
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
          <Section id="resume">
            <Container
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "100rem",
                margin: "6rem auto 0",
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
