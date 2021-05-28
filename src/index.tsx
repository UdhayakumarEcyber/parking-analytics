import { ResponsivePie } from '@nivo/pie'
import React, { useState } from 'react'
import { registerWidget, IContextProvider  } from './uxp';  
import { DataList, WidgetWrapper, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";

import './styles.scss';  
 
const ParkingIcon = 'images/parking-icon.svg';


interface IParkingProps{
    uxpContext?: IContextProvider;
    isActive: string;
} 
 

export const Parkingcar_Widget:React.FunctionComponent<IParkingProps> = (props) =>  {    

    let [toggleFilterValue, setToggleFilterValue] = React.useState<string>("Now"); 

    let [checkedCheckState, setCheckedCheckState] = React.useState<boolean>(true);

    const onChangeCheckbox = (checked: boolean) => {
        setCheckedCheckState(checked)
    } 

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };

//   const Title = () => {
//     const [title, setTitle] = useState("20");
 
//     return <h4 onClick={() => setTitle("100")}>{title}</h4>;
//  } 
 
 
   
    return  <>

    <WidgetWrapper>   

        <div className="parking-analytics_widget">

            <TitleBar icon={ParkingIcon} title={'Parking Analytics'}>

                <div className="day_toggle"> 
                
                <ToggleFilter className="toggle-btn"
                    options={[
                        { label: "Now", value: "Now" },
                        { label: "Day", value: "Day" }, 
                    ]}
                    value={toggleFilterValue}
                    onChange={(value) => { setToggleFilterValue(value) }}
                />

                </div>

            </TitleBar>

       

        {/* <div className="parking-content parking-car-content">   */}

        <div className={`parking-content parking-car-content ${isActive ? 'parking-car-content_toggle': null}`} onClick={toggleClass}>
  
                <div className="parking-lft">

                    <div className="parking-slot"> 

                    {/* <Title /> */}
                        <h4>20</h4>
                        <p>occupied</p> 

                    </div> 


                    <div className="parking-vehicle">
                            <div className="vehicle-icon"></div> 
                    </div> 

                </div>

                <div className="parking-rgt">

                    <div className="parking-slot"> 
                        <h4>120</h4>
                        <p>Available</p> 
                    </div> 

                </div> 

                <div className="toggle-switch example">
                    <FormField inline className="showcase-checkbox" backgroundColor="white"> 
                        <Checkbox
                            onChange={onChangeCheckbox}
                            checked={checkedCheckState}
                            label='View %'
                        />
                    </FormField>
                </div>

                </div>
            </div>
 
    </WidgetWrapper>

    </>

    }  


    
export const Parkingbike_Widget:React.FunctionComponent<IParkingProps> = (props) =>  {   

 
    let [toggleFilterValue, setToggleFilterValue] = React.useState<string>("Now"); 
 
   
     let [checkedCheckState, setCheckedCheckState] = React.useState<boolean>(true);
 
     const onChangeCheckbox = (checked: boolean) => {
         setCheckedCheckState(checked)
     }

     const [isActive, setActive] = useState(false);

     const toggleClass = () => {
       setActive(!isActive);
     };
  
   
    
     return  <>
 
     <WidgetWrapper>  
  
 
         <div className="parking-analytics_widget">
 
         <TitleBar icon={ParkingIcon} title={'Parking Analytics'}>
 
             <div className="day_toggle"> 
             
             <ToggleFilter className="toggle-btn"
                 options={[
                     { label: "Now", value: "Now" },
                     { label: "Day", value: "Day" }, 
                 ]}
                 value={toggleFilterValue}
                 onChange={(value) => { setToggleFilterValue(value) }}
             />
 
             </div>
 
         </TitleBar>
 
        
 
         {/* <div className="parking-content parking-bike-content">*/}

         <div className={`parking-content parking-bike-content ${isActive ? 'parking-bike-content_toggle': null}`} onClick={toggleClass}>
  
                 <div className="parking-lft">
 
                     <div className="parking-slot"> 
 
                     {/* <Title /> */}
                         <h4>11</h4>
                         <p>Available</p> 
 
                     </div> 
 
 
                     <div className="parking-vehicle">
                             <div className="vehicle-icon"></div> 
                     </div> 
 
                 </div>
 
                 <div className="parking-rgt">
 
                     <div className="parking-slot"> 
                         <h4>22</h4>
                         <p>Available</p> 
                     </div> 
 
                 </div> 
 
                 <div className="toggle-switch example">
                     <FormField inline className="showcase-checkbox" backgroundColor="white"> 
                         <Checkbox
                             onChange={onChangeCheckbox}
                             checked={checkedCheckState}
                             label='View %'
                         />
                     </FormField>
                 </div>
 
                 </div>
             </div>
  
     </WidgetWrapper>
 
     </>
 
     } 


/**
 * Register as a Widget
 */
 registerWidget({
    id: "parking-car_widget",
    name: "parking-car Widget",
    widget: Parkingcar_Widget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

registerWidget({
    id: "Parkingbike_Widget TransportWidget",
    name: "Parking-bike Widget",
    widget: Parkingbike_Widget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});