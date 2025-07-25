import styled from 'styled-components'
import Album from './Album'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`


const Albuns = ({ albumNome, albuns, albumSelecionado }) => {
    return (
        <Container>
            {albuns.map((album) => <Album albumNome={albumNome} albumSelecionado={albumSelecionado} faixas={album.faixas} capa={album.capa} nome={album.nome} autor={album.autor} />)}
        </ Container>
    )
}

export default Albuns