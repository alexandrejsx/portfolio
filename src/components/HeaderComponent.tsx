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
import { useTranslation } from "react-i18next";

const HeaderComponent = () => {
  const { t } = useTranslation();

  return (
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
                .{t("about")}
                <TextGreen>()</TextGreen>
              </Link>
            </Item>
            <Item>
              <Link href="#skills">
                .{t("skills")}
                <TextGreen>()</TextGreen>
              </Link>
            </Item>
          </List>
        </Nav>
      </HeaderContainer>
    </Header>
  );
};

export default HeaderComponent;
