import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema'

interface CardTemaProps{
    tema: Tema
}

function CardTema({tema}: CardTemaProps) {
    return (
        <div className='border border-rose-200 rounded-2xl flex flex-col overflow-hidden justify-between bg-rose-50'>
            <header className='py-2 px-6 bg-fuchsia-800 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-rose-100 h-full text-rose-900'>
                {tema.descricao}
            </p>
            
            <div className="flex">
                <Link to={`/editartema/${tema.id}`} 
                className='w-full text-white bg-fuchsia-700
                    hover:bg-fuchsia-500 flex items-center justify-center py-2'>
                    <button> Editar </button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} 
                className='text-white bg-rose-700
                    hover:bg-rose-600 w-full flex items-center justify-center'>
                    <button> Deletar </button>
                </Link>
            </div>

        </div>
    )
}

export default CardTema