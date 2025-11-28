import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom" 
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlert } from "../../utils/ToastAlert"
 
function Perfil() {
    const navigate = useNavigate()
 
    const { usuario } = useContext(AuthContext)
 
    useEffect(() => {
        if (usuario.token === "") {
            ToastAlert("Você precisa estar logado", "info")
            navigate("/")
        }
    }, [usuario.token])
 
    return (
        <div className="flex justify-center mx-4">
            <div className="container mx-auto my-4 rounded-2xl overflow-hidden 
                bg-rose-50 shadow-xl"> 
                <img
                    className="w-full h-90 object-cover border-b-8 border-fuchsia-300"
                    src="https://i.imgur.com/ZZFAmzo.jpg"
                    alt="Capa do Perfil"
                />
 
                <img
                    className="rounded-full w-56 mx-auto -mt-32 border-8 border-fuchsia-300 relative z-10"
                    src={usuario.foto}
                    alt={`Foto de perfil de ${usuario.nome}`}
                />
 
                <div
                    className="relative -mt-24 h-90 flex flex-col bg-fuchsia-800 text-rose-50 text-2xl items-center justify-center py-10"
                >
                    <p>Nome: {usuario.nome} </p>
                    <p>Email: {usuario.usuario}</p>
                    {/* Botão de editar */}
                    <Link to={`/atualizarusuario`} className=" md:w-auto">
                        <button className="w-full md:w-auto bg-gradient-to-r from-rose-400 to-fuchsia-500 
                            hover:from-fuchsia-500 hover:to-rose-400 text-white font-semibold px-8 py-3 
                            rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                            Editar Perfil
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
 
export default Perfil