import {
  Container,
  Text,
  TextGreen,
  Card,
  SectionContainer,
  AnimatedIcon,
  ContainerFill,
  SliderContainer,
  TechInfo,
  TextIcon,
  TechTitle,
} from "../styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  DiLaravel,
  DiNodejs,
  DiFirebase,
  DiMysql,
  DiMongodb,
  DiDocker,
  DiAws,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
  DiGithubBadge,
  DiScrum,
} from "react-icons/di";

import { useTranslation } from "react-i18next";

const cardSettings = {
  autoplay: false,
  dots: true,
  arrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SkillsComponent = () => {
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
          .{t("skills")}
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
            {`//${t("technologies-skills")}`}
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
      <SectionContainer
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SliderContainer>
          <ContainerFill
            style={{
              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <Slider {...cardSettings}>
              <div>
                <Container
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card>
                    <TechTitle>Back-End / {t("infrastructure")}</TechTitle>
                    <Container
                      style={{
                        padding: "2rem",
                        width: "100%",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                      }}
                    >
                      <TechInfo>
                        <AnimatedIcon>
                          <DiNodejs
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>NodeJs</TextIcon>
                      </TechInfo>
                      <TechInfo>
                        <AnimatedIcon>
                          <DiLaravel
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>Laravel</TextIcon>
                      </TechInfo>
                      <TechInfo>
                        <AnimatedIcon>
                          <DiAws
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>Aws</TextIcon>
                      </TechInfo>
                      <TechInfo>
                        <AnimatedIcon>
                          <DiDocker
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>Docker</TextIcon>
                      </TechInfo>
                      <TechInfo>
                        <AnimatedIcon>
                          <DiMysql
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>Mysql</TextIcon>
                      </TechInfo>
                      <TechInfo>
                        <AnimatedIcon>
                          <DiMongodb
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>MongoDB</TextIcon>
                      </TechInfo>
                      <TechInfo>
                        <AnimatedIcon>
                          <DiFirebase
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>Firebase</TextIcon>
                      </TechInfo>
                    </Container>
                  </Card>
                </Container>
              </div>
              <div>
                <Container
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card>
                    <TechTitle>Front-End</TechTitle>
                    <Container
                      style={{
                        padding: "2rem",
                        width: "100%",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                      }}
                    >
                      <TechInfo>
                        <AnimatedIcon>
                          <DiReact
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>React</TextIcon>
                      </TechInfo>
                      <TechInfo>
                        <AnimatedIcon>
                          <DiHtml5
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>HTML</TextIcon>
                      </TechInfo>
                      <TechInfo>
                        <AnimatedIcon>
                          <DiCss3
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>CSS</TextIcon>
                      </TechInfo>
                      <TechInfo>
                        <AnimatedIcon>
                          <DiJavascript1
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>Javascript</TextIcon>
                      </TechInfo>
                    </Container>
                  </Card>
                </Container>
              </div>
              <div>
                <Container
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card>
                    <TechTitle>{t("others-skills")}</TechTitle>
                    <Container
                      style={{
                        padding: "2rem",
                        width: "100%",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                      }}
                    >
                      <TechInfo>
                        <AnimatedIcon>
                          <DiGit
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>GIT</TextIcon>
                      </TechInfo>
                      <TechInfo>
                        <AnimatedIcon>
                          <DiGithubBadge
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>GitHub</TextIcon>
                      </TechInfo>
                      <TechInfo>
                        <AnimatedIcon>
                          <DiScrum
                            style={{
                              fontSize: "3.5rem",
                            }}
                          />
                        </AnimatedIcon>
                        <TextIcon>Scrum</TextIcon>
                      </TechInfo>
                    </Container>
                  </Card>
                </Container>
              </div>
            </Slider>
          </ContainerFill>
        </SliderContainer>
      </SectionContainer>
    </>
  );
};
export default SkillsComponent;
