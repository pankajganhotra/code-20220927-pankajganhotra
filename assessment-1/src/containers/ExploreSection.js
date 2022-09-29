import { ImageContainer } from '../components/custom/ImageContainer';

export const ExploreSection = () => (
    <section className='second_section'>
        <h3>Explore</h3>
        <p>From one-guest rooms to <br />penthouses with pools and gardens</p>
        <div className='second_section gallery'>
            <ImageContainer src="/images/2.jpg" title="Room with one king-size bed" options={["35$", <>28<sub>M<sup>2</sup></sub></>, "Book!"]} />
            <ImageContainer src="/images/3.jpg" title="Penthouse for 8 person" options={["2039$", <>438<sub>M<sup>2</sup></sub></>, "Book!"]} />
        </div>
    </section>
)