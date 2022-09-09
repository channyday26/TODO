import React, { useState, Fragment, useEffect } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { MdOutlineCancel } from 'react-icons/md';
import { MdCheckCircleOutline } from 'react-icons/md';

const Edit = ({todo}) => {

    const [task, setTask] = useState("");

    useEffect(() =>{
        setTask(todo.task);
    },[]);

    const updateData = (e) => {
        e.preventDefault();
        Inertia.post(`/update/${todo.id}`,{task});
    };

    return (
        <Fragment>
            <div className="main-div">
                <form onSubmit={updateData}>
                    <table className="main-table">
                        <thead>
                            <tr>
                                <th colspan="2">
                                    Edit Task
                                    <button id="btn-new" className="btn-button_success"><MdCheckCircleOutline/></button>
                                    <InertiaLink href="/" id="btn-new" className="btn-button_danger"><MdOutlineCancel/></InertiaLink>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td> 
                                <textarea name="" id="task" cols="30" rows="10" className="form-control" 
                                value={task} 
                                onChange={(e)=>setTask(e.target.value)} ></textarea>
                              </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </Fragment>
    );
};

export default Edit;
