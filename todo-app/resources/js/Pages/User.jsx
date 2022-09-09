import { InertiaLink } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';
import { BsTrash } from 'react-icons/bs';
import { TbEdit } from 'react-icons/tb';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdDownloadDone } from 'react-icons/md';

const User = ({ success, todo }) => {

    var tableBody = todo.map((todo) => {
        
        var id = todo.id;
        var task = todo.task;
        var status = todo.status;
        var done = "";

        if (status === 'done') {
            var done = "strike";
        } 

        return (
            <tr>
                <td width="70px">
                    <InertiaLink href={`/delete/${id}`} className="btn-button btn-button_danger">
                        <BsTrash />
                    </InertiaLink>
                    <InertiaLink href={`/edit/${id}`} className="btn-button btn-button_primary">
                        <TbEdit />
                    </InertiaLink>
                    <InertiaLink href={`/updateStatus/${id}`} className="btn-button btn-button_success">
                        <MdDownloadDone />
                    </InertiaLink>
                </td>
                <td>
                    <small className={done}>{task}</small>
                </td>
            </tr>
    
        ); 
    });
    
    return (
        <Fragment>
            <div className="main-div">
                <table className="main-table">
                    <thead>
                        <tr>
                            <th colSpan="2">
                                Simple To Do App 
                                <InertiaLink href="/create" id="btn-new" className="btn-button_default"><AiOutlinePlusCircle/></InertiaLink>
                                {success && <div className="alert alert-success">{success}</div>}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default User;