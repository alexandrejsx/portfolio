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
  padding: 0.5rem 5rem;
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
  padding: 5rem 5rem 0;
  @media (max-width: 992px) {
    padding: 4rem 1.5rem 0;
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
  padding: 2rem 0 0;
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
  padding-bottom: 1rem;
`;

export const TextLanguage = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
  color: white;
`;

export const SwitchButtonLabel = styled.label`
  position: relative;
  padding: 5px 0;
  display: block;
  user-select: none;
  pointer-events: none;

  &:before {
    content: "";
    background: var(--dark-grey);
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 30px;
    transform: translateX(20);
    transition: transform 300ms;
  }
`;

export const SwitchButtonLabelSpan = styled.span`
  position: relative;
  font-size: 0.75rem;
  vertical-align: 0.1rem;
`;

export const SwitchButtonCheckBox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
  border: 1px solid var(--light-green);

  &:checked + ${SwitchButtonLabel}:before {
    transform: translateX(90px);
    transition: transform 300ms linear;
  }
`;

export const SwitchButton = styled.div`
  background: var(--grey);
  border-radius: 30px;
  border: 1px solid var(--light-green);
  overflow: hidden;
  width: 180px;
  text-align: center;
  letter-spacing: 1px;
  color: var(--green);
  position: relative;
  padding-right: 90px;
  position: relative;
  font-size: 0.75rem;

  &:before {
    content: "Português";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
  }
`;
