import { type NextRequest } from "next/server";

export const config = {
	runtime: "edge",
};

export default async function handler(req: NextRequest) {
	return fetch("https://frontend-take-home-service.fetch.com/dogs/breeds", {
		method: "GET",
		headers: {
			Accept: "application/json",
			Cookie: `fetch-access-token=${
				req.cookies.get("fetch-access-token")?.value
			}`,
		},
	});
}
