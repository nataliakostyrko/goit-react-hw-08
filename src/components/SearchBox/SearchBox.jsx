import { useDispatch} from "react-redux";

import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";



const SearchBox = () => {
 const dispatch = useDispatch();


  return (
    <div className={css.form}>
      <p className={css.textSeach}>Find contact by name:</p>
      <input 
        type="text" 
        onChange={(event) => dispatch(changeFilter(event.target.value))}  />
    </div>
  );
};

export default SearchBox;