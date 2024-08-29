"use client";

import { Button } from "@/components/ui/button";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "../ui/text-blur";
import { Input } from "../ui/input";

export default function Hero() {
	return (
		<motion.div
			className="flex w-full max-w-2xl flex-col gap-2"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={itemVariants}>
				<div className="flex items-center justify-center">
					<div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
						<AnimatedShinyText className="px-4 py-1">
							<span>Coming soon!</span>
						</AnimatedShinyText>
					</div>
				</div>
			</motion.div>

			<motion.div variants={itemVariants}>
				<TextBlur
					className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
					text="A Simple Next.js Waitlist Template with Notion as CMS"
				/>
			</motion.div>

			<motion.div variants={itemVariants}>
				<TextBlur
					className="mx-auto max-w-[27rem] pt-3 text-center text-base text-zinc-300 sm:text-lg"
					text="Join the waitlist to get early access of the product and recieve updates on the progress!"
					duration={0.8}
				/>
			</motion.div>

			{/* <div className="flex flex-col md:flex-row gap-4 mx-auto mt-3">
				<Input className="bg-accent/10" />
				<Link href="/docs">
					<Button className="group max-md:w-full">
						Create
						<Icons.arrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-all text-sm" />
					</Button>
				</Link>
			</div> */}
		</motion.div>
	);
}
