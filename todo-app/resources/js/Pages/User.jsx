import { InertiaLink } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';

const User = ({ todo }) => {
    return (
        <Fragment>
            <div className="main-div">
                <table className="main-table">
                    <thead>
                        <tr>
                            <th colspan="2">Simple To Do App <InertiaLink href="/create" id="btn-new" className="btn btn-primary btn-sm">new</InertiaLink></th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.map((todo) => (
                            <tr>
                                <td width="12%">
                                    <InertiaLink href="/" className="btn btn-primary btn-sm">
                                        done
                                    </InertiaLink>
                                    <InertiaLink href="/" className="btn btn-primary btn-sm">
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