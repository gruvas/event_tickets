import React from 'react';

import tickets from '../assets/tickets.json'

const TableTicket = () => {
    return (
        <table className='table_coefficients'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>id_order </th>
                    <th>barcode</th>
                    <th>user_id</th>
                </tr>
            </thead>
            <tbody>
                {
                    tickets.map((element) => (
                        <tr key={'tickets' + element.id}>
                            <td>{element.id}</td>
                            <td>{element.id_order}</td>
                            <td>{element.barcode}</td>
                            <td>{element.user_id}</td>
                        </tr>
                    ))
                }                
            </tbody>
        </table>
    );
}

export default TableTicket;
