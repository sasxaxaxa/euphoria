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
    >
      {iconComponent}
      {title}
    </Component>
  )
}

export default Button