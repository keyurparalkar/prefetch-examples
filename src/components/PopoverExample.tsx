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

	return (
		<>
			<h2 ref={refs.setReference} {...getReferenceProps()}>
				Reference element
			</h2>
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
		</>
	);
}
