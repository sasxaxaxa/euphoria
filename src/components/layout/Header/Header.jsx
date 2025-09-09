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
    icon:
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99486 4.93014C8.49535 3.18262 5.99481 2.71255 4.11602 4.31275C2.23723 5.91295 1.97273 8.5884 3.44815 10.481C4.67486 12.0545 8.38733 15.3732 9.60407 16.4474C9.7402 16.5675 9.80827 16.6276 9.88766 16.6512C9.95695 16.6718 10.0328 16.6718 10.1021 16.6512C10.1815 16.6276 10.2495 16.5675 10.3857 16.4474C11.6024 15.3732 15.3149 12.0545 16.5416 10.481C18.017 8.5884 17.7848 5.89611 15.8737 4.31275C13.9626 2.72938 11.4944 3.18262 9.99486 4.93014Z" stroke="#807D7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
  },
  {
    mode: 'gray',
    location: 'header',
    href: '/',
    icon:
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99992 11.6667C12.3011 11.6667 14.1666 9.8012 14.1666 7.50001C14.1666 5.19882 12.3011 3.33334 9.99992 3.33334C7.69873 3.33334 5.83325 5.19882 5.83325 7.50001C5.83325 9.8012 7.69873 11.6667 9.99992 11.6667ZM9.99992 11.6667C6.31802 11.6667 3.33325 13.9053 3.33325 16.6667M9.99992 11.6667C13.6818 11.6667 16.6666 13.9053 16.6666 16.6667" stroke="#807D7E" stroke-width="1.5" stroke-linecap="round" />
      </svg>
  },
  {
    mode: 'gray',
    location: 'header',
    href: '/',
    icon:
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3.33334H3.00526C3.85578 3.33334 4.56986 3.97376 4.6621 4.81926L5.3379 11.0141C5.43014 11.8596 6.14422 12.5 6.99474 12.5H14.205C14.9669 12.5 15.6317 11.9834 15.82 11.2452L16.9699 6.73593C17.2387 5.68213 16.4425 4.65742 15.355 4.65742H5.5M5.52063 15.5208H6.14563M5.52063 16.1458H6.14563M14.6873 15.5208H15.3123M14.6873 16.1458H15.3123M6.66667 15.8333C6.66667 16.2936 6.29357 16.6667 5.83333 16.6667C5.3731 16.6667 5 16.2936 5 15.8333C5 15.3731 5.3731 15 5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2936 15.4602 16.6667 15 16.6667C14.5398 16.6667 14.1667 16.2936 14.1667 15.8333C14.1667 15.3731 14.5398 15 15 15C15.4602 15 15.8333 15.3731 15.8333 15.8333Z" stroke="#807D7E" stroke-width="1.5" stroke-linecap="round" />
      </svg>
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