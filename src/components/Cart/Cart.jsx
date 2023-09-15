

const Cart = ({selectedCourse, creditHour, coursePrice}) => {   // step-8) here it has received the selected course from App.jsx
    // console.log(selectedCourse, 'hiii')
    return (
        <div className="md:w-1/4 bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-lg font-bold text-blue-600">Credit Hour Remaining 7 hr</h3>
            <hr className="my-4"/>
            <h3 className="font-bold text-xl">Course Name</h3>
            <ol className="mt-3 text-gray-700 list-decimal ml-5">
                {
                    selectedCourse.map( (course, idx) =>{
                        return(
                            <li className="my-2 text-gray-600" key={idx}>{course}</li>
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

export default Cart;