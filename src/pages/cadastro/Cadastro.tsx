import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type Usuario from "../../models/Usuario";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlert } from "../../utils/ToastAlert";

function Cadastro() {

  //Objeto responsavl por redirecionar o usuario para uma outra rota
  const navigate = useNavigate();

  //Controlar a exibicao do loader (animacao de carregamento)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Validar a digitacao da senha do usuario
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");

  //Guardar os dados do usuario
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect( () => {
    if(usuario.id !== 0){
      retornar();
    }
  }, [usuario])

  function retornar(){
    navigate("/");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    setIsLoading(true);

    if(confirmarSenha === usuario.senha && usuario.senha.length >= 8 ){

      try{

        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlert('Usuario cadastrado com sucesso!', 'success');

      }catch(error){
        ToastAlert('Erro ao cadastrar o usuario', 'error');

      }

    }else{
      ToastAlert("Dados do usuario inconsistentes! Verifique as informacoes do cadastro.", 'info');
      setUsuario({
        ...usuario,
        senha: ''
      });
      setConfirmarSenha('');
    }

    setIsLoading(false);

  }


  console.log(JSON.stringify(usuario));
  console.log(confirmarSenha);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen
            place-items-center font-bold">
        <div
          className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat
                    w-full min-h-screen bg-cover bg-center"
        ></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3'
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className='text-fuchsia-900 text-5xl'>Cadastrar</h2>
          <div className="flex text-fuchsia-950 flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement> )=> atualizarEstado(e)}
            />
          </div>
          <div className="flex text-fuchsia-950 flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement> )=> atualizarEstado(e)}
            />
          </div>
          <div className="flex text-fuchsia-950 flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement> )=> atualizarEstado(e)}
            />
          </div>
          <div className="flex text-fuchsia-950 flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement> )=> atualizarEstado(e)}
            />
          </div>
          <div className="flex text-fuchsia-950 flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex text-fuchsia-950 justify-around w-full gap-8">
            <button 
                type='reset'
                className='rounded text-white bg-red-400 hover:bg-red-500 w-1/2 py-2'
                onClick={retornar}
             >
                Cancelar
            </button>
            <button 
                type='submit'
                className='rounded text-white bg-fuchsia-950
                           hover:bg-fuchsia-900 w-1/2 py-2
                           flex justify-center'
                >
                  { isLoading ?
                    <ClipLoader
                      color="#ffffff"
                      size={24}
                    /> :
                    <span>Cadastrar</span>
                  } 
            </button>
          </div>
        </form>
      </div>
  )
}

export default Cadastro