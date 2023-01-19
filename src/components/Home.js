import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import axios from 'axios'

import exitIcon from '../assets/exit.png'

import {GlobalStyles} from './GlobalStyles.js'

export default function Home(props){

	const nav = useNavigate();

	return(<GlobalStyles>
		<Layout>
			<section>
				<h2>Olá, Fulano <img src={exitIcon}/></h2> 
				{true?
				<RegistrosVazio>
					<p>Não há registros de entrada ou saída</p>
				</RegistrosVazio>
				:
				<Registros>
				</Registros>
				}
				
				<div>
					<button onClick={()=>nav("/nova-entrada")}>
						<ion-icon name="add-circle-outline"></ion-icon>
						<p>Nova<br/>entrada</p>
					</button>
					<PaddingBtns/>
					<button onClick={()=>nav("/nova-saida")}>
						<ion-icon name="remove-circle-outline"></ion-icon>
						<p>Nova<br/>saída</p>
					</button>
				</div>
			</section>
		</Layout>
	</GlobalStyles>)
}

const Layout = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	padding-left: 25px;
	padding-right: 25px;

	section {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 326px;
	}

	div{
		display: flex;
		justify-content: space-between;


	}
	
	ion-icon{
		font-size: 25px;
	}

	button{
		margin-top: 13px;
		width: 156px;
		height: 114px;

		font-size: 17px;
		font-weight: 700;
		text-align: left;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px;
		text-decoration: none;

		&:visited,&:link,&:active {
			text-decoration:none;
		}
	}
`

const PaddingBtns = styled.div`
	width: 15px;
	height: 10px;
`

const Registros = styled.div`
	background: white;
	border-radius: 5px;
	width: 100%;
	height: 70vh;
`

const RegistrosVazio = styled.div`
	background: white;
	border-radius: 5px;
	width: 100%;
	height: 70vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p{	
		font-family: Raleway;
		font-size: 20px;
		font-weight: 400;
		line-height: 23px;
		letter-spacing: 0em;
		color: #868686;
		width: 180px;
		margin-top: 30vh;
		text-align: center;
	}
`