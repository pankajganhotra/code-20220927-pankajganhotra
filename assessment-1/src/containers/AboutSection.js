import { ImageContainer } from "../components/custom/ImageContainer"

export const AboutSection = () => (

    <section className='third_section'>
        <h3>About</h3>
        <p>Allow us to tell you a short story...</p>
        <div className='third_section gallery' style={{ position: "relative" }}>
            <div>
                <ImageContainer src="/images/4.jpg" title="Chapter I"
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`} />
                <ImageContainer src="/images/6.jpg" title="Chapter III"
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`} />
            </div>
            <div>
                <ImageContainer src="/images/5.jpg" title="Chapter II"
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`} />
                <ImageContainer src="/images/7.jpg" title="Chapter IV"
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`} />
            </div>
        </div>
    </section>
)