import { useState } from "react"
import "./form.scss"

const form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangeAddress = (event) => {
        setAddress(event.target.value)
    }

    const handleSumbitForm = (event) => {
        event.preventDefault()
        const user = { name, email, address }
        console.log(user)
    }

    return (
        <form className="form" onSubmit={handleSumbitForm} >
            <input type="text" placeholder="Nombre" value={name} onChange={handleChangeName} />
            <input type="text" placeholder="Email" value={email} onChange={handleChangeEmail} />
            <input type="text" placeholder="Address" value={address} onChange={handleChangeAddress} />
            <button type="submit">Enviar</button>
        </form>
    )
}
export default form