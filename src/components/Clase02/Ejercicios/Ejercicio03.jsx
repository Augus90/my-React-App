import { useState } from "react";
import LoggedInterface from "./Ejercicio04/LoggedInterface";

function Loader(){

    const [loading, setLoading] = useState(true);
    const [user] = useState({
        userName: "Augusto",
        email: "augusto.buchino@gmail.com"
    })

    setTimeout(() => {
        setLoading(false)
    }, 3000)

    return (
        <div>
            <h1>{ loading ? 'Cargando...' : <LoggedInterface email={user.email} user={user.userName}/> }</h1>
        </div>
    )
}

export default Loader;