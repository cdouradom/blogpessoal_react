import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import CardPostagem from "../cardpostagem/CardPostagem";
import type Postagem from "../../../models/Postagem";
import { ToastAlert } from "../../../utils/ToastAlert";

function ListaPostagens() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [postagens, setPostagens] = useState<Postagem[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            ToastAlert('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()    
    }, [postagens.length])

    async function buscarPostagens() {
        try {

            setIsLoading(true)

            await buscar('/postagens', setPostagens, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <>

            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#c9747c"
                        size={24}
                    />
                </div>
            )}

            <div className="flex bg-rose-50 justify-center w-full my-4">
                <div className="container bg-rose-50 flex flex-col">

                    {(!isLoading && postagens.length === 0) && (
                            <span className="text-3xl bg-rose-50 text-center my-8">
                                Nenhuma Postagem foi encontrada!
                            </span>
                    )}

                    <div className="grid grid-cols-1 bg-rose-50 md:grid-cols-2 
                                    lg:grid-cols-3 gap-4">
                            {
                                postagens.map((postagem) => (
                                    <CardPostagem key={postagem.id} postagem={postagem}/>
                                ))
                            }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaPostagens;