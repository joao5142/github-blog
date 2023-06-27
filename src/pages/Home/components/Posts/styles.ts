import styled from "styled-components";

export const PostsContainer = styled.main``;

export const SearchHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 4.5rem 0rem 0.75rem 0rem;

  strong {
    font-size: 1.125rem;
  }
  span {
    color: ${(props) => props.theme.colors["base-span"]};
  }
`;
export const SearchContent = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 3rem;

  background: ${(props) => props.theme.colors["base-input"]};

  border: 1px solid ${(props) => props.theme.colors["base-border"]};

  border-radius: 6px;

  outline: 0;

  color: ${(props) => props.theme.colors["base-label"]};

  &::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
  }
`;

export const PostsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));

  gap: 2rem;

  @media screen and (max-width: 800px) {
    & {
      grid-template-columns: repeat(1, minmax(300px, 1fr));
    }
  }
`;

export const CardPostHeader = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors["base-title"]};
  }
  time {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors["base-span"]};
  }
`;

export const CardPostBody = styled.div`
  margin-top: 1.25rem;

  color: ${(props) => props.theme.colors["base-text"]};

  overflow: hidden;

  max-height: 200px;
  text-overflow: ellipsis;
  line-clamp: 2;
  -webkit-line-clamp: 2;
`;
