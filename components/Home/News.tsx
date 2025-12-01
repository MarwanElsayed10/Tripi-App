import SectionHeading from '../Helper/SectionHeading'
import NewsCard from '../Helper/NewsCard'

const News = () => {
  return (
    <div id='news' className='pt-16 pb-30'>
      {/* section heading */}
      <SectionHeading heading='Exciting Travel News For You' subHeading='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quibusdam ducimus ipsam nihil reiciendis aliquam fugit delectus veritatis rem quaerat maxime, dolorem eos fugiat iure? Beatae officia porro provident illo?'/>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <NewsCard image="/images/n5.jpg" title="Top 10 places to visit in Africa" date="15 December 2025"/>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay={500}>
          <NewsCard image="/images/n6.jpg" title="Top 10 places to visit in Europe" date="22 March 2026"/>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay={700}>
          <NewsCard image="/images/n3.jpg" title="Top 10 places to visit in Australia" date="19 May 2026"/>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay={900}>
          <NewsCard image="/images/n1.jpg" title="Top 10 places to visit in Asia" date="20 April 2026"/>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay={1200}>
          <NewsCard image="/images/n2.jpg" title="Top 10 places to visit in North America" date="7 January 2026"/>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay={1500}>
          <NewsCard image="/images/n7.jpg" title="Top 10 places to visit in South America" date="7 January 2026"/>
        </div>
      </div>
    </div>
  )
}

export default News
