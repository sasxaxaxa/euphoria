import './Input.scss'

const Input = () => {
  return (
    <div className="input">
      <form
        className="input__form"
        action="/search" method="get">
        <img
          src="src/assets/icons/search.svg"
          width="20px"
          height="20px"
          alt=''
        />
        <input
          className="input__field"
          type="text"
          name="query"
          placeholder="Search"/>
      </form>
    </div>
  )
}

export default Input