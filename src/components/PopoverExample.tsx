import { useState } from "react";
import { useFloating, useHover, useInteractions } from "@floating-ui/react";
import ContentLoader from "react-content-loader";
import UserProfile from "./UserProfile";
import UserProfileWithFetching from "./UserProfileWithFetching";

export const MyLoader = () => (
	<ContentLoader
		speed={2}
		width={340}
		height={84}
		viewBox="0 0 340 84"
		backgroundColor="#d1d1d1"
		foregroundColor="#fafafa"
	>
		<rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
		<rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
		<rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
		<rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
		<rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
		<rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
		<rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
		<rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
	</ContentLoader>
);
export default function PopoverExample() {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({});

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement: "top",
	});

	const hover = useHover(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

	const handleMouseEnter = () => {
		console.log("ON Mouse Enter");
		if (Object.keys(data).length === 0) {
			setIsLoading(true);
			fetch("https://jsonplaceholder.typicode.com/users/1")
				.then((resp) => resp.json())
				.then((data) => {
					setData(data);
					setIsLoading(false);
				});
		}
	};

	return (
		<div
			id="hover-example"
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				textAlign: "left",
			}}
			onMouseEnter={handleMouseEnter}
		>
			<span
				style={{
					padding: "1rem",
				}}
			>
				<img
					ref={refs.setReference}
					{...getReferenceProps()}
					style={{
						borderRadius: "50%",
					}}
					src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png"
				/>
			</span>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>
			{isOpen && (
				<div
					className="floating"
					ref={refs.setFloating}
					style={{
						...floatingStyles,
						backgroundColor: "white",
						color: "black",
						padding: "1rem",
						fontSize: "1rem",
					}}
					{...getFloatingProps()}
				>
					{isLoading ? (
						<MyLoader />
					) : (
						<UserProfile hasAdditionalDetails {...data} />
					)}
					{/* <UserProfileWithFetching /> */}
				</div>
			)}
		</div>
	);
}
