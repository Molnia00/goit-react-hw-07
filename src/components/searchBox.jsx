
import { useDispatch } from "react-redux";
import { filterThunk } from "../redux/contactsOps";


function SearchBox(){
    const dispatch = useDispatch()
    return (
        <>
            
            <h3>Find contact by name</h3>
            <input
                type="text"
                placeholder="Search contacts"
                onChange={(event) => dispatch(filterThunk(event.target.value))}/>
               
        </>
    )
}


export default SearchBox;
