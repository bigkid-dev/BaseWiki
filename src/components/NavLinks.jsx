import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const links = [
  // { id: 2, url: 'chats', text: 'chat' },
  

];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === 'checkout' || url === 'orders') && !user) return null;
        return (
          <li key={id}>
            <NavLink className='capitalize' to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
