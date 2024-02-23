import { StyledNavLink } from "./NavDesktop";
import Image from "next/image";
import logoIcon from "../public/SRL-round.svg"
// import styled from "styled-components";

// const StyledLogo = styled(Image)``;

export default function LogoHomeLink() {
  return (
    <StyledNavLink href={"/"}>
      {/* <Image src="./SRL-roung.svg" width={100} height={100} alt="Logo of the alliance serves as link to home page" /> */}
      <Image src={logoIcon} alt="Logo of the alliance serves as link to home page" />
    </StyledNavLink>
  )
}