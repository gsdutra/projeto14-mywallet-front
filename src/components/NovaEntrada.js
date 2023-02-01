import {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import 'animate.css'

import {GlobalStyles} from './GlobalStyles.js'
import TokenContext from '../contexts/TokenContext.js'
import Loading from './Loading.js'

export default function NovaEntrada(props){

	const nav = useNavigate()

	const [valor, setValor] = useState("")
	const [descricao, setDescricao] = useState("")
	const {token, setToken} = useContext(TokenContext)
	const [loading, setLoading] = useState(false)

	const config = {
		headers: {
			"Authorization": token
		}
	}

	function postSuccess(res){
		//console.log(res)
		nav("/home")
	}

	function fail(err){
		setLoading(false)
		alert(err)
	}

	function salvarEntrada(event){
		event.preventDefault()

		setLoading(true)

		if (isNaN(Number(valor))){
			return alert ("Valor inválido")
		}
		const prom = axios.post(`${process.env.REACT_APP_API_URL}/transactions`, {
			ammount: valor,
			type: "received",
			note: descricao
		}, config)

		prom.then((res)=>postSuccess(res)).catch((res)=>fail(res))
	}

	return(<GlobalStyles>
		{loading?<Loading/>:<></>}
		<Layout className='animate__animated animate__fadeInDown'>
			<form onSubmit={salvarEntrada}>
				<h2>Nova entrada</h2>

				<input required type="text" value={valor} onChange={e => 
					setValor(e.target.value)
					} placeholder='Valor'></input>

				<input required type="text" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder='Descrição'></input>

				<button type="submit">Salvar entrada</button>

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