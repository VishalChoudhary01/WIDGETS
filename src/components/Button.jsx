
const Button = ({buttonDisable,buttonContent,buttonStyle,buttonClickEvent}) => {
  return (
    <button disabled={buttonDisable} className={buttonStyle} onClick={buttonClickEvent}>{buttonContent}</button>
  )
}

export default Button
