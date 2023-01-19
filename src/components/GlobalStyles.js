import styled from 'styled-components'

export const GlobalStyles = styled.div`
	background: #8C11BE;
	width: 100%;
	height: 100vh;


	h1 {
		font-family: 'Saira Stencil One', cursive;
		color: white;
		font-size: 32px;
		font-weight: 400;
		line-height: 50px;
		letter-spacing: 0em;
		margin-bottom: 28px;
	}

	form{
		display: flex;
		flex-direction: column;
		width: 90%;
		max-width: 326px;
	}

	input{
		border: none;
		margin-bottom: 13px;
		height: 58px;
		border-radius: 5px;
		font-family: 'Raleway', sans-serif;
		font-weight: 400;
		font-size: 20px;
		padding-left: 15px;
	}

	button{
		background: #A328D6;
		border: none;
		height: 58px;
		border-radius: 5px;
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
		font-size: 20px;
		color: white;

		transition: .2s;
		&:hover{
			transform: scale(1.05);
			transition: .2s;
			cursor: pointer;
		}
	}
`