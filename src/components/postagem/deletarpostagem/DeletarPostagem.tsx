import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Postagem from "../../../models/Postagem"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"
import { ToastAlert } from "../../../utils/ToastAlert";

function DeletarPostagem() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlert('Você precisa estar logado', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarPostagem() {
        setIsLoading(true)

        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlert('Postagem apagada com sucesso', 'success')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                ToastAlert('Erro ao deletar a postagem.', 'error')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/postagens")
    }
    
    return (
        <div className="container max-w-lg mx-auto bg-rose-50 p-4 rounded-xl shadow-md">


            <h1 className='text-4xl text-center my-4 text-fuchsia-900'>Deletar Postagem</h1>

            <p className='text-center font-semibold mb-4 text-fuchsia-950'>
                Você tem certeza de que deseja apagar a postagem a seguir?
            </p>

            <div className='border border-fuchsia-200 bg-white flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-fuchsia-900 text-rose-100 font-bold text-2xl'>
                    Postagem
                </header>
                <div className="p-4">
                    <p className='text-xl text-fuchsia-900'>{postagem.titulo}</p>
                    <p className='text-fuchsia-950'>{postagem.texto}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-rose-100  bg-rose-600 hover:bg-rose-400 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-rose-100  bg-fuchsia-700 hover:bg-fuchsia-500 flex items-center justify-center'
                        onClick={deletarPostagem}>

                        { isLoading ? 
                            <ClipLoader 
                                color="#ffffff" 
                                size={24}
                            /> : 
                            <span>Sim</span>
                        }
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarPostagem;