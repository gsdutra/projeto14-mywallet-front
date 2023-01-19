import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import axios from 'axios'

import {GlobalStyles} from './GlobalStyles.js'

export default function Main(props){

	const nav = useNavigate()

	const[userEmail, setUserEmail] = useState("")
	const[password, setPassword] = useState("")

	function login(event){
		event.preventDefault();

		//Implement axios requisition

		nav('/home')
	}

	return(<GlobalStyles>
		<Layout>
			<h1>MyWallet</h1>

			<form onSubmit={login}>
				<input required type="text" value={userEmail} onChange={e => setUserEmail(e.target.value)} placeholder='E-mail'></input>

				<input required type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha'></input>

				<button type="submit">Entrar</button>
			</form>

		</Layout>
	</GlobalStyles>)
}

const Layout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
`

