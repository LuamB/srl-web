import Link from "next/link";
// import { routes } from "@/pages/routes";
// import LogoHomeLink from "./LogoHomeLink";
export default function Footer() {
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
    // <div className="flex flex-row-reverse">
      <ul className=" lg:items-center gap-5 text-sm">
        {routes.map((route) => {
          const {scroll, href, title} = route;
          return (
            <li key={title}>
              <Link
              href={href}
              scroll={scroll}
              className="flex-row items-center gap-3 hover:text-neutral-400 transition-all"
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
  // </div>
  )
}
