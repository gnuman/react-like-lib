import { createElement }  from "../../lib";

/* 
    <ul>
        <li> Need to finish </li>
        <li> Can't finish </li>
    </ul>
*/

const toDos = ["Need to finish", "Can't finish"];

const onItemClick = function(event) {
    alert("onClickCalled");
}

const toDoElements = function() {
    return toDos.map( (todo) => createElement("li", todo, [], 'click', onItemClick));
};

const toDoList = function() {    
    const toDoItems = toDoElements();
    return createElement('ul', null, toDoItems);
}

export default function App() {
    return toDoList();
}
