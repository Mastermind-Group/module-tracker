import React from 'react'
import Form from './Form'

import './modal.scss'



const Modal = props => {

    return (
        <div
            className='modal'
            style={{ display: props.show ? 'block' : 'none' }}>
            <section className="modal-main">
                <Form
                    setNewRow={props.setNewRow}
                    setShow={props.setShow}
                    show={props.show}
                    editRow={props.editRow}
                />
                <button
                    type="button"
                    onClick={() => {
                        props.setEditRow({
                            bool: false,
                            row: {
                                company: '',
                                position: '',
                                location: '',
                                applied: null,
                                interview: null,
                                offer: null
                            }
                        })
                        props.setShow(!props.show)
                    }}
                    style={{
                        marginTop: '25px',
                        background: '#0B3D91',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '7px',
                        marginBottom: '15px'
                    }}>Close</button>
            </section>
        </div>
    )
}

export default Modal