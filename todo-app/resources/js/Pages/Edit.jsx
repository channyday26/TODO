import React, { useState, Fragment, useEffect } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Edit = ({todo}) => {
    const [tasks, setTask] = useState("");

    useEffect(() =>{
        setTask(todo.task);
    },[]);

    const updateData = (e) => {
        e.preventDefault();
    };

    // console.log({tasks});

    return (
        <Fragment>
            <div className="main-div">
                <form onSubmit={updateData}>
                    <table className="main-table">
                        <thead>
                            <tr>
                                <th colspan="2">
                                    Edit Task
                                    <button className="btn btn-primary btn-sm">Update</button>
                                    <InertiaLink href="/" className="btn btn-danger btn-sm">Cancel</InertiaLink>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td> 
                                {/* <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea> */}
                                <textarea name="" id="" cols="30" rows="10" className="form-control" 
                                value={tasks} 
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
