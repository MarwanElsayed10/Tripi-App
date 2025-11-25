import SectionHeading from "../Helper/SectionHeading"
import WhyUsCard from "../Helper/WhyUsCard"

const WhyUs = () => {
  return (
    <div className="pt-16 pb-24">
      {/* Section Heading */}
      <SectionHeading heading="Why Choosing Us" subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ipsam, laborum aliquid quae cum omnis adipisci fugit sapiente nam odio, praesentium libero. Eaque repudiandae excepturi deleniti pariatur iusto ea."/>
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20 ">
        {/* Card */}
        <div>
            <WhyUsCard image="/images/c1.svg" title="Best Price Guarantee" subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ipsam, laborum aliqui"/>
        </div>
        <div>
            <WhyUsCard image="/images/c2.svg" title="Easy & Quick Booking" subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ipsam, laborum aliqui"/>
        </div>
        <div>
            <WhyUsCard image="/images/c3.svg" title="Customer Care 24/7" subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ipsam, laborum aliqui"/>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
