import { routes } from "@/routes";
import { StyledNavLink } from "./NavDesktop";
// import LogoHomeLink from "./LogoHomeLink";
export default function Footer() {
  return (
    <ul>
      <li>
         <StyledNavLink href="/about">About</StyledNavLink>
      </li>
      <li>
        <StyledNavLink href="/action">Action</StyledNavLink>
      </li>
      <li>
        <StyledNavLink href="/blog">Blog</StyledNavLink>
      </li>
      <li>
        <StyledNavLink href="/#donate" scroll={false}>Donate</StyledNavLink>
      </li>
    </ul>
  )
}