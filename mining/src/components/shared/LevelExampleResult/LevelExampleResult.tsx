import './levelExampleResult.css'
import { Link } from 'react-router-dom';

interface ButtonLinkProps{
    textLvl: string,
    resultProcent: any,
}

const LevelExampleResult = ({textLvl, resultProcent}: ButtonLinkProps) => {

    return(
        <div className="lvlExampleResult">
            <p className='lvlExampleResult__text'>{textLvl}</p>
            <div className="scaleBlock">
                <div className="scaleBlock__result" style={{width: `${resultProcent}`}}></div>
            </div>
            <p className='lvlExampleResult__text'>{resultProcent}</p>
        </div>
    )
}

export default LevelExampleResult;