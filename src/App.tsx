import React from 'react';
import GlobalStyles from './styles/global';
import {
  Main,
  Header,
  HeaderContainer,
  Nav,
  Logo,
  LogoInfo,
  LogoName,
  List,
  Item,
  Link,
  Section,
  Container,
  ContainerFill,
  ContainerImage,
  Text,
  TextLight,
  TextGreen,
  ContainerCenter,
} from './styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MainImage from './assets/images/MainImage';
import SecondImage from './assets/images/SecondImage';
import { motion } from 'framer-motion';
import {
  Timeline,
  Events,
  TextEvent,
  themes,
  createTheme,
} from '@merc/react-timeline';

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#EEEEEE',
    color: '#1A1A1B',
  },
  date: {
    backgroundColor: '#37AA9C',
  },
  marker: {
    backgroundColor: '#EEEEEE',
    borderColor: '#94F3E4',
  },
  timelineTrack: {
    backgroundColor: '#37AA9C',
  },
  textEvent: {
    backgroundColor: '#EEEEEE',
  },
});

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Header>
            <HeaderContainer>
              <Logo>
                <LogoName>Alexandre</LogoName>
                <LogoInfo>.info()</LogoInfo>
              </Logo>
              <Nav>
                <List>
                  <Item>
                    <Link>
                      .About<TextGreen>()</TextGreen>
                    </Link>
                  </Item>
                  <Item>
                    <Link>
                      .Skills<TextGreen>()</TextGreen>
                    </Link>
                  </Item>
                  <Item>
                    <Link>
                      .Experience<TextGreen>()</TextGreen>
                    </Link>
                  </Item>
                </List>
              </Nav>
            </HeaderContainer>
          </Header>
        </motion.div>
        <Section>
          <Container
            style={{
              height: '100vh',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: '100rem',
              margin: '0 auto',
            }}
          >
            <Container
              style={{
                flexDirection: 'column',
              }}
            >
              <TextLight>Hi, my name is</TextLight>
              <Text
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                }}
              >
                Alexandre Queiroz.
              </Text>
              <Text
                style={{
                  opacity: 0.7,
                  fontSize: '2.5rem',
                  fontWeight: 700,
                }}
              >
                Software Developer and music lover
              </Text>
              <Text
                style={{
                  opacity: 0.5,
                }}
              >
                I've been working with software development for 4 years and in
                my spare time I'm a bad guitarist
              </Text>
              <ContainerCenter
                style={{
                  padding: '2rem 0',
                }}
              >
                <Container
                  style={{
                    marginRight: '3rem',
                  }}
                >
                  <Link>
                    <motion.div
                      className="container"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 120,
                      }}
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <GitHubIcon
                        style={{
                          fontSize: '5rem',
                        }}
                      />
                    </motion.div>
                  </Link>
                </Container>
                <Container>
                  <Link>
                    <motion.div
                      className="container"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 120,
                      }}
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <LinkedInIcon
                        style={{
                          fontSize: '5rem',
                        }}
                      />
                    </motion.div>
                  </Link>
                </Container>
              </ContainerCenter>
            </Container>
            <ContainerImage
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '50%',
              }}
            >
              <MainImage
                style={{
                  height: 'auto',
                  width: '50%',
                }}
              />
            </ContainerImage>
          </Container>
        </Section>
        <Section>
          <Container
            style={{
              justifyContent: 'center',
              maxWidth: '100rem',
              margin: '0 auto',
            }}
          >
            <Text
              style={{
                fontSize: '2.5rem',
                fontWeight: 700,
              }}
            >
              .About
              <TextGreen
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                }}
              >
                ()
              </TextGreen>
            </Text>
          </Container>
          <Container
            style={{
              justifyContent: 'space-between',
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '3rem 0',
            }}
          >
            <ContainerImage
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '50%',
              }}
            >
              <SecondImage
                style={{
                  height: 'auto',
                  width: '50%',
                }}
              />
            </ContainerImage>
            <ContainerFill
              style={{
                width: '50%',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Timeline theme={customTheme}>
                <Events>
                  <TextEvent date="May 2000" text="I was born!" />
                  <TextEvent
                    date="Jun 2014"
                    text="I started learning programming"
                  />
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
          </Container>
        </Section>
      </Main>
    </>
  );
}

export default App;
