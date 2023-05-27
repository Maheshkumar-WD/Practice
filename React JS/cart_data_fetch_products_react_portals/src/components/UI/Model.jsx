import {  Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"


const ViewModal = ({title,isOpen,onClose,element}) => {
    
  return <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {element}
          </ModalBody>            
        </ModalContent>
      </Modal>
    
}

export default ViewModal