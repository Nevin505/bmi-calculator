const Input = ({Inputtype,onChange,minValue,maxValue,placeholder,value,name}) => {
  return (
    <input className="w-full text-black p-2 text-center rounded-md hover:" type={Inputtype} name={name}  onChange={onChange} min={minValue} max={maxValue} placeholder={placeholder} value={value}/>
  )
}

export default Input;
