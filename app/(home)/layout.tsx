import { LayoutTransition } from "@/components/providers/layout-transition";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="min-h-screen flex flex-col w-full">
			<Header />
			<div className="flex-1 flex-grow">{children}</div>
			<Footer />
		</main>
	);
}
