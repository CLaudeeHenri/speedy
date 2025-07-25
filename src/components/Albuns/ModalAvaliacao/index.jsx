import styled from "styled-components"

const Fundo = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
`

const Dialog = styled.dialog`
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    width: 30%;
    padding: 30px 0;
    border: none;
    border-radius: 20px;
`

const ContainerConteudo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Colunas = styled.div`
    display: flex;
    justify-content: space-between ;
`

const PrimeiraColuna = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    p {
        font-size: 18px;
    }
`

const SegundaColuna = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    p {
        font-size: 18px;
    }
`

const Titulo = styled.h2`
    align-items: center;
    text-align: center;
    font-size: 32px;
    padding: 0 0 20px 0;
`

const Subtitulo = styled.h3`
    font-size: 24px;
    padding: 10px 0;
`

const BotaoFechar = styled.button`
    position: absolute;
    font-size: 24px;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
    color: #ccc;
    font-weight: 700;
    transform: scale(1.2, 1);
    cursor: pointer;
`

const ModalAvaliacao = ({ nome, faixas, aoFechar }) => {
    return (
        <>
            {faixas && (
                <Fundo>
                    <Dialog open={true} onClose={aoFechar}>
                        <ContainerConteudo>
                            <Titulo>{nome}</Titulo>
                            <Colunas>
                                <PrimeiraColuna>
                                    <Subtitulo>Musica:</Subtitulo>
                                    {faixas.map((faixa) => <p>{faixa.musica}</p>)}
                                </PrimeiraColuna>
                                <SegundaColuna>
                                    <Subtitulo>Nota:</Subtitulo>
                                    {faixas.map((faixa) => <p>{faixa.nota}</p>)}
                                </SegundaColuna>
                            </Colunas>
                        </ContainerConteudo>
                        <form method="dialog">
                            <BotaoFechar>X</BotaoFechar>
                        </form>
                    </Dialog>
                </Fundo>
            )}
        </>
    )
}

export default ModalAvaliacao