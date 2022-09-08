import { InertiaLink } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';
import { ImBin } from 'react-icons/im';

const User = ({ success, todo }) => {
    return (
        <Fragment>
            <div className="main-div">
                <table className="main-table">
                    <thead>
                        <tr>
                            <th colspan="2">
                                Simple To Do App 
                                <InertiaLink href="/create" id="btn-new" className="btn btn-primary btn-sm">new</InertiaLink>
                                {success && <div className="alert alert-success">{success}</div>}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.map((todo) => (
                            <tr>
                                <td width="110px">
                                    <InertiaLink href={`/delete/${todo.id}`} className="btn btn-danger btn-sm">
                                        <ImBin />
                                    </InertiaLink>
                                    <InertiaLink href={`/edit/${todo.id}`} className="btn btn-primary btn-sm">
                                        edit
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