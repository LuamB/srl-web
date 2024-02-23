import { StyledNavLink } from "./NavDesktop";
import Image from "next/image";
import logoIcon from "../../public/SRL-round.svg"

export default function LogoHomeLink() {
  return (
    <StyledNavLink href={"/"}>
      <Image src={logoIcon} alt="Logo of the alliance serves as link to home page" />
    </StyledNavLink>
  )
}