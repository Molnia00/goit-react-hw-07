
import { useDispatch } from "react-redux";
import { searchItems } from "../redux/filtersSlice";
import { selectFilter } from "../redux/contactsSlice";


function SearchBox(){
    const dispatch = useDispatch()
    return (
        <>
            
            <h3>Find contact by name</h3>
            <input
                type="text"
                placeholder="Search contacts"
                onChange={(event) => dispatch(selectFilter(event.target.value))}/>
               
        </>
    )
}


export default SearchBox;
