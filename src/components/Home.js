import {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import axios from 'axios'

import exitIcon from '../assets/exit.png'
import TokenContext from '../contexts/TokenContext.js'

import {GlobalStyles} from './GlobalStyles.js'

export default function Home(props){

	const nav = useNavigate();

	const {token, setToken} = useContext(TokenContext)

	const [name, setName] = useState("")
	const [transactions, setTransactions] = useState({})

	function logOut(){
		setToken("")
		nav("/")
	}

	const config = {
		headers: {
			"Authorization": token
		}
	}

	useEffect(()=>{
		const nameProm = axios.get(`${process.env.REACT_APP_API_URL}/userdata`,config)

		nameProm.then((res)=>setName(res.data.username)).catch(res=>console.log(res))
	},[])


	useEffect(()=>{
		const transactionsProm = axios.get(`${process.env.REACT_APP_API_URL}/transactions`,config)

		transactionsProm.then((res)=>setTransactions(res.data)).catch(res=>console.log(res))
	},[])


	// console.log(transactions)
	// console.log(typeof(transactions))

	return(<GlobalStyles>
		<Layout>
			<section>
				<h2>Olá, {name} <img src={exitIcon} onClick={logOut}/></h2> 
				{(transactions.transactions && Number(transactions.balance)!==0)?	
				<Registros>
					<Lista>
						{transactions.transactions.map((elem, i)=>
							<li key={i}>
								<Date>
									{elem.date}
								</Date>
								<Transaction>
									<Note>
										{elem.note}
									</Note>
									<Ammount type={elem.type}>
										{elem.ammount}
									</Ammount>
								</Transaction>
							</li>
						)}
					</Lista>
					<Saldo>
						<p>
							SALDO
						</p>
						<Ammount type={transactions.balanceType}>{transactions.balance}</Ammount>
					</Saldo>
				</Registros>
				:
				<RegistrosVazio>
					<p>Não há registros de entrada ou saída</p>
				</RegistrosVazio>
				}
				
				<ButtonsAlign>
					<button onClick={()=>nav("/nova-entrada")}>
						<ion-icon name="add-circle-outline"></ion-icon>
						<p>Nova<br/>entrada</p>
					</button>
					<PaddingBtns/>
					<button onClick={()=>nav("/nova-saida")}>
						<ion-icon name="remove-circle-outline"></ion-icon>
						<p>Nova<br/>saída</p>
					</button>
				</ButtonsAlign>
			</section>
		</Layout>
	</GlobalStyles>)
}


const ButtonsAlign = styled.div`
	display: flex;
	justify-content: center;
`
const Lista = styled.div`
	overflow-y: auto;
	margin-top: 14px;
    ::-webkit-scrollbar {
        width: 3px;
		background-color: #8a7896;
  		outline: 1px solid slategrey;
		border-radius: 5px;
    }
`

const Saldo = styled.div`
	p{
		font-family: Raleway;
		font-size: 17px;
		font-weight: 700;
		line-height: 20px;
	}
	position: absolute;
	bottom: 10px;

	display: flex;
	width: 95%;
	justify-content: space-between;
`

const Date = styled.div`
	color: #C6C6C6;
`

const Note = styled.div`
	color: black;
`

const Ammount = styled.div`
	color: ${props=>props.type==='received'?'#03AC00':'#C70000'};
	margin-right: 5px;
`

const Transaction = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-left: 12px;
`

const Registros = styled.div`

	position: relative;

	background: white;
	border-radius: 5px;
	width: 100%;
	height: 70vh;
	padding-left: 11px;
	padding-right: 11px;
	padding-bottom: 40px;
	list-style-type: none;
	box-sizing: border-box;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	justify-items: start;

	font-family: Raleway;
	font-size: 16px;
	font-weight: 400;
	line-height: 19px;
	letter-spacing: 0em;
	text-align: left;

	li{
		display: flex;
		justify-content: space-between;
		margin-bottom: 14px;
	}
`

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
	
	ion-icon{
		font-size: 25px;
	}

	img{
		transition: .2s;
		&:hover{
			transform: scale(1.18);
			transition: .2s;
			cursor: pointer;
		}
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
		text-align: center;
	}
`