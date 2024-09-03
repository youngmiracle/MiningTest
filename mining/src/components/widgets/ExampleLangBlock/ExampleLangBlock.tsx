import './exampleLangBlock.css'
import Resource from '../../../types/Resource';

interface ExampleLangBlockProps{
    imageSrc: any,
    onclick?: any
}

const ExampleLangBlock = ({imageSrc, onclick}: ExampleLangBlockProps) => {

    return(
        <section className="nav__blocklang">
            <img src={imageSrc} alt="иконка" className="infNav__img"/>
            <button className="navInf__go" onClick={onclick}>Перейти</button>
        </section>
    )
}

export default ExampleLangBlock;