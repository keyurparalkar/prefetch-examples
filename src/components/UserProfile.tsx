import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
	<ContentLoader
		speed={2}
		viewBox="0 0 476 124"
		backgroundColor="#d1d1d1"
		foregroundColor="#fafafa"
	>
		<rect x="4" y="43" rx="0" ry="0" width="98" height="30" />
	</ContentLoader>
);

export default function UserProfile(props: Record<string, string | boolean>) {
	const { name, email, phone, website, hasAdditionalDetails } = props;
	const [isLoading, setIsLoading] = useState(false);
	const [additionalData, setAdditionalData] = useState(0);

	useEffect(() => {
		if (hasAdditionalDetails) {
			setIsLoading(true);
			fetch("https://jsonplaceholder.typicode.com/albums")
				.then((resp) => resp.json())
				.then(
					(
						data: Array<{
							userId: number;
						}>
					) => {
						const albumCount = data.reduce((acc, curr) => {
							if (curr.userId === 1) acc += 1;

							return acc;
						}, 0);
						setAdditionalData(albumCount);
					}
				)
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [hasAdditionalDetails]);

	return (
		<div id="user-profile">
			<div id="user-name">name: {name}</div>
			<div id="user-email">email: {email}</div>
			<div id="user-phone">phone: {phone}</div>
			<div id="user-website">website: {website}</div>
			{hasAdditionalDetails && (
				<>
					{isLoading ? (
						<MyLoader />
					) : (
						<div id="user-albums">Album Count: {additionalData}</div>
					)}
				</>
			)}
		</div>
	);
}
