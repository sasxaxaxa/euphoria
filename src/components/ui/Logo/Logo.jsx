const title = 'Home'

const Logo = ({href = '/'}) => {
  const logoPath = `src/assets/logo.svg`;

  return (
    <a
      href={href}
      className="logo"
      title={title}
      aria-label={title}
    >
      <img
        src={logoPath}
        alt="Euphoria Logo"
        width={91}
        height={45}
      />
    </a>
  )
}
export default Logo