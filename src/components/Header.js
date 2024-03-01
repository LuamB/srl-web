// import LogoHomeLink from "./LogoHomeLink";
// import NavDesktop from "./NavDesktop";
// import NavMobile from "./NavMobile";
import LogoHomeLink from "./LogoHomeLink";
// import NavDesktop from "./NavDesktop";
// import NavMobile from "./NavMobile";
// import Image from "next/image";
// import logoIcon from "../../public/SRL-round.svg";

export default function Header() {
	return (
		<div className="flex relative w-full h-40 mb-3 p-3 bg-neutral-900">
			<LogoHomeLink />
			{/* <NavDesktop />
			<NavMobile /> */}
		</div>
	);
}

// export default function Header() {
// 	return (
// 		<header className="fixed top-0 left-0 w-full h-40 bg-neutral-900 text-white backdrop-blur-md">
// 			<div className="max-w-7xl mx-auto flex items-center justify-between p-4">
// 				<div className="flex items-center">
// 					{/* Logo */}
// 					<div className="mr-4">
// 						<Image
// 							src={logoIcon}
// 							alt="SRL Logo - Supporting Refugees in Libya"
// 							width={100}
// 							height={100}
// 						/>
// 					</div>

// 					{/* Text */}
// 					<blockquote className="text-md font-light text-neutral-500 leading-loose">
// 						<p>
// 							Black African-led grassroots alliance that is committed to support
// 							refugees in Libya, opposing both racist EU migration policies and
// 							anti-Black racism in Libya and beyond. We uphold values that
// 							challenge all forms of oppression and exploitation based on race,
// 							gender, sexuality, class, and disability. Our mission is
// 							anti-colonial and part of the broader struggle for African
// 							liberation.
// 						</p>
// 					</blockquote>
// 				</div>
// 			</div>
// 		</header>
// 	);
// }
