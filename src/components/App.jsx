import React from "react";
import { Canvas } from "react-three-fiber";
import {
	EditableManager,
	editable as e,
	configure,
} from "react-three-editable";

// Import our previously exported state
import editableState from "./editableState.json";

configure({
	localStorageNamespace: "minimal",
});

export default function App() {
	return (
		<Canvas>
			{/* EditableManager connnects this canvas to React Three Editable. Here we can also pass our state. */}
			<EditableManager state={editableState} />
			<ambientLight intensity={0.5} />
			{/* Mark objects as editable. */}
			{/* Transforms applied in the editor are added on top of  transforms applied in code. */}
			<e.spotLight
				position={[10, 10, 10]}
				angle={0.15}
				penumbra={1}
				uniqueName="Spotlight"
			/>
			<e.pointLight uniqueName="PointLight" />
			<e.mesh uniqueName="Box">
				<boxBufferGeometry />
				<meshStandardMaterial color="orange" />
			</e.mesh>
		</Canvas>
	);
}
