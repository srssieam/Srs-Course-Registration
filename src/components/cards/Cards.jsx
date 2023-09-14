import Card from "../card/Card";

const Cards = () => {
    return (
        <div className="md:w-3/4 grid grid-cols-3 gap-6">
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
};

export default Cards;