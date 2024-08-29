"use client";
import Particles from "@/components/magicui/particles";
import Hero from "@/components/shared/hero";
import { toast } from "sonner";
import { useState } from "react";
import Form from "@/components/form/heroForm";

export default function Home() {
	const [name, setName] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleSubmit = async () => {
		if (!name) {
			toast.error("Please fill in all fields 😠");
			return;
		}

		setLoading(true);

		const promise = new Promise(async (resolve, reject) => {
			try {
				// First, attempt to send the email
				const mailResponse = await fetch("/api/mail", {
					cache: "no-store",
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ firstname: name }),
				});

				if (!mailResponse.ok) {
					if (mailResponse.status === 429) {
						reject("Rate limited");
					} else {
						reject("Email sending failed");
					}
					return; // Exit the promise early if mail sending fails
				}

				// If email sending is successful, proceed to insert into Notion
				const notionResponse = await fetch("/api/notion", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ name }),
				});

				if (!notionResponse.ok) {
					if (notionResponse.status === 429) {
						reject("Rate limited");
					} else {
						reject("Notion insertion failed");
					}
				} else {
					resolve({ name });
				}
			} catch (error) {
				reject(error);
			}
		});

		toast.promise(promise, {
			loading: "Getting you on the waitlist... 🚀",
			success: (data) => {
				setName("");
				return "Thank you for joining the waitlist 🎉";
			},
			error: (error) => {
				if (error === "Rate limited") {
					return "You're doing that too much. Please try again later";
				} else if (error === "Email sending failed") {
					return "Failed to send email. Please try again 😢.";
				} else if (error === "Notion insertion failed") {
					return "Failed to save your details. Please try again 😢.";
				}
				return "An error occurred. Please try again 😢.";
			},
		});

		promise.finally(() => {
			setLoading(false);
		});
	};
	return (
		<>
			<main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
				<section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
					<Hero />
					<Form
						name={name}
						handleNameChange={handleNameChange}
						handleSubmit={handleSubmit}
						loading={loading}
					/>
					<Particles
						quantityDesktop={350}
						quantityMobile={100}
						ease={80}
						color={"#F7FF9B"}
						refresh
					/>
				</section>
			</main>
		</>
	);
}
