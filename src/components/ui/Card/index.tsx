import { ReactNode } from "react";
import { CardContainer } from "./styles";
import { ColorsTypes } from "../../../styles/themes/defaultTheme";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  background?: ColorsTypes;
}
export function Card({
  children,
  background = "base-profile",
  ...rest
}: CardProps) {
  return (
    <CardContainer background={background} {...rest}>
      {children}
    </CardContainer>
  );
}
