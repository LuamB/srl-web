import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
	const { data: session } = useSession();

	if (session) {
		return (
			<div className="w-full h-screen flex flex-col items-center">
				<p>Welcome ${session.user.name}</p>
				<Image
					src={session.user.image}
					width={24}
					height={24}
					alt="Users profile picture from Google"
					className="rounded-full my-2"
				/>
				<button
					onClick={() => signOut}
					className="bg-green-900 hover:bg-green-700 text-neutral-200 font-bold py-2 px-4 rounded-full"
				>
					Sign out
				</button>
			</div>
		);
	} else {
		return (
			<div className="w-full h-screen flex flex-col items-center">
				<p>You are not signed in.</p>
				<button
					onClick={() => signIn}
					className="bg-green-900 hover:bg-green-700 text-neutral-200 font-bold py-2 px-4 rounded-full"
				>
					Sign in
				</button>
			</div>
		);
	}
}
