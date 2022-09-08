import React, { useState, Fragment } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

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
                                    <button className="btn btn-primary btn-sm" id="btnNew">Add</button>
                                    <InertiaLink href="/" className="btn btn-danger btn-sm">Cancel</InertiaLink>
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
