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

const AboutComponent = () => (
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
        .About
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
          {`//my love story with programming`}
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
          <SectionText>
            I started learning programming at the age of 14 by self-learning,
            taking online courses and creating personal projects, at the age of
            17 I entered my first job as a Full-Stack developer. I worked as a
            Full-Stack and Back-End developer on several projects.
          </SectionText>
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
            <TextEvent date="May 2000" text="I was born!" />
            <TextEvent date="Jun 2014" text="I started learning programming" />
            <TextEvent
              date="Feb 2018"
              text="My first job as a software developer"
            />
            <TextEvent
              date="Today"
              text="I'm keep learning and improve my skills"
            />
          </Events>
        </Timeline>
      </ContainerFill>
    </SectionContainer>
  </>
);

export default AboutComponent;
