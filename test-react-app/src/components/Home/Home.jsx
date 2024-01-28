import { useRef, useState } from 'react'
import { v4 } from 'uuid'


export default function Home() {
    const [produtos, setProdutos] = useState([])
    const inputRef = useRef()

    const cliqueiNoBotao = () => {
        setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos])
    }

    return (
        <div >
            <h1>Lista de Compras</h1>
            <input placeholder="produto..." ref={inputRef} type="text" />
            <button onClick={cliqueiNoBotao}>Adicionar</button>
            {
                produtos.map(produto => (
                    <div key={produto.id} >{produto.nome}</div>
                ))
            }
        </div>
    )
}
