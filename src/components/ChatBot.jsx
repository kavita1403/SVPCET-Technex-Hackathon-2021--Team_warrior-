


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot style={{ width: '30%' }} floating={true}
        steps={[
          {
            id: 'xx',
            message: 'Hi! We are here to help you.Your safety is our topmost CONCERN!',
            
            trigger: '1',
          },
          {
            id: '1',
          
             message :'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
           
            message: 'Hi {previousValue}! What is your gender?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', trigger: '5' },
              { value: 'female', label: 'Female', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'How old are you?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: '8',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: '8',
            message: 'Please enter valid Contact Number?',
            // user:true ,
           
            trigger: 'contact',
           
          },
          {
            id: 'contact',
            //message: 'What is your Current Address?',
            user:true ,
            validator: (value) => {
              if (isNaN(value)) {
                return 'Invalid Number.';
              } else if (value.toString().length !== 10) {
                return 'Enter valid No.';
              } 

              return true;
            },
            trigger: '10',
          },
          {
            id: '10',
            message: 'What is your Current Address?',
            
            trigger: 'address',
          },
            
          {
            id: 'address',
            user:true ,
            trigger: '7',
          },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
           // component: <Review />,
           message: ({previousValue, steps}) => {
             console.log(steps);
             return ( 
              `Name: ${steps.name.value}
              Gender :${steps.gender.value}
              Age: ${steps.age.value}
              Contact :${steps.contact.value}
              Address : ${steps.address.value}`
              
             )
           },
           
           // asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'question' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
              { value: 'contact', label: 'Contact', trigger: 'update-contact' },
              { value: 'address', label: 'Address', trigger: 'update-address' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {
            id: 'update-contact',
            update: 'contact',
            trigger: '7',
          },
          {
            id: 'update-address',
            update: 'address',
            trigger: '7',
          },
          {
            id: 'question',
            message: 'What type of crime do you want to report?',
            trigger: 'type-of-crime',
          },
          {
            id: 'type-of-crime',
            options: [
              { value: 'cyber', label: 'Cyber Crime', trigger: 'crime-details' },
              { value: 'molest', label: 'Molestation', trigger: 'crime-details' },
              { value: 'theft', label: 'Theft', trigger: 'crime-details' },
            ],
          },
         
        
         
          {
            id: 'crime-details',
            message: 'Please mention the details of the crime so that we can help accordingly.',
           
            trigger: 'response',
          },
          {
            id: 'response',
        
            user:true ,
            trigger: 'end-message',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully! In case of emergency , please dial 9876543210!',
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;
