import React from 'react';

import RowTable from './RowTable'

import template from '../assets/template.json'


const Table = () => {

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>event_id</th>
                    <th>ticket_type</th>
                    <th>event_date</th>
                    <th>ticket_adult_price</th>
                    <th>ticket_adult_quantity</th>
                    <th>ticket_kid_price</th>
                    <th>ticket_kid_quantity</th>
                    <th>barcode</th>
                    <th>user_id</th>
                    <th>equal_price</th>
                    <th>created</th>
                </tr>
            </thead>
            <tbody>
                {
                    template.map((element) => (
                        <RowTable obj={element} key={'template' + element.id}/>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Table;
