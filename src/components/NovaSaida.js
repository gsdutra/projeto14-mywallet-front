import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import axios from 'axios'

import {GlobalStyles} from './GlobalStyles.js'

export default function NovaSaida(props){

	const [valor, setValor] = useState("")
	const [descricao, setDescricao] = useState("")

	function salvarSaida(){

	}

	return(<GlobalStyles>
		<Layout>
			<form onSubmit={salvarSaida}>
				<h2>Nova saída</h2>

				<input required type="text" value={valor} onChange={e => setValor(e.target.value)} placeholder='Valor'></input>

				<input required type="text" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder='Descrição'></input>

				<button type="submit">Salvar saida</button>

			</form>
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
`