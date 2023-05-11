import { type NextRequest } from "next/server";

export const config = {
	runtime: "edge",
};

export default async function handler(req: NextRequest) {
	return fetch("https://frontend-take-home-service.fetch.com/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: "Michael Orwin",
			email: "orwinmc@gmail.com",
		}),
	});
}
