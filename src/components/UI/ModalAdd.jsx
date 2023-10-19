import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePlan, getPlan } from '../../store/reducers/planReducer';

const ModalAdd = ({ active, setActive }) => {
    const { plans, selectedData } = useSelector(state => state.plan)
    const dispatch = useDispatch()

    const selectedPlan = plans.filter(item => item.data === selectedData)
    const [value, setValue] = useState({ title: '', text: '' })

    useEffect(() => {
        setValue({
            title: `${selectedPlan.length ? selectedPlan[0].title : ''}`,
            text: `${selectedPlan.length ? selectedPlan[0].text : ''}`
        })
    }, [active])

    const addPlan = () => {
        if (!value.title || !value.text) return alert('Заполните поля')

        const objPlan = {
            title: value.title,
            text: value.text,
            data: selectedData
        }
        dispatch(getPlan(objPlan))
        setValue({ title: '', text: '' })
        setActive(false)
    }
    const deleteData = (selectedData) => {
        dispatch(deletePlan(selectedData))
        setValue({ title: '', text: '' })
        setActive(false)
    }
    return (
        <>
            <div onClick={() => setActive(false)} className={active ? "modal-wrapper" : "modal-wrapper active-modal"}>
            </div>
            <div className={active ? "modal" : "modal active-modal"}>
                <div className="modal-data">
                    <h1>{selectedData}</h1>
                </div>
                <div className="modal-title">
                    <input value={value.title} onChange={e => setValue({ ...value, title: e.target.value })} type='text' placeholder="Title" />
                </div>
                <div className="modal-text">
                    <textarea value={value.text} onChange={e => setValue({ ...value, text: e.target.value })} placeholder='Write down your plans' />
                </div>
                <div className="modal-button">
                    <button onClick={() => addPlan()}>{selectedPlan.length ? 'Save' : 'Add'}</button>
                    {
                        selectedPlan.length !== 0 && <button onClick={() => deleteData(selectedData)}>Delete</button>
                    }
                </div>
            </div>
        </>
    );
}

export default ModalAdd;