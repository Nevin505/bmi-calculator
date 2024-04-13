const Input = ({onChange,placeholder,value,name,...inputType}) => {
  return (
    <input className="w-full text-black p-2 text-center rounded-md hover:"  name={name} placeholder={placeholder} value={value}  onChange={onChange}  {...inputType}/>
  )
}

export default Input;
