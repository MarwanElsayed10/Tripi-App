import RatingHelper from "../Helper/RatingHelper"
import ReviewSlider from "../Helper/ReviewSlider"

const Review = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
      <div className="w-[85%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* text content */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration="1300">
            <h1 className="text-2xl font-semibold text-white text-center">
                What our customers are saying about us ?
            </h1>
            <p className="text-sm mt-6 text-gray-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum laudantium et libero sit ratione, consectetur, aliquid ducimus unde neque repudiandae quae architecto ipsa? Nulla sapiente atque a eum quo.</p>
            {/* rating */}
            <div className="flex flex-col items-center justify-center mt-8">
                <p className="text-lg text-white">Overall Rating</p>
                <RatingHelper rate={5}/>
            </div>
        </div>
        {/* slider */}
        <div className="overflow-hidden">
            <ReviewSlider/>
        </div>
      </div>
    </div>
  )
}

export default Review
