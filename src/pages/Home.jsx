import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Characters } from "./Characters.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="d-flex flex-wrap">
			<Characters />
		</div>
	);
}; 