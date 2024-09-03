import './levelSection.css'
import Resource from '../../../types/Resource';
import { Link } from 'react-router-dom';
import { LevelExampleLanguage } from '../../../types/LevelExampleLanguage';
import BandSection from '../../shared/BandSection/BandSection';
import LevelExampleBlock from '../../shared/LevelExampleBlock/LevelExampleBlock';
import LevelExampleResult from '../../shared/LevelExampleResult/LevelExampleResult';

const LevelSection = () => {

    return(
        <>
            {LevelExampleLanguage.map((props) => {
                return(
                    <>
                        <BandSection text={props.name}/>
                        <article key={props.id} className={props.className}>
                            <section className='LevelSection__levelList'>
                                <LevelExampleBlock lvl="1 уровень" to={props.linkLvlFirst}/>
                                <LevelExampleBlock lvl="2 уровень" to={props.linkLvlSecond}/>
                                <LevelExampleBlock lvl="3 уровень" to={props.linkLvlThird}/>
                            </section>
                            <section className='LevelSection__informationContent'>
                                <aside className='LevelSection__aboutLangSection'>
                                    <img src={props.languageIcon} alt="Логотип" className='aboutLangSection__logo'/>
                                    <h3 className='aboutLangSection__title'>{props.name} что это?</h3>
                                    <p className='aboutLangSection__description'>{props.description}</p>
                                    <a href={props.linkBrowser} className='aboutLangSection__href'>Читать о {props.name}</a>
                                </aside>
                                <aside className='LevelSection__lvlStatisticsBlock'>
                                    <section className="lvlStatisticsBlock__personalData">
                                        <img src={Resource.avatar} alt="avatar" className='lvlStatisticsBlock__avatar'/>
                                        <p className='lvlStatisticsBlock__name'>Qasdasdasdwerty</p>
                                    </section>
                                    <section className='lvlStatisticsBlock__statisticsSection'>
                                        <LevelExampleResult textLvl='1 уровень' resultProcent="50%"/>
                                        <LevelExampleResult textLvl='2 уровень' resultProcent="70%"/>
                                        <LevelExampleResult textLvl='3 уровень' resultProcent="20%"/>
                                    </section>
                                </aside>
                            </section>
                            <img src={props.imgPhon} alt="Фон" className={props.classNameBackground} />
                        </article>
                    </>
                )
        })}
        </>
    )
}

export default LevelSection;