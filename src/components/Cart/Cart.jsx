
import PropTypes from 'prop-types';
const Cart = ({selectedCourse, creditHour, remainingHours, coursePrice}) => {   // step-8) here it has received the selected course from App.jsx
    // console.log(selectedCourse, 'hiii')
    return (
        <div className="md:w-1/3 lg:w-1/4 bg-white shadow-md p-6 rounded-xl h-min">
            <h3 className="text-md lg:text-lg font-bold text-blue-600">Credit Hour Remaining {remainingHours} hr</h3>
            <hr className="my-4"/>
            <h3 className="font-bold text-lg lg:text-xl">Course Name</h3>
            <ol className="mt-3 text-gray-700 list-decimal ml-5">
                {
                    selectedCourse.map( (course, idx) =>{
                        return(
                            <li className="text-sm lg:text-base lg:my-2 text-gray-600" key={idx}>{course}</li>
                        )
                    })
                }
            </ol>
            <hr className="my-4"/>
            <h4 className="font-medium text-gray-700">Total Credit Hour : {creditHour}</h4>
            <hr className="my-4"/>
            <h4 className="font-semibold text-gray-700">Total Price : {coursePrice} USD</h4>
        </div>
    );
};
Cart.propTypes = {
    selectedCourse: PropTypes.array,
    creditHour: PropTypes.number,
    remainingHours: PropTypes.number,
    coursePrice: PropTypes.number
}
export default Cart;