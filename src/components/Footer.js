import Link from "next/link";
// import { routes } from "../pages/routes";
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
		<div className="flex items-center w-full h-16 mt-2 p-3 bg-neutral-900">
			<ul className="flex items-center w-auto h-auto gap-6 text-sm">
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
