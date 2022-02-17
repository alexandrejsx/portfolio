import {
  Container,
  ContainerFill,
  ContainerImage,
  Text,
  TextGreen,
  SectionContainer,
  SectionText,
} from "../styles";
import SecondImage from "../assets/images/SecondImage";
import {
  Timeline,
  Events,
  TextEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";

import { useTranslation } from "react-i18next";

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#EEEEEE",
    color: "#1A1A1B",
  },
  date: {
    backgroundColor: "#37AA9C",
  },
  marker: {
    backgroundColor: "#EEEEEE",
    borderColor: "#94F3E4",
  },
  timelineTrack: {
    backgroundColor: "#37AA9C",
  },
  textEvent: {
    backgroundColor: "#EEEEEE",
  },
});

const AboutComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container
        style={{
          justifyContent: "flex-start",
          maxWidth: "100rem",
          margin: "0 auto",
        }}
      >
        <Text
          style={{
            fontSize: "2rem",
            fontWeight: 700,
          }}
        >
          .{t("about")}
          <TextGreen
            style={{
              fontSize: "2rem",
              fontWeight: 500,
            }}
          >
            {`() { `}
          </TextGreen>
          <Text
            style={{
              opacity: 0.5,
            }}
          >
            {`//${t("programming-section")}`}
          </Text>
          <TextGreen
            style={{
              fontSize: "2rem",
              fontWeight: 500,
            }}
          >
            {` }`}
          </TextGreen>
        </Text>
      </Container>
      <SectionContainer>
        <ContainerFill
          style={{
            width: "50%",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <ContainerImage
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SecondImage
              style={{
                height: "auto",
                width: "50%",
              }}
            />
          </ContainerImage>
          <Container
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <SectionText>{t("resume")}</SectionText>
          </Container>
        </ContainerFill>
        <ContainerFill
          style={{
            width: "50%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Timeline theme={customTheme}>
            <Events>
              <TextEvent date={t("born-date")} text={t("born-text")} />
              <TextEvent date={t("learning-date")} text={t("learning-text")} />
              <TextEvent date={t("job-date")} text={t("job-text")} />
              <TextEvent date={t("today")} text={t("today-text")} />
            </Events>
          </Timeline>
        </ContainerFill>
      </SectionContainer>
    </>
  );
};

export default AboutComponent;
