import {
  Link,
  Container,
  ContainerImage,
  Text,
  TextLight,
  ContainerCenter,
} from "../styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MainImage from "../assets/images/MainImage";
import { useTranslation } from "react-i18next";

const ResumeComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container
        style={{
          flexDirection: "column",
        }}
      >
        <TextLight>{t("apresentation")}</TextLight>
        <Text
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
          }}
        >
          Alexandre Queiroz.
        </Text>
        <Text
          style={{
            opacity: 0.7,
            fontSize: "2.5rem",
            fontWeight: 700,
          }}
        >
          {t("resume-description")}
        </Text>
        <Text
          style={{
            opacity: 0.5,
          }}
        >
          {t("description")}
        </Text>
        <ContainerCenter
          style={{
            padding: "2rem 0 0",
          }}
        >
          <Container
            style={{
              marginRight: "3rem",
            }}
          >
            <Link href="https://github.com/alexandrejsx" target="_blank">
              <GitHubIcon
                style={{
                  fontSize: "5rem",
                }}
              />
            </Link>
          </Container>
          <Container>
            <Link
              href="https://www.linkedin.com/in/alexandre-queiroz-dev/"
              target="_blank"
            >
              <LinkedInIcon
                style={{
                  fontSize: "5rem",
                }}
              />
            </Link>
          </Container>
        </ContainerCenter>
      </Container>
      <ContainerImage
        style={{
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
        }}
      >
        <MainImage
          style={{
            height: "auto",
            width: "50%",
          }}
        />
      </ContainerImage>
    </>
  );
};

export default ResumeComponent;
