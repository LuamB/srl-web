import Link from "next/link";
import Image from "next/image";
import logoIcon from "../../public/srl-logo.png";

export default function LogoHomeLink() {
	return (
		<div className="absolute inset-y-2 align-center w-40 p-4">
			<Link href={"/"}>
				<Image
					src={logoIcon}
					priority
					width={100}
					height={100}
					alt="Logo of the alliance Solidarity with Refugees in Libya serves as link to home page"
				/>
			</Link>
		</div>
	);
}
