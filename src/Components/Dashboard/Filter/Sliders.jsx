
import './sliders.css'
import { useState } from 'react'
import Picker from 'react-mobile-picker'





function renderOptions(dataOptions) {
  return  dataOptions.map((option) => (
    <Picker.Item key={option.id} value={option}>
      {({ selected }) => (
        <div className={`h-[30px] ${selected ? `text-center bg-[#53ACFF] rounded-md px-8 text-[#fff] ` : 'text-neutral-400 px-8 '}`}>{option.name}</div>
      )}
    </Picker.Item>
  ))
}


const dataOptions = [
  {id: 1, name: "one"},
  {id: 2, name: "two"},
  {id: 3, name: "three"},
  {id: 4, name: "fore"},
]





const Sliders = () => {
  const [pickerValue, setPickerValue] = useState({ })


  return ( 
    
    
    <Picker
      className=""
      value={pickerValue}
      onChange={setPickerValue}
      wheelMode="natural"
    >
      <Picker.Column name="title">
      
        {renderOptions(dataOptions)}
        
      </Picker.Column>
      
      
    </Picker>
  
  );
};

export default Sliders













