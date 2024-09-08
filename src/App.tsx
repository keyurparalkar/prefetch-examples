import PopoverExample from "./components/PopoverExample";
import "./App.css";

export default function App() {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "auto 1fr",
				gridTemplateColumns: "1fr 1fr",
			}}
		>
			<h1 style={{ gridColumn: "1/3" }}>Prefetch Examples</h1>
			<PopoverExample />
			<PopoverExample />
			<PopoverExample />
			<PopoverExample />
		</div>
	);
}
