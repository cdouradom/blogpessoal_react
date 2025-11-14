import { Link } from "react-router-dom"
function Navbar() {

    return (
        <>

        <div className="w-full flex justify-center pt-4
                bg-indigo-950 text-white" >

            <div className="container flex justify-between text-lg mx-8">
                <Link to="/home" className="text-2x1 font-bold uppercase">Blog Pessoal </Link>
               
                <div className="flex gap-4">
                    <div className="hover:underline">Postagens</div>
                    <div className="hover:underline">Temas</div>
                    <div className="hover:underline">Cadastrar temas</div>
                    <div className="hover:underline">Perfil</div>
                    <div className="hover:underline uppercase">Sair</div>
                    
                    
                </div>
            </div>
        </div>
        </>
    
    )
}
export default Navbar