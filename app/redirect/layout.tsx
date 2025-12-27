import { Suspense } from "react";

export default function RootLayout({ children }) {
	return (
		<body className="bg-ctp-base h-screen max-w-screen">
			<main className="bg-ctp-base min-h-screen max-w-screen">
				<Suspense>{children}</Suspense>
			</main>
		</body>
	)
}