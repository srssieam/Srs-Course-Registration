import { PiCurrencyDollar } from 'react-icons/Pi';
import { HiOutlineBookOpen } from 'react-icons/Hi';
const Card = ({course}) => {
    console.log(course, 'from card component');
    const {id, img, course_name, course_details, price, credit} = course;
    return (
        <div className="p-4 bg-white shadow-md flex flex-col justify-between gap-2">
             <img src={img} alt="img" className='w-full'/>
             <h3 className="font-bold text-lg">{course_name}</h3>
             <p className="text-sm text-gray-700">{course_details}</p>
             <div className="flex justify-between">
                <p className='flex gap-2 items-center text-gray-700 font-medium'><span className="text-black text-2xl"><PiCurrencyDollar/></span>Price: {price}</p>
                <p className='flex gap-1 items-center text-gray-700 font-medium'>Credit: {credit}hrs<span className="text-black text-2xl"><HiOutlineBookOpen/></span></p>
             </div>
             <div className="text-center">
                <button className="text-center bg-blue-600 text-white font-medium p-2 rounded-lg w-full">Select</button>
             </div>
        </div>
    );
};

export default Card;