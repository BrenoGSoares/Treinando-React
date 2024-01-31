import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, Option, ErrorSignal } from './styles'


export default function Home() {
    const [produtos, setProdutos] = useState([])
    const [mostrarErro, setMostrarErro] = useState(false)
    const inputRef = useRef()

    const cliqueiNoBotao = () => {
        if (inputRef.current.value == '') {
            setMostrarErro(true)
        } else {
            setProdutos([{ id: v4(), nome: inputRef.current.value, isCompleted: false }, ...produtos])
            setMostrarErro(false)
            inputRef.current.value = ''
        }
    }

    const deletarProduto = (id) => {
        setProdutos(produtos.filter(produto => produto.id !== id))
    }

    const checkProduto = (id) => {
        setProdutos(produtos.map(produto =>
            produto.id === id ? { ...produto, isCompleted: !produto.isCompleted } : produto
        ));
    }

    return (
        <>
            <Container >
                {
                    mostrarErro && (
                        <ErrorSignal>O campo não pode ser vazio</ErrorSignal>
                    )}
                <div>
                    <input placeholder="produto..." ref={inputRef} type="text" />
                    <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>
                </div>
                {
                    produtos.slice().reverse().map(produto => (
                        <Product key={produto.id}>
                            <p style={{ textDecoration: produto.isCompleted ? 'line-through' : 'none' }}>{produto.nome}</p>
                            <div>
                                <Option onClick={() => checkProduto(produto.id)}>✅</Option>
                                <Option onClick={() => deletarProduto(produto.id)}>❌</Option>
                            </div>
                        </Product>
                    ))
                }
            </Container >
        </>
    )
}
