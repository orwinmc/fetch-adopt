import Card from "../components/Card";

export default async function Home() {
	const response = await fetch("https://localhost:3000/api/dogs/search", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
	});
	console.log(response);

	return (
		<main>
			Response: {response.status}
			<br />
			TESTING 1 2 3<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			asdf
		</main>
	);
}
