import { useEffect, useState } from "react";

export default function UserProfileWithFetching() {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState<Record<string, string>>({});

	useEffect(() => {
		setIsLoading(true);
		fetch("https://jsonplaceholder.typicode.com/users/1")
			.then((resp) => resp.json())
			.then((data) => {
				setData(data);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) return <span>Loading...</span>;

	return (
		<div id="user-profile">
			<div id="user-name">name: {data.name}</div>
			<div id="user-email">email: {data.email}</div>
			<div id="user-phone">phone: {data.phone}</div>
			<div id="user-website">website: {data.website}</div>
		</div>
	);
}
