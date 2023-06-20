import { Header } from "../../partials/Header";
import { LayoutContent } from "./styles";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
	return (
		<>
			<Header />
			<LayoutContent>
				<Outlet />
			</LayoutContent>
		</>
	);
}
