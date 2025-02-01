import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import {selectNameFilter} from "../../redux/contacts/selectors";


const SearchBox = () => {
 const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.form}>
      <p className={css.textSeach}>Find contact by name:</p>
      <input type="text" value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}  />
    </div>
  );
};

export default SearchBox;