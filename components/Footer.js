import Link from "next/link"
import styled from "styled-components"
import LogoHomeLink from "./LogoHomeLink"



export default function Footer() {
  return (
    <ul>
      <li>
         <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/action">Action</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/#donate" scroll={false}>Donate</Link>
      </li>
    </ul>
  )
}