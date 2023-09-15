import { PiCurrencyDollar } from 'react-icons/Pi';
import { HiOutlineBookOpen } from 'react-icons/Hi';
import PropTypes from 'prop-types';
const Card = ({course, handleSelectBtn}) => {  // step-4) received the function from Card.jsx component
    // console.log(course, 'from card component');
    const {img, course_name, course_details, price, credit} = course;
    return (
        <div className="p-4 bg-white shadow-md flex flex-col justify-between gap-2 rounded-xl">
             <img src={img} alt="img" className='w-full'/>
             <h3 className="font-bold text-lg">{course_name}</h3>
             <p className="text-xs lg:text-sm text-gray-700">{course_details}</p>
             <div className="flex justify-between">
                <p className='flex gap-2 items-center text-gray-700 font-medium text-xs lg:text-base'><span className="text-black text-base lg:text-2xl"><PiCurrencyDollar/></span>Price: {price}</p>
                <p className='flex gap-1 items-center text-gray-700 font-medium text-xs lg:text-base'><span className="text-black text-base lg:text-2xl"><HiOutlineBookOpen/></span>Credit: {credit}hr</p>
             </div>
             <div className="text-center">
                {/* step-5) now when we click the button, it will call the function which is declared in App.jsx component and receive these perameters value */}
                <button onClick={()=>handleSelectBtn(course_name, credit, price)} className="text-center bg-blue-600 text-white font-medium p-2 rounded-lg w-full hover:bg-blue-700">Select</button>
             </div>
        </div>
    );
};

Card.propTypes = {
    course: PropTypes.object,
    handleSelectBtn: PropTypes.func
}
export default Card;