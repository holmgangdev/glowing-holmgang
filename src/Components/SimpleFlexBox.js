import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import logo from '../images/holmganglogo.png';

var logostyle = {
  marginTop : 50,
}

var boxheader = {
  fontFamily : 'Montserrat, sans-serif',
  fontSize : 30,
  marginTop : 425,
}

var boxcontent = {
  fontFamily : 'Open Sans, sans-serif',
  backgroundColor : 'green',
  fontSize : 20,
}

class SimpleFlexBox extends Component {
  render() {
     return (
       <Column flexGrow={1}>
         <Row horizontal='center'>
          <img src={logo} style={logostyle} />
         </Row>
         <Row horizontal='center'>
           <span style={boxheader}>Soon</span>
         </Row>
{/*
         <Row vertical='center'>
           <Column flexGrow={1} horizontal='center'>
             <span style={boxheader}> Rent design. Helt enkelt. </span>
           <span style={boxcontent}> Gi din bedrift en fremtidsrettet makeover allerede i dag! Raskt, rimelig og funksjonelt. </span>
           </Column>

           <Column flexGrow={1} horizontal='center'>
             <span style={boxheader}> Kontakt </span>
           </Column>
         </Row>
       */}

       </Column>
     );
   }
 }

export default SimpleFlexBox;
