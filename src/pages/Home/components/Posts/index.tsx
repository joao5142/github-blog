import { Card } from "@/components/ui/Card";
import {
  CardPostBody,
  CardPostHeader,
  PostsContainer,
  PostsSection,
  SearchContent,
  SearchHeaderContent,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { api } from "@/lib/api";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { IPost } from "@/types/Post";

interface Posts {
  incomplete_results: boolean;
  items: IPost[];
  total_count: number;
}
export function Posts() {
  const [searchQueryParam, setSearchQueryParam] = useState("");
  const [posts, setPosts] = useState<Posts>({
    incomplete_results: false,
    items: [],
    total_count: 0,
  });

  const navigate = useNavigate();

  function handleNavigatePost(id: number) {
    navigate("/post/" + id);
  }

  async function fetchPosts(query: string) {
    const response = await api.get("/search/issues", {
      params: {
        q: query + "repo:joao5142/github-blog",
      },
    });
    const data = response.data;
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts(searchQueryParam);
  }, [searchQueryParam]);

  return (
    <PostsContainer>
      <main>
        <section>
          <SearchHeaderContent>
            <strong>Publicações</strong>
            <span>{posts?.total_count || 0} publicações</span>
          </SearchHeaderContent>
          <SearchContent
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setSearchQueryParam(e?.target?.value || "");
              }
            }}
            placeholder="Buscar conteúdo"
          />
        </section>

        <PostsSection>
          {posts.items &&
            posts.items.map((post) => {
              return (
                <Card
                  key={post.id}
                  onClick={() => handleNavigatePost(post.number)}
                >
                  <CardPostHeader>
                    <strong>{post.title}</strong>
                    <time>
                      {formatDistance(new Date(), new Date(post.created_at), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </time>
                  </CardPostHeader>

                  <CardPostBody>{post.body}</CardPostBody>
                </Card>
              );
            })}
        </PostsSection>
      </main>
    </PostsContainer>
  );
}
