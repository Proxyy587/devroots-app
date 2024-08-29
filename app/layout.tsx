import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { LayoutTransition } from "@/components/providers/layout-transition";

const poppins = Poppins({
	weight: ["300", "400", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Devroots",
	description: "An platform for developers to simplify their portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={cn("min-h-screen font-sans antialiased", poppins.variable)}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<LayoutTransition
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{children}
						</LayoutTransition>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
