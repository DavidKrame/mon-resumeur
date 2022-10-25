import styled, { keyframes } from "styled-components";

const colors = {
  primary: "rgb(86, 151, 235)",
};

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

export const Loader = styled.div`
  padding: 10px;
  border: 10px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 50px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;

export default function Loading() {
  return (
    <div
      style={{
        float: "center",
      }}
    >
      <Loader />
    </div>
  );
}
