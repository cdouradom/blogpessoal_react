import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { ClipLoader } from "react-spinners";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlert } from "../../../utils/ToastAlert";

function DeletarTema() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [tema, setTema] = useState<Tema>({} as Tema);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const { id } = useParams<{ id: string }>();

    async function buscarTemaPorId() {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarTemaPorId();
        }
    }, [id]);

    useEffect(() => {
        if (token === '') {
            ToastAlert('Você precisa estar logado.', 'info');
            navigate('/');
        }
    }, [token]);

    function retornar() {
        navigate("/temas");
    }

    async function deletarTema() {
        setIsLoading(true);
        try {
            await deletar(`/temas/${id}`, {
                headers: { Authorization: token }
            });
            ToastAlert('Tema deletado com sucesso.', 'success');
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            } else {
                ToastAlert('Erro ao deletar o tema!', 'error');
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container max-w-lg mx-auto bg-rose-50 p-4 rounded-xl shadow-md">
            <h1 className="text-4xl text-center my-4 text-fuchsia-900">Deletar Tema</h1>
            <p className="text-center font-semibold text-fuchsia-900 mb-4">Você tem certeza de que deseja apagar o tema a seguir?</p>
            <div className='border border-fuchsia-200 bg-white flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-fuchsia-900 text-rose-100 font-bold text-2xl'> Tema</header>
                <p className="p-8 text-3xl text-fuchsia-900 h-full">{tema.descricao}</p>
                <div className="flex">
                    <button className='text-rose-100  bg-rose-600 hover:bg-rose-400 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-rose-100  bg-fuchsia-700 hover:bg-fuchsia-500 flex items-center justify-center' onClick={deletarTema}>
                        {
                            isLoading ?
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

export default DeletarTema