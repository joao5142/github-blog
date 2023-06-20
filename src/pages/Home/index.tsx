import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../components/ui/Card";
import { Avatar, CardProfileContainer, CardProfileContent, CardProfileIconContainer, HomeContainer } from "./styles";

import { faUserGroup, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Home() {
	return (
		<HomeContainer>
			<Card>
				<CardProfileContainer>
					<Avatar
						src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
						alt=""
					/>

					<CardProfileContent>
						<header>
							<h1>Cameron Williamson</h1>
							<span>github</span>
						</header>
						<p>
							Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean
							malesuada suscipit. Nunc, volutpat pulvinar vel mass.
						</p>
						<footer>
							<CardProfileIconContainer>
								<FontAwesomeIcon icon={faGithub} /> <span>cameronwll</span>
							</CardProfileIconContainer>

							<CardProfileIconContainer>
								<FontAwesomeIcon icon={faBuilding} /> <span>Rocketseat</span>
							</CardProfileIconContainer>

							<CardProfileIconContainer>
								<FontAwesomeIcon icon={faUserGroup} />
								<span>32 seguidores</span>
							</CardProfileIconContainer>
						</footer>
					</CardProfileContent>
				</CardProfileContainer>
			</Card>
		</HomeContainer>
	);
}
