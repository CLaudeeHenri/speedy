import styled from 'styled-components'
import ModalAvaliacao from '../../ModalAvaliacao'

const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    width: 400px;
    cursor: pointer;
    img {
        border-radius: 20px 20px 0 0;
        background-color: #171717;
    } figcaption {
        background-color: #171717;
        border-radius: 0 0 20px 20px;
        padding: 10px;
        align-items: center;
        text-align: center;
    } h2 {
        background-color: #171717;
    } p {
        background-color: #171717;
    }
`

const Album = ({ albumNome, albumSelecionado, nome, capa, autor, faixas }) => {
    const Atualizar = (event) => {
        albumSelecionado(faixas)
        albumNome(nome)
    }

    return (
        <>
            <Figure onClick={Atualizar} >
                <img src={capa} alt={nome} />
                <figcaption>
                    <h2>{nome}</h2>
                    <p>{autor}</p>
                </figcaption>
            </Figure>
        </>
    )
}

export default Album