import {Link} from 'react-router-dom';
import Logo from "../../ui/Logo/Logo.jsx";
import Input from "../../ui/Input/Input.jsx";
import Button from "../../ui/Button/Button.jsx";
import './Header.scss'

const headerLinks = [
  {
    label: 'Shop',
    href: '/',
  },
  {
    label: 'Men',
    href: '/',
  },
  {
    label: 'Women',
    href: '/',
  },
  {
    label: 'Combos',
    href: '/',
  },
  {
    label: 'Joggers',
    href: '/',
  },
]

const headerButton = [
  {
    mode: 'gray',
    location: 'header',
    href: '/',
    icon: 'src/assets/icons/heart.svg'
  },
  {
    mode: 'gray',
    location: 'header',
    href: '/',
    icon: 'src/assets/icons/user.svg'
  },
  {
    mode: 'gray',
    location: 'header',
    href: '/',
    icon: 'src/assets/icons/shopping-cart.svg'
  }
]

const Header = () => {
  return (
    <header className="header container">
      <div className="header__inner">
        <Logo/>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {headerLinks.map(({label, href}, index) => (
              <li
                className="header__nav-item"
                key={index}
              >
                <Link
                  to={href}
                  className="header__nav-link"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Input
          className="header__input"
        />

        <ul className="header__buttons">
          {headerButton.map((button, index) => (
            <li
              className="header__button"
              key={index}
            >
              <Button
                mode={button.mode}
                location={button.location}
                href={button.href}
                icon={button.icon}
              />
            </li>
          ))}
        </ul>

      </div>
    </header>
  )
}

export default Header