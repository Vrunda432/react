import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {  Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input } from 'reactstrap';

const userTypeOptions = [
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
  { value: "employee", label: "Employee" },
];

export default  function ModalFullscreen({modal,toggle}) {
     const[getpassdata]=useSearchParams()

  return (
    <div>
      
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={2}
    >
      Email
    </Label>
    <Col sm={10}>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="with a placeholder"
        type="email"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="examplePassword"
      sm={2}
    >
      Password
    </Label>
    <Col sm={10}>
      <Input
        id="examplePassword"
        name="password"
        placeholder="password placeholder"
        type="password"
      />
    </Col>
  </FormGroup>
 
 
  <FormGroup row>
   
    <Col sm={10}>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
        This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
      </FormText>
    </Col>
  </FormGroup>
  <FormGroup
    row
    tag="fieldset"
  >
    <legend className="col-form-label col-sm-2">
      Radio Buttons
    </legend>
    <Col sm={10}>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option one is this and that—be sure to include why it‘s great
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option two can be something else and selecting it will deselect option one
        </Label>
      </FormGroup>
      <FormGroup
        check
        disabled
      >
        <Input
          disabled
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option three is disabled
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="checkbox2"
      sm={2}
    >
      Checkbox
    </Label>
    <Col
      sm={{
        size: 10
      }}
    >
      
    </Col>
  </FormGroup>
  <FormGroup
    check
    row
  >
    <Col
      sm={{
        offset: 2,
        size: 10
      }}
    >
      <Button>
        Submit
      </Button>
    </Col>
  </FormGroup>
</Form>
        
        </ModalBody>
        </Modal>
    </div>
  );
}


