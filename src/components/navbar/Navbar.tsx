import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
function Navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }

    return (
        <div className="w-full flex justify-center pt-4
                bg-indigo-950 text-white" >

            <div className="container flex justify-between text-lg mx-8">
                <Link to="/home" className="text-2x1 font-bold uppercase">Blog Pessoal </Link>
               
                <div className="flex gap-4">
                    <div className="hover:underline">Postagens</div>
                    <div className="hover:underline">Temas</div>
                    <div className="hover:underline">Cadastrar temas</div>
                    <div className="hover:underline">Perfil</div>
                    <Link to='' onClick={logout} className="hover:underline uppercase">Sair</Link>                    
                    
                </div>
            </div>
        </div>
    
    )
}
export default Navbar