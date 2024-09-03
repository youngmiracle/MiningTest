import './infoSection.css'
import Resource from '../../../types/Resource';
import ExampleLangBlock from '../ExampleLangBlock/ExampleLangBlock';
 

const InfoSection = () => {

    return(
        <article className="InformationAboutSite">
            <aside className="InformationAboutSiteAside">
                <h2 className="InformationAboutSiteAside__title">Интерактивные тесты по программированию</h2>
                <p className="InformationAboutSiteAside__text">Пройдя тесты на сайте Mining Test, вы сможете выявить уровень знаний, умений, а также ваших навыков в программировании. На этом сайте, вы сможете пройти тесты по таким языкам, как:</p>
                <ul className="InformationAboutSiteAside__langList">
                    <li>C#</li>
                    <li>SQL</li>
                </ul>
            </aside>
            <nav className="InformationAboutSiteNav">
                <img src={Resource.infNavImg} alt="Фотография с кодом" className="InformationAboutSiteNav__imageNav"/>
                <ExampleLangBlock imageSrc={Resource.cSharpWhite}/>
                <ExampleLangBlock imageSrc={Resource.sqlWhite}/>
            </nav>
            <img src={Resource.numberCodeImg} alt=" Фон для блока с информацией" className="InformationAboutSiteNav__phon"></img>
    </article>
    )
}

export default InfoSection;