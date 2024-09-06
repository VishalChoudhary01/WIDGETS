
const Input = ({inputAcceptType,inputType,inputStyle,inputChangeEvent,placeholderText}) => {
  return (
    <input accept={inputAcceptType} type={inputType} className={inputStyle} onChange={inputChangeEvent} placeholder={placeholderText} />
  )
}

export default Input
