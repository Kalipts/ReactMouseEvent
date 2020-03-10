import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  padding: 50px;
 `;

const Modal = styled.div`
  background-color: #fff;
  border-radius: 5px;
  max-width: 500px;
  min-height: 300px;
  margin: 0 auto;
  padding: 30px;
`;


/**
 * @return {null}
 */

function Dialog(props) {

    if(!props.show) {
        return null;
    }
    return (
        <BackDrop>
            <Modal>
                {props.children}
                <div className="footer">
                    <button onClick={props.onClose}>
                        Close
                    </button>
                </div>
            </Modal>
        </BackDrop>
    )
}

Dialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Dialog;
