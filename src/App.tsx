import PopoverExample from "./components/PopoverExample";
import "./App.css";

export default function App() {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "1fr 1fr 1fr",
				gridTemplateColumns: "1fr auto",
			}}
		>
			<h1 style={{ gridColumn: "1/3" }}>Prefetch Examples</h1>
			<PopoverExample />
		</div>
	);
}
