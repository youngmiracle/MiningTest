import ButtonLink from '../ButtonLink/ButtonLink';
import './levelExampleBlock.css'

interface LevelExampleBlockProps{
    lvl: string,
    to: any
}

const LevelExampleBlock = ({lvl, to}: LevelExampleBlockProps) => {

    return(
        <section className='levelList__exampleLvlBlock'>
            <h3 className='exampleLvlBlock__title'>{lvl}</h3>
            <ButtonLink to={to} text="НАЧАТЬ" className='levelLink'/>
        </section>
    )
}

export default LevelExampleBlock;