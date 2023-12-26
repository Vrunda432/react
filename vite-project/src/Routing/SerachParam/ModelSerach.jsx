import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {  Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input } from 'reactstrap';

export default  function ModalFullscreen({modal,toggle}) {
     const[getpassdata]=useSearchParams()

  return (
    <div>
      
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
         
        <Form>
  <FormGroup>
    <Label for="Username">
      Name
    </Label>
    <Input
      id="Username"
      name="name"
      value={getpassdata.get("name")}
      placeholder="User name"
      type="text"
      disabled={true}
    />
  </FormGroup>
  <FormGroup>
    <Label for="UserAge">
      User Age
    </Label>
    <Input
      id="userage"
      name="age"
      placeholder="UserAge"
      type="text" 
      value={getpassdata.get("age")}
      disabled={true}
    />
  </FormGroup>

  <FormGroup>
    <Label for="Usercity">
      User city
    </Label>
    <Input 
      id="usercity"
      name="city"
      placeholder="Usercity"
      type="text" 
      value={getpassdata.get("city")}
      disabled={true}
    />
  </FormGroup>
  
  
    
 
 
</Form>
        
        </ModalBody>
        </Modal>
    </div>
  );
}


