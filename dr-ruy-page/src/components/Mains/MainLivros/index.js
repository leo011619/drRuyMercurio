import './style.css'
import livro1 from '../../../assets/l1.jfif'
import livro2 from '../../../assets/l2.jfif'
import livro3 from '../../../assets/l3.jpg'
import livro4 from '../../../assets/l4.jpg'



const MainLivros = () => {
    return (
        <>
            <div className="container_livros">
                <div className="container_livros_livro_l1">
                    <img src={livro1} alt=""></img>
                    <div className="container_livros_livro_l1_descricao">
                    <div className="container_livros_livro_l1_descricao_titulo">
                        <b><p>LIVRO 1</p></b>
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate neque, odio ut, libero rem vero explicabo dolorum vitae non fuga, dicta assumenda corrupti inventore quos deserunt facilis recusandae voluptas.
                    </div>
                </div>
                <div className="container_livros_livro_l2">
                    <img className="livroSemBorda" src={livro2} alt=""></img>
                    <div className="container_livros_livro_l2_descricao">
                    <div className="container_livros_livro_l2_descricao_titulo">
                        <b><p>LIVRO 2</p></b>
                    </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate neque, odio ut, libero rem vero explicabo dolorum vitae non fuga, dicta assumenda corrupti inventore quos deserunt facilis recusandae voluptas.
                    </div>
                </div>
                <div className="container_livros_livro_l3">
                    <img src={livro3} alt=""></img>
                    <div className="container_livros_livro_l3_descricao">
                    <div className="container_livros_livro_l3_descricao_titulo">
                        <b><p>LIVRO 3</p></b>
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate neque, odio ut, libero rem vero explicabo dolorum vitae non fuga, dicta assumenda corrupti inventore quos deserunt facilis recusandae voluptas.
                    </div>
                </div>
                <div className="container_livros_livro_l4">
                    <img src={livro4} alt=""></img>
                    <div className="container_livros_livro_l4_descricao">
                    <div className="container_livros_livro_l4_descricao_titulo">
                        <b><p>LIVRO 4</p></b>
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate neque, odio ut, libero rem vero explicabo dolorum vitae non fuga, dicta assumenda corrupti inventore quos deserunt facilis recusandae voluptas.
                    </div>
                </div>
            </div>

        </>
    )

}

export default MainLivros