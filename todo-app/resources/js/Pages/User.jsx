import { InertiaLink } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';
import { BsTrash } from 'react-icons/bs';
import { TbEdit } from 'react-icons/tb';
import { AiOutlinePlusCircle } from 'react-icons/ai';


const User = ({ success, todo }) => {
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
                        {todo.map((todo) => (
                            <tr>
                                <td width="40px">
                                    <InertiaLink href={`/delete/${todo.id}`} className="btn-button_danger">
                                        <BsTrash />
                                    </InertiaLink>
                                    <InertiaLink href={`/edit/${todo.id}`} className="btn-button_primary">
                                        <TbEdit />
                                    </InertiaLink>
                                </td>
                                <td>
                                    {todo.task}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default User;