// rating
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { MdRateReview } from "react-icons/md";


type Props = {
  rate:number;
}

const RatingHelper = ({rate}:Props) => {

  function label(rating:number):string{
if(rating > 0 && rating < 0.5) return "Useless"
if(rating > 0.5 && rating < 1) return "Useless+"
if(rating > 1 && rating < 1.5) return "Poor"
if(rating > 1.5 && rating < 2) return "Poor+"
if(rating > 2 && rating < 2.5) return "Ok"
if(rating > 2.5 && rating < 3) return "Ok+"
if(rating > 3 && rating < 3.5) return "Good"
if(rating > 3.5 && rating < 4) return "Good+"
if(rating > 4 && rating < 4.5) return "Excellent"
if(rating > 4.5 && rating <= 5) return "Excellent+"
return "";
}

  return (
    <div className='flex items-start justify-start flex-col mt-1'>
      <p className='text-sm text-amber-500 mt-1 w-full text-center'><span className='font-bold'> <MdRateReview className='inline text-[17px]'/> {rate} </span></p>
      <Rating
        name="text-feedback"
        value={rate}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      <p className='text-sm text-amber-500 mt-1 w-full text-center'><span className='font-bold'>{label(rate)}</span></p>

    </div>
  )
}

export default RatingHelper
