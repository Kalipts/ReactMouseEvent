import React, {useState} from 'react';
import Dialog from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  let toggleModal = () => {
    setIsOpen(!isOpen);

  };
  return (
    <div className="App">
      <button onClick={()=> toggleModal()}>
        Open the modal
      </button>
      <Dialog onClose={()=> toggleModal()} show={isOpen} >
        Here's some content for the modal
      </Dialog>
    </div>
  )
}

export default App;
