import classNames from "classnames";
import './Button.scss'

const Button = (props) => {
  const {
    label,
    mode,
    location,
    href,
    icon,
  } = props

  const title = label ? label : ''
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href }
  const specificProps = isLink ? linkProps : undefined


  const iconComponent = icon && (
    <img
      className="button__icon"
      src={icon}
      alt=''
    />
  )

  return (
    <Component
      className={classNames(
        'button',
        `button-${mode}`,
        `button-${location}`
      )}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {iconComponent}
      {title}
    </Component>
  )
}

export default Button