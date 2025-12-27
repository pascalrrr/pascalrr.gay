import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { appConfig } from "~/config";
config.autoAddCss = false
import "@/globals.css";
import { ReactNode } from "react";
import Statistics from "@components/statistics";

export const metadata = {
	title: "pascalrr.gay",
	description: "Pascalrr's Personal Website",
	metadataBase: new URL(appConfig.appUrl),
	robots: {
		index: true,
		follow: true,
	}
};

export default async function GlobalLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`scroll-smooth scrollbar-none`}>
			<head>
				<Statistics />
			</head>
			{children}
		</html>
	);
}
