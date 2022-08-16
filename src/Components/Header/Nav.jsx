import React from 'react'
import navStyle from './Nav.module.css'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import { Link } from 'react-router-dom'

const categories = [
  {
      id: 1,
      name: 'Remeras',
      path: '/category/remeras',
  },
  {
      id: 2,
      name: 'Camisas',
      path: '/category/camisas',
  },
  {
      id: 3,
      name: 'Gorras',
      path: '/category/gorras',
  },
  {
      id: 4,
      name: 'Billeteras',
      path: '/category/billeteras',
  },
  {
      id: 5,
      name: 'Riñoneras',
      path: '/category/rinoneras',
  },
];

const socialMedia = [
  {
      id: 1,
      name: 'Instagram',
      path: 'http://instagram.com',
  },
  {
      id: 2,
      name: 'Facebook',
      path: 'http://facebook.com',
  },
  {
      id: 3,
      name: 'Youtube',
      path: 'http://youtube.com',
  },
];

const images = [instagram, facebook, youtube];

const Nav = ({ isHeader }) => {

  const navItems = isHeader ? categories : socialMedia;

  return (
    <nav className={ isHeader ? navStyle.nav : navStyle.navFooter }>
        { isHeader && <Link to='/'><h2>Shop</h2></Link>}
        <ul>
            { navItems.map(( navItem ) => (
              <li>
              <img src={ !isHeader && images[navItem.id - 1] } alt="" />
              <Link key={ navItem.id } to={ navItem.path }>
                
                { navItem.name }
                
              </Link>
              </li>
            ))
              
            }
            <li>
              <Link to={'/cart'}>Carrito</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav