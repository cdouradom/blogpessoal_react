import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlert } from "../../utils/ToastAlert";
function Navbar() {

    const navigate = useNavigate();

    const {usuario, handleLogout} = useContext(AuthContext); 

    function logout() {

        handleLogout()
        ToastAlert('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }

    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <div className="w-full flex justify-center pt-4
                    bg-indigo-950 text-white" >

                <div className="container flex justify-between text-lg mx-8">
                    <Link to="/home" className="text-2x1 font-bold uppercase">Blog Pessoal </Link>
                
                    <div className="flex gap-4">
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className="hover:underline">Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        <Link to='/perfil' className="hover:underline">Perfil</Link>
                        <Link to='' onClick={logout} className="hover:underline uppercase">Sair</Link>
                        
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <>
            {component}
        </>
    )
}
export default Navbar