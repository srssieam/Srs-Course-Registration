

const Cart = () => {
    return (
        <div className="md:w-1/4 bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-lg font-bold text-blue-600">Credit Hour Remaining 7 hr</h3>
            <hr className="my-4"/>
            <h3 className="font-bold text-xl">Course Name</h3>
            <div className="mt-3 text-gray-700">
                <p>1 Introduction to c programming</p>
            </div>
            <hr className="my-4"/>
            <h4 className="font-medium text-gray-700">Total Credit Hour : 13</h4>
            <hr className="my-4"/>
            <h4 className="font-semibold text-gray-700">Total Price : 48000 USD</h4>
        </div>
    );
};

export default Cart;