import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card } from "@/components/ui/Card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faComment,
  faChevronLeft,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  CardBodyTitle,
  CardHeader,
  CardIconContainer,
  IconsContainer,
  MainContent,
} from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { api } from "@/lib/api";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { UserContext } from "@/contexts/UserContext";

interface IPostIssue {
  id: number;
  comments: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
}

export function Post() {
  const navigate = useNavigate();
  const [post, setPost] = useState<IPostIssue>();
  const { user } = useContext(UserContext);

  const { issueNumber } = useParams();

  function handleGoBack() {
    navigate("/");
  }

  async function fetchPostData() {
    const response = await api.get(
      "/repos/joao5142/github-blog/issues/" + issueNumber
    );
    const data = response.data;
    setPost(data);
  }

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <>
      <Card>
        <CardHeader>
          <button onClick={handleGoBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </button>
          <a href={post?.html_url} target="_blank">
            ver no github <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </CardHeader>

        <CardBodyTitle>{post?.title}</CardBodyTitle>

        <IconsContainer>
          <CardIconContainer>
            <FontAwesomeIcon icon={faGithub} />{" "}
            <a href={user?.html_url} target="_blank">
              {user?.login}
            </a>
          </CardIconContainer>

          <CardIconContainer>
            <FontAwesomeIcon icon={faBuilding} />{" "}
            <time>
              {formatDistance(new Date(), new Date(post?.created_at ?? 0), {
                addSuffix: true,
                locale: ptBR,
              })}
            </time>
          </CardIconContainer>

          <CardIconContainer>
            <FontAwesomeIcon icon={faComment} />
            <span>{post?.comments} comentários</span>
          </CardIconContainer>
        </IconsContainer>
      </Card>

      <MainContent>{post?.body}</MainContent>
    </>
  );
}
