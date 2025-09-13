import PropTypes from "prop-types";

function List({ category = "Category", items = [] }) {

    const categoryName = category;
    const itemList = items;

    // fruits.sort((a, b) => a.name.localeCompare(b.name));    // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSED ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSED NUMERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.calories}</b></li>);
 
    const listItems = itemList.map(item => <li key={item.id}>{item.name}:&nbsp;<b>{item.calories}</b></li>);

    return (<>
        <h3 className="list-category">{categoryName}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);
}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ // PropTypes.shape() là để xác định kiểu dữ liệu chi tiết cho một đối tượng (object).
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    }))
}

export default List