import React, {useState} from "react";
import styled from "styled-components";
import Dialog from "./Modal";


const TableCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(10, auto);
  background-color: #2196F3;
  padding: 10px;
  
`;

const Cell = styled.div`
  
  background-color: ${props => props.inputColor ||"rgba(255, 255, 255, 1)" };
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  
`;


export default function Table() {

    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] =useState('rgba(255, 255, 255, 1)');
    let toggleModal = () => {
        setIsOpen(!isOpen);
    };

    let toggleColor = () => {
        setColor('red');
    };

    let toggleColor2 = () => {
        setColor('yellow')
    };

    let cells = [];
    for(let i = 0; i < 20; i++) {
        cells.push(<Cell  onMouseMove={()=> cells.forEach((element, i)=> {
            toggleColor()
        })} onClick={()=> toggleModal()} inputColor={color}  >{i+1}</Cell>)
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
