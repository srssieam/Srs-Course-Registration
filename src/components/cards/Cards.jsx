import { useEffect } from "react";
import Card from "../card/Card";
import { useState } from "react";

const Cards = ({handleSelectBtn}) => {              // step-2) here we received the function from App.jsx 
    const [courseInfo, setCourseInfo]= useState([]);

    useEffect(()=>{
        const fetchedData = async()=>{
            const response = await fetch('../../../public/Fake_data.json');
            const cardData = await response.json();
            setCourseInfo(cardData);
        }
        fetchedData()
    },[])
        // console.log(courseInfo, 'fetched data');

    return (
        <div className="md:w-3/4 grid grid-cols-3 gap-6">
            {
                courseInfo.map( course => {
                    return(
                        <Card key={course.id} course={course} handleSelectBtn={handleSelectBtn}></Card>   // step-3) here we again passed the function to Card.jsx
                    )
                })
            }
        </div>
    );
};

export default Cards;