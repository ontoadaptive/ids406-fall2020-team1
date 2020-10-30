 // frontend/src/components/Modal.js

 import React, { Component } from "react";
 import {
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Form,
   FormGroup,
   Input,
   Label
 } from "reactstrap";

 export default class CustomModal extends Component {
   constructor(props) {
     super(props);
     this.state = {
       activeItem: this.props.activeItem
     };
   }
   handleChange = e => {
     let { name, value } = e.target;
     if (e.target.type === "checkbox") {
       value = e.target.checked;
     }
     const activeItem = { ...this.state.activeItem, [name]: value };
     this.setState({ activeItem });
   };
   render() {
     const { toggle, onSave } = this.props;
     return (
       <Modal isOpen={true} toggle={toggle}>
         <ModalHeader toggle={toggle}> Patient Information </ModalHeader>
         <ModalBody>
           <Form>
             <FormGroup>
               <Label for="first_name">First Name</Label>
               <Input
                 type="text"
                 name="first_name"
                 value={this.state.activeItem.first_name}
                 onChange={this.handleChange}
                 placeholder="Enter First Name"
               />
             </FormGroup>
             <FormGroup>
               <Label for="last_name">Last Name</Label>
               <Input
                 type="text"
                 name="last_name"
                 value={this.state.activeItem.last_name}
                 onChange={this.handleChange}
                 placeholder="Enter Last Name"
               />
             </FormGroup>
             <FormGroup check>
               <Label for="completed">
                 <Input
                   type="checkbox"
                   name="completed"
                   checked={this.state.activeItem.completed}
                   onChange={this.handleChange}
                 />
                 Completed
               </Label>
             </FormGroup>
           </Form>
         </ModalBody>
         <ModalFooter>
           <Button color="success" onClick={() => onSave(this.state.activeItem)}>
             Save
           </Button>
         </ModalFooter>
       </Modal>
     );
   }
 }