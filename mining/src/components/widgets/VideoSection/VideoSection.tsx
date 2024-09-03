import './videoSection.css'
import Resource from '../../../types/Resource';

const VideoSection = () => {

    return(
        <article className='videoSection'>
            <section className="videoSection__TextBlock">
                <div className="videoSection__container">
                    <h2 className="videoSection__Title">Mining Test</h2>
                    <p className="videoSection__description">Интерактивные тесты по программированию</p>
                </div>
            </section>
            <video muted preload="auto" autoPlay loop className="videoSection__background">
                <source type="video/mp4" src={Resource.videoMainPage}/>
            </video>
        </article>
    )
}

export default VideoSection;