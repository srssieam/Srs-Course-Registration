import { useEffect } from "react";
import Card from "../card/Card";
import { useState } from "react";

const Cards = () => {
    const [courseInfo, setCourseInfo]= useState([]);

    useEffect(()=>{
        const fetchedData = async()=>{
            const response = await fetch('../../../public/Fake_data.json');
            const cardData = await response.json();
            setCourseInfo(cardData);
        }
        fetchedData()
    },[])
        console.log(courseInfo, 'fetched data');
    return (
        <div className="md:w-3/4 grid grid-cols-3 gap-6">
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
};

export default Cards;