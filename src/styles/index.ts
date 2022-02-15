import styled from "styled-components";
import { textFlickerInGlow, sliderKeyframes } from "./keyframes";

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  padding: 1rem 5rem;
  background: var(--dark-grey);
  @media (max-width: 992px) {
    padding: 2%;
    overflow-x: auto;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  max-width: 100rem;
  margin: 0 auto;
  @media (max-width: 992px) {
    max-width: 100%;
    margin: 0;
  }
`;

export const Logo = styled.div``;

export const LogoName = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Item = styled.li`
  list-style: none;
  flex: 0 0 auto;
  margin-left: 1rem;
`;

export const Link = styled.a`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
`;

export const TextGreen = styled.span`
  color: var(--green);
`;

export const Section = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  @media (max-width: 992px) {
    padding: 1rem 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: start;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const ContainerFill = styled.div`
  display: flex;
  @media (max-width: 992px) {
    display: contents;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const Text = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export const TextLight = styled.span`
  color: var(--light-green);
  font-size: 1rem;
  font-weight: 700;
`;

export const LogoInfo = styled.span`
  color: var(--green);
  font-size: 1.5rem;
  font-weight: 700;
  animation: ${textFlickerInGlow} 4s linear both;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const SectionText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.7;
  @media (max-width: 992px) {
    margin-bottom: 2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  padding: 1rem;
  border-radius: 0.6rem;
  border: 1px solid;
  border-color: #94f3e4;
  @media (max-width: 992px) {
    height: 30rem;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const TechInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnimatedIcon = styled.div`
  -webkit-animation: ${sliderKeyframes} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    infinite both;
  animation: ${sliderKeyframes} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite
    both;
`;

export const TextIcon = styled.span`
  margin-bottom: 1.2rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: white;
`;

export const TechTitle = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: white;
`;

export const Footer = styled.footer`
  text-align: center;
`;
