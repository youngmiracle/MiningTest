import './buttonLink.css'
import { Link } from 'react-router-dom';

interface ButtonLinkProps{
    to?: any,
    text?: string | number,
    onClick?: any, 
    className: string,
    style?: any
}

const ButtonLink = ({text, style, to, onClick, className}: ButtonLinkProps) => {

    return(
    <>
        <Link className={className} style={style} to={to} onClick={onClick} children={text}></Link>
    </>
    )
}

export default ButtonLink;