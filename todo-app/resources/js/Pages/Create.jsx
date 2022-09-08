import React, { useState, Fragment } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, Link  } from "@inertiajs/inertia-react";
import { MdOutlineCancel } from 'react-icons/md';
import { MdCheckCircleOutline } from 'react-icons/md';


const Create = () => {
    const [task, setTask] = useState("");

    const saveData = (e) => {
        e.preventDefault();
        Inertia.post("/save", {task});
    };

    return (
        <Fragment>
            <div className="main-div">
                <form onSubmit={saveData}>
                    <table className="main-table">
                        <thead>
                            <tr>
                                <th colspan="2">
                                    Add New Task
                                    <button className="btn-button_success" id="btn-new"><MdCheckCircleOutline/></button>
                                    <InertiaLink href="/" className="btn-button_danger"  id="btn-new"><MdOutlineCancel/></InertiaLink>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td> 
                                <textarea name="" id="" cols="30" rows="10" className="form-control" value={task} onChange={(e)=>setTask(e.target.value)} ></textarea>
                              </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </Fragment>
    );
};

export default Create;
