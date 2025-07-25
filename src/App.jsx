import styled from "styled-components"
import Albuns from "./components/Albuns"
import EstilosGlobais from "./components/EstilosGlobais"
import ModalAvaliacao from "./components/ModalAvaliacao"
import { useState } from "react"
import albuns from './albuns.json'

const AlbunsContainer = styled.div`
  position: absolute;
  
`

const Titulo = styled.h1`
  align-items: center;
  text-align: center;
  padding: 20px;
  font-size: 64px;
  font-style: italic;
  color: #ccc;
`

function App() {
  const [albumSelecionado, setAlbumSelecionado] = useState(null)
  const [albumNome, setAlbumNome] = useState(null)

  return (
    <>
      <EstilosGlobais />
      <Titulo>SPEEDY</Titulo>
      <AlbunsContainer>
        <Albuns albumNome={nome => setAlbumNome(nome)} albumSelecionado={faixas => setAlbumSelecionado(faixas)} albuns={albuns} />
      </AlbunsContainer>
      <ModalAvaliacao nome={albumNome} faixas={albumSelecionado} aoFechar={() => setAlbumSelecionado(null)} />
    </>
  )
}

export default App
