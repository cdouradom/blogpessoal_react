import ListaPostagens from "../../components/tema/listatemas/ListaTemas"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"
function Home() {
return (
    <>
        {/*Código do componente por HTML
        // Essa div é o container geral da página */}
        <div className="bg-indigo-900 flex justify-center" >
            {/* Divide a tela em 2 colunas */}
            <div className="container grid grid-cols-1 sm:grid-cols-2 text-white" >
                {/* 1° coluna, da esquerda */}
                <div className="flex flex-col gap-4 items-center justify-center py-4" >
                    <h2 className="text-5xl font-bold"
                    >Seja Bem Vindo(a)!
                    </h2>
                    <p className="text-xl"
                    >♥︎Expresse aqui seus pensamentos e opniões♥︎</p>

                    {/* Guardando lugar para Link/Botão */}
                    <div className="flex justify-around gap-4" >
                        <ModalPostagem />
                    </div>
                </div>

                {/* 2° coluna, da direita */}
                <div className="flex justify-center" >
                    <img
                        src="https://i.imgur.com/fyfri1v.png"
                        alt="Imagem da página Home"
                        className="w-2/3"
                    />
                </div>
            </div>
        </div>

         <ListaPostagens />
    </>
    )
}
export default Home