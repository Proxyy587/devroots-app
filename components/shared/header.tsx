"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Icons } from "../ui/icons";
import { navItems } from "@/constants";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import ThemeSwitch from "./theme-switch";

const Header = () => {
	return (
		<div className="sticky z-20 top-0 bg-accent/5 backdrop-filter backdrop-blur-md bg-opacity-30 w-full ">
			<nav className="flex flex-row items-center justify-between py-4 border-b w-full px-4 md:px-16">
				<Link href="/" className="group">
					<div className="flex items-center gap-2">
						<Icons.logo
							width={160}
							height={40}
							className="group-hover:scale-110 transition-all duration-150 ease-linear"
						/>
					</div>
				</Link>

				<div className="hidden md:flex ml-8 items-center gap-3 text-muted-foreground">
					{navItems.map((item, idx) => (
						<Link href={item.url} key={idx}>
							<Button variant={"ghost"}>{item.label}</Button>
						</Link>
					))}
				</div>

				<div className="ml-auto hidden md:block">
					<div>
						<SignedOut>
							<div className="flex flex-row items-center gap-3">
								<Link href="/sign-in">
									<Button variant="secondary">Sign in</Button>
								</Link>

								<Link href="/sign-up">
									<Button>
										Get Started
										<Icons.login className="ml-1 h-3.5 w-3.5" />
									</Button>
								</Link>
								<ThemeSwitch />
							</div>
						</SignedOut>
						<SignedIn>
							<Link href="/dashboard">
								<Button>
									Dashboard
									<Icons.arrowRight className="ml-1 h-3.5 w-3.5" />
								</Button>
							</Link>
							<ThemeSwitch />
						</SignedIn>
					</div>
				</div>

				{/* TODO: mobile nav */}
				<div className="md:hidden ml-auto flex-center gap-2">
					<SignedIn>
						<UserButton />
					</SignedIn>
					<Sheet>
						<SheetTrigger asChild>
							<MenuIcon className="w-5 h-5 hover:cursor-pointer" />
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<Link href="/" className="group mb-2">
									<div className="flex items-center gap-2">
										<Image
											src="/logo.svg"
											alt="morph2json"
											width={28}
											height={28}
											className="group-hover:rotate-12 transition-all duration-150 ease-linear"
										/>
										<span className="group-hover:text-yellow-100 transition-all duration-300 ease-linear font-medium text-lg tracking-tight">
											morph2json
										</span>
									</div>
								</Link>
								<Separator />
							</SheetHeader>
							<div className="flex-center flex-col mt-2 text-lg gap-3">
								{navItems.map((item, idx) => (
									<Link href={item.url} key={idx}>
										<Button variant={"ghost"} size={"lg"}>
											{item.label}
										</Button>
									</Link>
								))}

								<div>
									<SignedOut>
										<div className="flex-center flex-col gap-3">
											<Link href="/sign-in">
												<Button variant="secondary" size={"lg"}>
													Sign in
												</Button>
											</Link>

											<Link href="/sign-up">
												<Button size={"lg"}>
													Get Started
													<Icons.login className="ml-1 h-3.5 w-3.5" />
												</Button>
											</Link>
										</div>
									</SignedOut>
									<SignedIn>
										<Link href="/dashboard">
											<Button>
												Dashboard
												<Icons.arrowRight className="ml-1 h-3.5 w-3.5" />
											</Button>
										</Link>
									</SignedIn>
									<ThemeSwitch />
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</div>
	);
};

export default Header;
