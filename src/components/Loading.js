import styled from "styled-components"

export default function Loading(props){
	return(<LoadingStyled>
		<StyledSpinner viewBox="0 0 50 50">
			<circle
			className="path"
			cx="25"
			cy="25"
			r="20"
			fill="none"
			strokeWidth="4"
			/>
		</StyledSpinner>
	</LoadingStyled>)
}

const LoadingStyled = styled.div`
	position: fixed;
	z-index: 10;
	width: 100%;
	height: 100vh;
	background: #454545bb;
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 120px;
  height: 120px;
  
  & .path {
    stroke: #ffffff89;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;