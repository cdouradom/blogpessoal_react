import { useNavigate } from "react-router-dom";
import CardTema from "../cardtema/CardTema"
import { useContext, useEffect, useState } from "react";
import type Tema from "../../../models/Tema";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import { ToastAlert } from "../../../utils/ToastAlert";

function ListaTemas() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const [temas, setTemas] = useState<Tema[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === ''){
            ToastAlert('Você precisa estar logado!', 'info');
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTemas()
    }, [temas.length])

    async function buscarTemas(){
        try{

            setIsLoading(true);

            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })

        }catch(error: any){
            if(error.toString().includes('401')){
                handleLogout();
            }
        }finally{
            setIsLoading(false);
        }
    }

    return (
        <>
            {
                isLoading && (
                    <div className="flex justify-center w-full my-8">
                        <SyncLoader
                            color="#c9747c"
                            size={24}
                        />
                    </div>
                )
            }

            <div className="flex justify-center w-full px-4 my-4 bg-rose-50">
                <div className="container flex flex-col bg-rose-50">

                    {
                       (!isLoading && temas.length === 0) &&(
                            <span className="text-3xl text-center my-8 text-rose-900">
                                Nenhum Tema foi encontrado!
                            </span>
                       )
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            {
                                temas.map((tema) => (
                                    <CardTema key={tema.id} tema={tema}/>
                                ) )
                            }
                            
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaTemas;