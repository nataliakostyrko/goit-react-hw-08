import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import "./App.module.css";
import { selectIsLoading, selectIsError } from "../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";


export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  
  
 return (
    <>
      <h1 className="title">Phonebook</h1>
      <div className="container">
        <div>
          <ContactForm />
        </div>
        <div className="searchContainer">
          <SearchBox />
          <ContactList />
          {isLoading && <h1>Loading...</h1>}
          {isError && <h1>Something went wrong!</h1>}
        </div>
      </div>
    </>
  );
}