export default function UserProfile(props: Record<string, string>) {
	const { name, email, phone, website } = props;

	return (
		<div id="user-profile">
			<div id="user-name">name: {name}</div>
			<div id="user-email">email: {email}</div>
			<div id="user-phone">phone: {phone}</div>
			<div id="user-website">website: {website}</div>
		</div>
	);
}
