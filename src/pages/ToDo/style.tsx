import styled from "styled-components";

export const Styled = {

  Input: styled.input`
    width: 25rem;

    margin: 0;
    padding: 0.5rem;

    border: 0;
    border-bottom: 1px solid black;
    outline: 0;

    background-color: transparent;
  `,
  Root: styled.div`
    width: 60rem;
    padding: 3rem 2rem;
  `,

  Title: styled.header`
    font-size: 2.5rem;

    text-align: center;
  `,

    Main: styled.main`
    display:flex;
     flex-direction: column;
    margin-top: 3rem;
  `,
};


  // ${flexCenter("column")};

