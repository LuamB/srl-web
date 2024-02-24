import Link from "next/link";
import { useRouter } from "next/router";
// import { routes } from "../pages/routes";

export default function NavDesktop() {
  const router = useRouter();

  const routes = [
    {
      title: "Home",
      href: "/",
      scroll: true,
    },
    {
      title: "About",
      href: "/about",
      scroll: true,
    },
    {
      title: "Blog",
      href: "/blog",
      scroll: true,
    },
    {
      title: "Action",
      href: "/action",
      scroll: true,
    },
    {
      title: "Donate",
      href: "/#donate",
      scroll: false,
    }
  ];

  return (
    <div className="flex flex-row-reverse">
      <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
        {routes.map((route) => {
          const { scroll, href, title } = route;
          return (
            <li key={title}>
              <Link
                href={href}
                scroll={scroll}
                className={`items-center gap-1 hover:text-neutral-400 transition-all  ${
                  router.pathname === href ? "underline" : ""
                }`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


// export default function NavDesktop() {
//   const router = useRouter();

//   return (
//     <div className="flex flex-row-reverse">
//       <ul className="hidden lg:flex lg:items-center gap-6 text-sm">
//       {routes.map((route) => {
//         const {scroll, href, title} = route;
//         return (
//           <li key={title}>
//             <NavLink 
//             href={href}
//             scroll={scroll}
//             className="items-center gap-3 hover:text-neutral-400 transition-all"
//             >
//               {title}
//             </NavLink>
//           </li>
//         );
//       })}
//       </ul>
//     </div>
//   )
// };

// export const StyledNavLink = styled(Link)`
// color: #fff;
// text-decoration: none;
// padding: 1rem;

// &:hover {
//   color: #ddd;
// }

// &.active {
//   text-decoration: underline;
// }
// `;

// const StyledNavList= styled.ul`
// display: flex;
// justify-content: space-between;
// `;

// <StyledNavLink href="/" active={router.pathname === "/"} className="flex items-center gap-1 hover:text-neutral-400 transition-all">Home</StyledNavLink>
// <StyledNavLink href="/about" active={router.pathname === "/about"} className="flex items-center gap-1 hover:text-neutral-400 transition-all">About</StyledNavLink>
// <StyledNavLink href="/blog" active={router.pathname === "/blog"}>Blog</StyledNavLink>
// <StyledNavLink href="/action" active={router.pathname === "/action"}>Action</StyledNavLink>
// <StyledNavLink href="/#donate" scroll={false} active={router.pathname.includes("/#donate")}>Donate</StyledNavLink>

