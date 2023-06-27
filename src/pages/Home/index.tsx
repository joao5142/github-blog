import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@/components/ui/Card";
import {
  Avatar,
  CardProfileContainer,
  CardProfileContent,
  CardProfileIconContainer,
  HomeContainer,
} from "./styles";

import {
  faUserGroup,
  faBuilding,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Posts } from "./components/Posts";

import { useContext } from "react";

import { UserContext } from "@/contexts/UserContext";

export function Home() {
  const { user } = useContext(UserContext);

  return (
    <HomeContainer>
      <Card>
        <CardProfileContainer>
          <Avatar src={user?.avatar_url} alt="" />

          <CardProfileContent>
            <header>
              <h1>{user?.name}</h1>
              <a href={user?.html_url} target="_blank">
                Github <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </header>
            <p>{user?.bio}</p>
            <footer>
              <CardProfileIconContainer>
                <FontAwesomeIcon icon={faGithub} />{" "}
                <a href={user?.html_url}>{user?.login}</a>
              </CardProfileIconContainer>

              <CardProfileIconContainer>
                <FontAwesomeIcon icon={faBuilding} />{" "}
                <span>Rocketseat | PUCRS</span>
              </CardProfileIconContainer>

              <CardProfileIconContainer>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{user?.followers} seguidores</span>
              </CardProfileIconContainer>
            </footer>
          </CardProfileContent>
        </CardProfileContainer>
      </Card>

      <Posts />
    </HomeContainer>
  );
}
