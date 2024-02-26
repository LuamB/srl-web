import TitleBar from "@/components/Titlebar";
import SectionHeading from "../components/SectionHeading";

export default function Home() {
	return (
		<>
			<TitleBar />
			<section
				className="flex-col min-h-screen items-center justify-between space-y-4"
				// className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
			>
				<div className="h-60 border-solid border-b border-neutral-200 p-2">
					<SectionHeading>ABOUT</SectionHeading>
					{/* ... about content */}
				</div>

				<div className="h-60 border-solid border-b border-neutral-200 p-2">
					<SectionHeading>BLOG</SectionHeading>
					{/* ... blog content */}
				</div>

				<div className="h-60 border-solid border-b border-neutral-200 p-2">
					<SectionHeading>DONATE</SectionHeading>
					{/* ... donate content */}
				</div>
			</section>
		</>
	);
}

// // Skip in MVP
// <div className="h-60 border-solid border-b border-neutral-200 mx-1 p-1">
// 	<SectionHeading>ACTION</SectionHeading>
// 	{/* ... action content */}
// </div>;
