import styled from "styled-components";

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: 0;
    outline: 0;
  }

  a {
    text-decoration: none;
  }
  & > * {
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.6rem;

    color: ${(props) => props.theme.colors.blue};
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

export const CardBodyTitle = styled.strong`
  display: block;

  margin: 1.25rem 0rem 0.5rem 0rem;

  font-size: ${(props) => props.theme.fontSizes["xxl"]};
  color: ${(props) => props.theme.colors["base-title"]};
`;
export const IconsContainer = styled.footer`
  display: flex;
  gap: 2rem;
`;
export const CardIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  * {
    color: ${(props) => props.theme.colors["base-span"]};
  }
  a {
    text-decoration: none;
  }

  font-size: 1rem;
`;

export const MainContent = styled.main`
  padding: 2.5rem 2rem;
`;
