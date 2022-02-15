import {
  Header,
  HeaderContainer,
  Nav,
  Logo,
  LogoInfo,
  LogoName,
  List,
  Item,
  Link,
  TextGreen,
} from "../styles";

const HeaderComponent = () => (
  <Header>
    <HeaderContainer>
      <Logo>
        <LogoName>Alexandre</LogoName>
        <LogoInfo>.info()</LogoInfo>
      </Logo>
      <Nav>
        <List>
          <Item>
            <Link href="#about">
              .About<TextGreen>()</TextGreen>
            </Link>
          </Item>
          <Item>
            <Link href="#skills">
              .Skills<TextGreen>()</TextGreen>
            </Link>
          </Item>
        </List>
      </Nav>
    </HeaderContainer>
  </Header>
);

export default HeaderComponent;
