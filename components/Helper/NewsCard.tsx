import Image from 'next/image';

type Props = {
    image:string;
    title: string;
    date:string;
}
const NewsCard = ({image , title , date}:Props) => {
  return (
    <div className='h-[60%]'>
      <Image src={image} alt='image' width={300} height={300} className='w-2xl h-48 object-cover rounded-lg hover:scale-110 transition-all duration-200 '/>
      <h1 className='mt-6 text-lg text-gray-950 font-semibold h-[13%] md:h-[30%] w-[80%] hover:text-blue-950 transition-all duration-200 cursor-pointer'>{title}</h1>
      <p className='text-sm text-gray-600 mt-3'>{date}</p>
    </div>
  )
}

export default NewsCard
