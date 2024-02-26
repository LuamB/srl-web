import RenderFromTemplateContext from "next/dist/client/components/render-from-template-context";
import LogoHomeLink from "./LogoHomeLink";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header() {
	return (
		<div className="flex relative w-full h-14 mb-3 p-3 bg-neutral-900">
			<LogoHomeLink />
			<NavDesktop />
			<NavMobile />
		</div>
	);
}
