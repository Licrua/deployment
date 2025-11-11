

async function getData() {
	const res = await fetch("https://deployment-yyf9.onrender.com/hello", {
		cache: "no-store",
	});

	return res.json();
}

export default async function Page() {
	const data = await getData();

	return (
		<main style={{ padding: 40, fontSize: 20 }}>
			<h1>Frontend Page</h1>
			<p>Backend says: {data.message}</p>
		</main>
	);
}
