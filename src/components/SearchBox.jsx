import { Input , Button} from "antd"
import { useState } from "react";
const SearchBox = ({handleAddTodo}) =>{
    const [todos, setTodos] = useState(null);

    const handleAdd = () => {
        handleAddTodo({name: todos, done: false});
        setTodos('');
    };
    return (
        <div className="flex justify-between gap-[10rem] items-center">
            <Input size="large" placeholder="Search" value={todos} onChange={(e) => setTodos(e.target.value)} />
            <Button type="primary" size="large" className="w-[140px]" onClick={handleAdd}>Add</Button>
        </div>
    )
}

export {SearchBox} ;