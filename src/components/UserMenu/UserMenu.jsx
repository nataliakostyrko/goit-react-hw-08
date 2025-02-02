import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.UserMenu}>
      <p> {user.name}</p>                 
          <button
              type='button'
              className={css.logoutBtn}
              onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;