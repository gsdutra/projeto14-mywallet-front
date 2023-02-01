import {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import 'animate.css'

import {GlobalStyles} from './GlobalStyles.js'
import TokenContext from '../contexts/TokenContext.js'
import Loading from './Loading.js'

export default function Main(props){

	const nav = useNavigate()

	const[email, setUserEmail] = useState("")
	const[password, setPassword] = useState("")
	const[loading, setLoading] = useState(false)

	const {token, setToken} = useContext(TokenContext)

	function signInSuccess(res){
		setToken("Bearer " + res.data)
		nav('/home')
	}

	function signInFail(error){
		setLoading(false)
		alert("Usuário ou senha inválidos")
	}

	function login(event){
		event.preventDefault();
		setLoading(true)
		const prom = axios.post(`${process.env.REACT_APP_API_URL}/signin`, {
			email, password
		})

		prom.then(signInSuccess).catch((err)=>signInFail(err))

	}

	return(<GlobalStyles>
		{loading?<Loading/>:<></>}
		<Layout className='animate__animated animate__fadeInDown'>
			<h1>MyWallet</h1>

			<form onSubmit={login}>
				<input required type="text" value={email} onChange={e => setUserEmail(e.target.value)} placeholder='E-mail'></input>

				<input required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha'></input>

				<button type="submit">Entrar</button>
			</form>

			<span>
				<Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
			</span>

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
		font-family: Raleway;
		font-size: 15px;
		font-weight: 700;
		line-height: 18px;
		letter-spacing: 0em;
		text-align: left;
	}

	span{
		margin-top: 36px;
	}
`

