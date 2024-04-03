import { useState } from "react";

import Input from "./components/Input";
import Card from "./components/Card";
 import './App.css'

function App() {

  const [userData,setUserData]=useState({})

  const [bmi,setBMI]=useState();

  const[errorss,setErros]=useState();

  const [toggleCard,setToggleCard]=useState(true);

  const validForm=()=>{
    let newErrors={};
    if(!userData.weight){
      newErrors.weight='Please Enter Weight'
    }
     if(!userData.height){
      newErrors.height='Please Enter Height'
    }
     if(!userData.age){
      newErrors.age="Please Enter Age"
    }  
    if(!userData.gender){
      newErrors.gender='Please Enter A Gender'
    }
    else if(validateAge(userData.age)){
      newErrors.age='Age Must be less than 100'
    }
    setErros(newErrors);
    console.log(newErrors);
    return Object.keys(newErrors).length==0;
  }

  const validateAge=(age)=>{
    if(age>=100){
      return true;
    }
  }
  const handleSave = (e) => {

    e.preventDefault(e);
    const valid=validForm();
    if(!valid){
      console.log("Erros");
    }
    else{
      setBMI(userData.weight/((userData.height*userData.height)/10000));
      setToggleCard((prev)=>!prev)
    }
  };


  const handleChange=(e)=>{
     const {name,value}=e.target;
     setUserData({...userData,[name]:value})
  }
  
  const handleClickChange=(value)=>{
      setUserData({...userData,'gender':value})
  }

  const backHandler=()=>{
    setToggleCard((prev)=>!prev);
    setUserData({});

  }
  return (
        <div>
      { toggleCard  && <div className="hero flex items-center justify-center w-screen ">
           <div className="flex flex-col gap-4 p-4 bg-white-600 border-2 border-black w-2/5 text-center rounded-lg text-white  max-[800px]:w-4/5"   style={{backgroundColor:'rgb(9,14,34)'}}>
            <p>BMI Calculator</p>
            <p>Chose Gendar</p>
            <form  onSubmit={handleSave}> 
             <div className="flex gap-4 w-full">
             <Card>
              <button className=" active:bg-slate-600" type='button' style={{color:"black"}} name="gender" placeholder="Male" onClick={()=>handleClickChange('Male')}> Male</button>
             </Card>
             <Card>
              <button className="active:bg-slate-600"   style={{color:"black"}} onClick={()=>handleClickChange('Female')}>Female</button>
             </Card>
             </div>
              <p className="text-red-600 text-sm pt-1" >{errorss?.gender}</p>
    
            <h5>Height</h5>
          { userData.height && <p>{userData.height} cm</p>}
            <Card>
            <div>
            <Input Inputtype="range" minValue={100} maxValue={220} name="height"  value={userData.height}  onChange={handleChange} />
             <p className="text-red-600 text-sm " >{errorss?.height}</p>
            </div>
            </Card>
             <div className="flex gap-4 w-full">
             <Card>
              <div>
              <Input Inputtype="number" placeholder="Enter You Weight" name="weight"   value={userData.weight}  onChange={handleChange} />
              <p className="text-red-600 text-sm pt-1">{errorss?.weight }</p>
              </div>
             </Card>
             <Card>
              <div>
              <Input Inputtype="number" placeholder="Enter You Age" name="age" value={userData.age} onChange={handleChange} />
              <p className="text-red-600 text-sm pt-1">{errorss?.age }</p>
              </div>
             </Card>
             </div>
              <button style={{color:"black",marginBlock:'1rem'}}>Calculate</button>

            </form>

           </div>
         
      </div>
    }
    {!toggleCard &&
     <div className="hero flex items-center justify-center w-screen ">
     <div className="flex flex-col gap-4 p-4 bg-white-600 border-2 border-black w-1/4 text-center rounded-lg text-white  max-[800px]:w-4/5"   style={{backgroundColor:'rgb(9,14,34)'}}>
        {bmi}
        {
          <p>{bmi<18.5?"Underweight":bmi>=18.5 && bmi<25 ?"Healthy weight":bmi>=25 && bmi<=29.9?"Overweight":"Obesity"}</p>
        }
        <button onClick={backHandler} style={{color:"black"}}> Back</button>
    </div>
    </div>
    }
    </div>
  )
}

export default App
