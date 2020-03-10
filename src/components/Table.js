import React, {useState} from "react";
import styled from "styled-components";
import Dialog from "./Modal";


const TableCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(12, auto);
  background-color: #2196F3;
  padding: 10px;
  
`;

const Cell = styled.div`
  background-color: ${props => props.inputColor ||"rgba(255, 255, 255, 1)" };
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
  
`;


export default function Table() {

    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(0);
    const [selecting, setSelecting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    let toggleModal = () => {
        setIsOpen(!isOpen);
    };

    let beginSelection = i => {
        setSelecting(true);
        setStart(i);
        updateSelection(i);
    };

    let endSelection = (i = end) => {
        setSelecting(false);
        updateSelection(i);
        toggleModal();
    };

    let updateSelection = i => {
        if(selecting) {
            setEnd(i);
        }
    };

    let cells = [];
        for(let j = 0; j < 12*4; j++) {
            cells.push(
                <Cell key={j}
                      inputColor={
                          (end <= j && j <= start || (start <= j && j <= end) ? "#adf": "")
                      }
                      onMouseDown={()=>beginSelection(j)}
                      onMouseUp={()=>endSelection(j)}
                      onMouseMove={()=> updateSelection(j)}
                      onClick={toggleModal}
                >
                    {j+1}
                </Cell>
            )
        }

    return (
        <TableCalendar>
            {cells}
            <Dialog onClose={()=> toggleModal()} show={isOpen} >
                Here's some content for the modal
            </Dialog>
        </TableCalendar>
    )
}
