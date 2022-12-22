import { css } from "styled-components";

const flexBox = ({ dir = "row", content = "baseline", items = "baseline" }) =>
  css`
    display: flex;
    flex-direction: ${dir};
    justify-content: ${content};
    align-items: ${items};
  `;

const flexCenter = (dir = "row") =>
  css`
    display: flex;
    flex-direction: ${dir};
    justify-content: center;
    align-items: center;
  `;

const noScrollBar = css`
scrollbar-width: none;
::-webkit-scrollbar {
  display: none;
}
`;

const standardHeight = "2rem";

export {flexBox, flexCenter, noScrollBar, standardHeight}
