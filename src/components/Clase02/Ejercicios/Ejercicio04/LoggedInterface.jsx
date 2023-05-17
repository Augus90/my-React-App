import './logged-styles.css'
import PropTypes from "prop-types"

function LoggedInterface({user, email}){
    return(
        <div className={"loggedInterface"}>
            <h2 className='loggedInterface-text'>Nombre de Usuario {user}</h2>
            <h2 className='loggedInterface-text'>Email {email}</h2>
        </div>
    )
}

LoggedInterface.prototype = {
    user: PropTypes.string,
    email: PropTypes.string
}

export default LoggedInterface;