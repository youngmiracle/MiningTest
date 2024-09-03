import './bandSection.css'

interface BandSectionProps{
    text: string
}

const BandSection = ({text}: BandSectionProps) => {

    return(
        <section className="band">
            <p className="band__title">{text}</p>
        </section>
    )
}

export default BandSection;