import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import axios from 'axios'

import {GlobalStyles} from './GlobalStyles.js'

export default function Home(props){

	return(<GlobalStyles>
		<Layout>
			<section>
				<h2>Olá, Fulano</h2>
				<Registros>
					Não há registros de entrada ou saída
				</Registros>
				<div>
					<button>Nova entrada</button>
					<button>Nova saída</button>
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
`

const Registros = styled.div`
	background: white;
	border-radius: 5px;
	width: 100%;
	height: 70vh;
`