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
			href: "/#about",
			scroll: true,
		},
		{
			title: "Blog",
			href: "/blog",
			scroll: true,
		},
		{
			title: "Donate",
			href: "/#donate",
			scroll: false,
		},
	];
	// // Skip in MVP
	// {
	//   title: "Action",
	//   href: "/action",
	//   scroll: true,
	// },

	return (
		<div className="flex w-full h-16 mx-2 mt-2 p-2 bg-neutral-900">
			<ul className="lg:flex lg:items-center w-auto h-auto lg:gap-5 sm:gap-x-3 text-sm">
				{routes.map((route) => {
					const { scroll, href, title } = route;
					return (
						<li key={title}>
							<Link
								href={href}
								scroll={scroll}
								className="text-neutral-200 hover:text-neutral-400 transition-all"
							>
								{title}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
