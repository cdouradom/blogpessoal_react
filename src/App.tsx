import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import FormTema from './components/tema/formtema/FormTema'
import ListaTemas from './components/tema/listatemas/ListaTemas'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import DeletarTema from './components/tema/deletartema/DeletarTema'
import ListaPostagem from './components/postagem/listapostagens/ListaPostagens'
import FormPostagem from './components/postagem/formPostagem/FormPostagem'
import DeletarPostagem from './components/postagem/deletarpostagem/DeletarPostagem'
import 'react-toastify/dist/ReactToastify.css';
import Perfil from './pages/perfil/Perfil'
import AtualizarPerfil from './pages/perfil/AtualizarPerfil';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<ToastContainer />
				<Navbar />
				<div className="min-h-[80vh]">
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/home" element={<Home />} />
						<Route path="/cadastro"	element={<Cadastro />}/>
						<Route path="/temas" element={<ListaTemas />} />
						<Route path="/cadastrartema" element={<FormTema />} />
						<Route path="/editartema/:id" element={<FormTema />} />
						<Route path="/deletartema/:id" element={<DeletarTema />} />
						<Route path="/postagens" element={<ListaPostagem/>} />
						<Route path="/cadastrarpostagem" element={<FormPostagem />} />
						<Route path="/editarpostagem/:id" element={<FormPostagem />} />
						<Route path="/deletarpostagem/:id" element={<DeletarPostagem />}/>
						<Route path="/perfil" element={<Perfil />} />
						<Route path="/atualizarusuario" element={<AtualizarPerfil />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App