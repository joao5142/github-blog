import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0rem 1rem;
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;

  object-fit: cover;

  border-radius: 8px;
`;

export const CardProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardProfileContainer = styled.div`
  display: flex;
  gap: 2rem;

  header {
    display: flex;
    justify-content: space-between;

    a {
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 0.6rem;

      color: ${(props) => props.theme.colors.blue};
      font-size: 1rem;
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  footer {
    display: flex;
    gap: 1.5rem;

    margin-top: 1rem;
  }
`;

export const CardProfileIconContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  & * {
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
  a {
    text-decoration: none;
  }
`;
