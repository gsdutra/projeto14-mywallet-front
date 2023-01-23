import {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import axios from 'axios'

import {GlobalStyles} from './GlobalStyles.js'
import TokenContext from '../contexts/TokenContext.js'

export default function Main(props){

	const nav = useNavigate()

	const[email, setUserEmail] = useState("")
	const[password, setPassword] = useState("")

	const {token, setToken} = useContext(TokenContext)

	function signInSuccess(res){
		setToken("Bearer " + res.data)
		nav('/home')
	}

	function login(event){
		event.preventDefault();

		const prom = axios.post(`${process.env.REACT_APP_API_URL}/signin`, {
			email, password
		})

		prom.then(signInSuccess).catch(()=>alert("Usuário ou senha inválidos"))

	}

	return(<GlobalStyles>
		<Layout>
			<h1>MyWallet</h1>

			<form onSubmit={login}>
				<input required type="text" value={email} onChange={e => setUserEmail(e.target.value)} placeholder='E-mail'></input>

				<input required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha'></input>

				<button type="submit">Entrar</button>
			</form>

			<a>
			<Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
			</a>

		</Layout>
	</GlobalStyles>)
}

const Layout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	padding-left: 25px;
	padding-right: 25px;

	a{
		text-decoration: none;
		color: white;
		margin-top: 36px;
		font-family: Raleway;
		font-size: 15px;
		font-weight: 700;
		line-height: 18px;
		letter-spacing: 0em;
		text-align: left;
	}
`

