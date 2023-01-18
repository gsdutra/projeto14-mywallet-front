import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Cadastro from './components/Cadastro.js'
import Home from './components/Home.js'
import Main from './components/Main.js'
import NovaEntrada from './components/NovaEntrada.js'
import NovaSaida from './components/NovaSaida.js'

export default function App(props){
	return(<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main/>}/>
				<Route path="/cadastro" element={<Cadastro/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="nova-entrada" element={<NovaEntrada/>}/>
				<Route path="nova-saida" element={<NovaSaida/>}/>
			</Routes>
		</BrowserRouter>
	</>)
}
