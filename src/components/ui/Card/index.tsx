import { ReactNode } from "react";
import { CardContainer } from "./styles";
import { ColorsTypes } from "../../../styles/themes/defaultTheme";

interface CardProps {
	children: ReactNode;
	background?: ColorsTypes;
}
export function Card({ children, background = "base-profile" }: CardProps) {
	return <CardContainer background={background}>{children}</CardContainer>;
}
