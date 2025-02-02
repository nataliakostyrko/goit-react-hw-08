import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectIsError } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <>
      <div className={css.componentsContainer}>
        <div>
          <ContactForm />
        </div>
        <div className={css.searchContainer}>
          <SearchBox />
          <ContactList />
          {isLoading && <h1 className={css.loading}>Loading...</h1>}
          {isError && <h1>Something went wrong!</h1>}
        </div>
      </div>
    </>
  );
};

export default ContactsPage;