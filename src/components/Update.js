import React, { useState, useEffect } from 'react'
import '../App.css';
import plus from '../plus.png'
import minus from '../minus.png'

function Update() {
    const [update, setUpdate] = useState(['',])
    const [inprogress, setInprogress] = useState(['',])
    const [topic, setTopic] = useState("")
    const [headDate, setHeadDate] = useState("")
    const [notes, setNotes] = useState(['',])
    const [name, setName] = useState("")
    const [teamName, setTeamName] = useState("")
    const [copy, setCopy] = useState("copy")
    const [updateValue, setUpdateValue] = useState("")

    //Update fields add or remove
    const addInputField = () => {
        setUpdate([...update, '',])
    }
    const handleOnChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...update];
        list[index] = value;
        setUpdate(list);
    }
    const removeInputField = (index) => {
        if (index > 0) {
            const data = [...update]
            data.splice(index, 1)
            setUpdate(data)
        }
    }

    //Inprogress fields add or remove
    const addInprogressField = () => {
        setInprogress([...inprogress, '',])
    }
    const handleOnInprogressChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...inprogress];
        list[index] = value;
        setInprogress(list);
    }
    const removeInprogressField = (index) => {
        if (index > 0) {
            const data = [...inprogress]
            data.splice(index, 1)
            setInprogress(data)
        }
    }

    //Notes fields add or remove
    const addNotesField = () => {
        setNotes([...notes, '',])
    }
    const handleOnNotesChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...notes];
        list[index] = value;
        setNotes(list);
    }

    const removeNotesField = (index) => {
        if (index > 0) {
            const data = [...notes]
            data.splice(index, 1)
            setNotes(data)
        }
    }

    const copyhandle = () => {
        navigator.clipboard.writeText(updateValue);
        setCopy("copied")
        setTimeout(() => {
            setCopy("copy")
        }, 2000);
    }



    var updateData = "";
    if (update[0] !== "") {
        updateData = "List of Completed Tasks:-\n\t"
        update.map((each) => {
            updateData += `${each}\n\t`
        })
    }

    var inprogressUpdate = ""
    if (inprogress[0] !== "") {
        inprogressUpdate = "List of in progress Tasks:-\n\t"
        inprogress.map((each) => {
            inprogressUpdate += `${each}\n\t`
        })
    }

    var notesData = "";
    if (notes[0] !== "") {
        notesData = "Notes : \n\t";
        notes.map((each) => {
            if (each !== "") {
                notesData += `=> ${each}\n\t`
            }
        })
    }

    var thanks = ""
    if (name !== "") {
        thanks = `FYI:\n\tI'm leaving for the day.\n\nThanks,\n${name}`
    }

    var teamLeader = "";
    if (teamName !== "") {
        teamLeader = `Hi ${teamName},`
    } else {
        teamLeader = "Hello,"
    }

    const data = `${teamLeader}\n\nFollowing are the updates for the ${topic ? topic : "<topic>"} as on ${headDate ? headDate : "< Date >"}:\n\n${updateData}\n${inprogressUpdate}\n${notesData}\n${thanks}`

    useEffect(() => {
        setUpdateValue(data)
    }, [data])

    return (
        <>
            <div className='main' style={{ backgroundColor: "aliceblue", width: "100%", height: "50rem" }}>
                <div className="left-side">
                    <div className='updates' style={{ margin: "3rem" }}>
                        <p>Hello <input type="text" className='team-leader' value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder='Your Team Leader Name or Code' />,</p>
                        {/* <p>Following are the updates for learning ReactJs as of 16-Mar-2023:</p> */}
                        <p>For Heading:-</p>
                        <p className='topic-date'>Topic : <input type="text" className='topic-name' value={topic} onChange={(e) => setTopic(e.target.value)} placeholder='Your topics here' /></p>
                        <p className='topic-date'>Date : <input type="date" className='topic-date-field' value={headDate} onChange={(e) => setHeadDate(e.target.value)} /></p>
                        <div id="addRemove">
                            <p>List of Completed Tasks:-</p>
                            {
                                update.map((data, index) => {
                                    return (
                                        <div className='progress-task d-flex align-items-center'>
                                            <div>
                                                <p className='mb-0'>Progress Task {index + 1}: </p>
                                            </div>
                                            <input type="text" className='progress-input' value={data} onChange={(e) => handleOnChange(index, e)} placeholder='' />
                                            <div className='d-flex btn-group'>
                                                <button className="add-btn" onClick={addInputField}><img src={plus} alt="plus" style={{ width: "15px" }} /> </button>
                                                <button className="remove-btn" onClick={() => removeInputField(index)}><img src={minus} alt="minus" style={{ width: "15px" }} /></button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <p>List of in progress Tasks:-</p>
                            {
                                inprogress.map((data, index) => {
                                    return (
                                        <div className='in-progress-task d-flex align-items-center'>
                                            <div>
                                                <p>In-progress Task {index + 1}: </p>
                                            </div>
                                            <input type="text" className='in-progress-input' value={data} onChange={(e) => handleOnInprogressChange(index, e)} placeholder='' />
                                            <div className='d-flex btn-group'>
                                                <button className="add-btn" onClick={addInprogressField}><img src={plus} alt="plus" style={{ width: "15px" }} /> </button>
                                                <button className="remove-btn" onClick={() => removeInprogressField(index)}><img src={minus} alt="minus" style={{ width: "15px" }} /></button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p>List of Notes:-</p>
                        {
                            notes.map((note, index) => {
                                return (
                                    <div className='notes d-flex  align-items-center'>
                                        <div>
                                                <p className='mb-0'>Notes {index + 1}: </p>
                                            </div>
                                        <input type="text" className='notes-input' value={note} onChange={(e) => handleOnNotesChange(index, e)} placeholder='' />
                                        <div className='d-flex btn-group'>
                                            <button className="add-btn" onClick={addNotesField}><img src={plus} alt="plus" style={{ width: "15px" }} /> </button>
                                            <button className="remove-btn" onClick={() => removeNotesField(index)}><img src={minus} alt="minus" style={{ width: "15px" }} /></button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <p>FYI: I'm leaving for the day.</p>
                        <p>Thanks,</p>
                        <p><input type="text" className='name-input' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' /></p>
                    </div>
                </div>
                <div className='right-side'>
                    <button className='copy' onClick={copyhandle}>{copy}</button>
                    <textarea name="" value={updateValue} disabled />
                </div>
            </div>
        </>
    )
}

export default Update