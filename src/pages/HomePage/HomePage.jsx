import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <h1 className={css.title}>Welcome to the home page of your PhoneBook app!</h1>
      <p className={css.subtitle}>
        This site helps you conveniently store and organize your contacts.
      </p>
    </>
  );
};

export default HomePage;