import './mainPage.css'
import Resource from '../../../types/Resource'
import VideoSection from '../../widgets/VideoSection/VideoSection';
import InfoSection from '../../widgets/InfoSection/InfoSection';
import LevelSection from '../../widgets/LevelSection/LevelSection';
import BandSection from '../../shared/BandSection/BandSection';

const MainPage = () => {

    return(
        <main>
            <VideoSection />
            <BandSection text='Информация о сайте'/>
            <InfoSection />
            <LevelSection />
        </main>
    )
}

export default MainPage;