import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
function Footer() {

    const data = new Date().getFullYear()
    
    return (
        <div className="flex justify-center bg-indigo-950 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className="text-x1 font-bold">
                    Blog Pessoal Cintia | Copyright: {data}
                </p>
                <p className="text-lg" >
                    Acesse nossas redes sociais
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
export default Footer