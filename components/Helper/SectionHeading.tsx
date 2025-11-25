type Props = {
    heading: string;
    subHeading: string;
}

const SectionHeading = ({heading , subHeading}:Props) => {
  return (
    <div className="w-[85%] mx-auto flex items-center justify-center flex-col">
      <h1 className="text-xl sm:text-3xl text-blue-950 font-bold">{heading}</h1>
      <p className="mt-5 text-gray-700 sm:text-base text-sm font-medium">{subHeading}</p>
    </div>
  )
}

export default SectionHeading
