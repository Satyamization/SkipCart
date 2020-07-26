import React from "react";
import Carousel from "./Carousel";
import Cards from './Cards';
import ListOfItems from "./ListofItems";


function Home() {


    return (
        <div>
            <Carousel />
            <div className="List-of-items">
            {ListOfItems.map(item=>(
                <Cards title={item.title} description={item.description} image={item.image} key={item.id} />
            ))}
            </div>
            
        </div>
    );
}

export default Home;