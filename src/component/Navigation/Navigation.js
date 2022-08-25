import { NavLink } from 'react-router-dom'
import Icon from "../../assets/icons/Icon"

const Navigation = (props) => {

    const isActiveLink = (data) =>{
        return data.isActive ? `${props.className} active`: props.className ;
    }

    return (
        <NavLink to={props.url} className={isActiveLink}>
            {props.children}
            {props.icon && <Icon icon={props.icon} />}
            {props.text && props.text}
        </NavLink >
    )
}

export default Navigation
