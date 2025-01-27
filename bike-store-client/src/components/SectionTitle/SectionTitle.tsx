
const SectionTitle = ({ heading, subHeading }:{heading:string, subHeading:string }) => {
    return (
        <div className='text-center space-y-5 py-8'>
            <h2 className='md:text-4xl text-3xl text-[#22292f] font-bold '>{heading}</h2>
            <p className='text-base text-gray-500'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;