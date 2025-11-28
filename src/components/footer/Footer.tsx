import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { useContext , type ReactNode } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode
        if (usuario.token !== "") {
            component = (

            <div className="flex justify-center bg-fuchsia-950 text-fuchsia-100">
                <div className="container flex flex-col items-center py-10">
                    <p className="text-x1 font-bold">
                        Blog Pessoal Cintia | Copyright: {data}
                    </p>
                    <p className="text-lg" >
                        Acesse minhas redes sociais  ❤︎
                    </p>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/cintiamdourado" target="_blank" rel="noopener noreferrer">
                            <LinkedinLogoIcon size={48} weight="bold" />
                        </a>

                        <a href="https://www.instagram.com/ciidourado" target="_blank" rel="noopener noreferrer">
                            <InstagramLogoIcon size={48} weight="bold" />
                        </a>

                        <a href="https://github.com/cdourado" target="_blank" rel="noopener noreferrer">
                            <GithubLogoIcon size={48} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}
export default Footer