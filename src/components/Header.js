import RenderFromTemplateContext from "next/dist/client/components/render-from-template-context";
import LogoHomeLink from "./LogoHomeLink";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header() {
	return (
		<div className="flex relative w-full h-10 mx-3 my-3 bg-transparent">
			<LogoHomeLink />
			<NavDesktop />
			<NavMobile />
		</div>
	);
}
