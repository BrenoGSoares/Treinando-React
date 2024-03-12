import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import { NavBar, NavForm } from "./styles"

const Navbar = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return
        navigate(`/search?q=${search}`)
        setSearch("")
    }


    return (
        <NavBar>
            <h2>
                <Link to='/'><BiCameraMovie />MoviesLib</Link>
            </h2>
            <NavForm onSubmit={handleSubmit}>
                <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </NavForm>
        </NavBar>
    )
}

export default Navbar
