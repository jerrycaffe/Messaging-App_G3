// import React from 'react';
// import {Modal, Button, Row, Col, Form} from 'react-bootstrap'

// const AddGroup =(props)=>{


//     return ( <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Create New Group
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//        <div className="container">
//         <Row>
//           <Col sm={6}>
//             <Form onSubmit={props.handleSubmit}>
//               <Form.Group controlId="groupName">
//                 <Form.Label>Group Name</Form.Label>
//                 <Form.Control 
//                   type="text"
//                   name="groupName"
//                   required
//                   placeholder="Enter group name here"
//                 />
//               </Form.Group>
//               <Form.Group controlId="groupDescription">
//                 <Form.Label>Group Description</Form.Label>
//                 <Form.Control 
//                   type="text"
//                   name="groupDescription"
//                   required
//                   placeholder="Abrief description of what the group is meant for"
//                 />
//               </Form.Group>
//               <Form.Group>
//               <Button type="submit">Create Group</Button>
//               </Form.Group>
//             </Form>
//           </Col>
//         </Row>
//        </div>
        
//       </Modal.Body>
//       <Modal.Footer>
       
//         <Button variant="danger" onClick={props.onHide}>Cancel</Button>
//       </Modal.Footer>
//     </Modal>);
//   }

 
// export default AddGroup;