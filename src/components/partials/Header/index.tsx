import { HeaderContainer } from "./styles";
import LogoImg from "/src/assets/logo.png";

export function Header() {
	return (
		<HeaderContainer>
			<img src={LogoImg} alt="Github Logo" />
		</HeaderContainer>
	);
}
