import DestinationSlider from "../Helper/DestinationSlider"
import SectionHeading from "../Helper/SectionHeading"

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
        {/* Section Heading */}
      <SectionHeading heading="Exploring Popular Destinations" subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ipsam, laborum aliquid quae cum omnis adipisci fugit sapiente nam odio, praesentium libero. Eaque repudiandae excepturi deleniti pariatur iusto ea."/>
        {/* Section Content */}
        <div className="mt-14 w-[85%] mx-auto">
            <DestinationSlider/>
        </div>
    </div>
  )
}

export default Destination
