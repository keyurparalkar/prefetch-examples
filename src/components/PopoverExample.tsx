import { useState } from "react";
import { useFloating, useHover, useInteractions } from "@floating-ui/react";

export default function PopoverExample() {
	const [isOpen, setIsOpen] = useState(false);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
	});

	const hover = useHover(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

	const handleMouseEnter = () => {
		console.log("ON Mouse Enter");
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
		>
			<span
				onMouseEnter={handleMouseEnter}
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
					Floating element
				</div>
			)}
		</div>
	);
}
