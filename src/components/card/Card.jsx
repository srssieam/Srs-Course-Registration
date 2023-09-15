
const Card = ({course}) => {
    console.log(course, 'from card component');
    const {id, img, course_name, course_details, price, credit} = course;
    return (
        <div className="p-5 bg-white shadow-md">
             <img src='' alt="img" />
             <h3>Introduction to C Programming</h3>
             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
    );
};

export default Card;