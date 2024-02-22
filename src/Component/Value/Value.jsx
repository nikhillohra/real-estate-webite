import React, { useState } from 'react'
import { Accordion } from 'react-accessible-accordion';
import {AccordionItem } from 'react-accessible-accordion';
import { AccordionItemHeading } from 'react-accessible-accordion';
import { AccordionItemButton } from 'react-accessible-accordion';
import {AccordionItemPanel} from 'react-accessible-accordion';
import {AccordionItemState} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  return (
    <section className="v-wrapper">

    <div className="paddings innerWidth flexCenter v-container">
  
    {/*Left side*/}  
   <div className="v-left flexColStart">
     <div className="image-container">
      <img alt="BuildingImage" src='./value.png'/>

     </div> 
   </div>

{/* rigth side */}
<div className="v-right flexColStart ">
    <span className='orangeText'>Our Value</span>
    <span className='primaryText'>Value We Give to You</span>
    <span className='secondaryText'>We are committed to delivering exceptional services tailored to your needs. 
    <br/>We firmly believe that a comfortable living environment has the power to enrich your life.</span>

<Accordion className='accordian'
allowMultipleExpanded={false}
preExpanded={[0]}>

{ 
    data.map((item, i)=> {

        const [className, setClassName] = useState(null);
        return (
    <AccordionItem className={`accordian-item ${className}` } key={i} uuid={i}>
        <AccordionItemHeading>
            <AccordionItemButton className='flexCenter accordian-button ab'>

            <AccordionItemState>
                {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
            </AccordionItemState>
                <div className="flexCenter icon">{item.icon}</div>
                <span className="primaryText">{item.heading}</span>

                <div className="felxCenter icon">
                    <MdOutlineArrowDropDown size={20}/>
                </div>
            </AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
        <p className='secondaryText'>{item.detail}</p>
        </AccordionItemPanel>


    </AccordionItem>
)

})
}



</Accordion>



</div>


    </div>


    </section>
  )
}

export default Value
