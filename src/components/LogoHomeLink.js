import Link from "next/link";
import Image from "next/image";
import logoIcon from "../../public/SRL-round.svg";

export default function LogoHomeLink() {
	return (
		<div className="absolute inset-y-0 left-1 w-12 p-2">
			<Link href={"/"}>
				<Image
					src={logoIcon}
					priority
					// width={32}
					// height={32}
					alt="Logo of the alliance Solidarity with Refugees in Libya serves as link to home page"
				/>
			</Link>
		</div>
	);
}
