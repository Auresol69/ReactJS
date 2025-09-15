import React, {useState} from 'react'

function Update_Array_In_State(){

    const [foods, setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood(e){
        const newFood = document.getElementById("foodInput").value;

        setFoods(prevFoods => [...prevFoods, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i !== index));  // _: ignored
        console.log(foods);
    }

    return (<>
            <div>
                <h2></h2>
                <ul>
                    {foods.map(
                        (food,index) =>
                            <li key={index} onClick={() => handleRemoveFood(index)}>
                                {food}
                            </li>
                    )}
                </ul>
                <input type="text" id="foodInput" placeholder='Enter food name'/>
                <button onClick={handleAddFood}>Add Food</button>
            </div>
    </>);
}

export default Update_Array_In_State