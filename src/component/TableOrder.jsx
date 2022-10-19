import React from 'react';

const TableOrder = () => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>event_id</th>
                    <th>event_date</th>
                    <th>ticket_adult_price</th>
                    <th>ticket_adult_quantity</th>
                    <th>ticket_kid_price</th>
                    <th>ticket_kid_quantity</th>
                    <th>ticket_concession_price</th>
                    <th>ticket_concession_quantity</th>
                    <th>equal_price</th>
                    <th>created</th>
                </tr>
            </thead>
            <tbody>
                <tr className='entry'>
                    <td>0</td>
                    <td>003</td>
                    <td>2021-08-21 13:00:00</td>
                    <td>700</td>
                    <td>2</td>
                    <td>450</td>
                    <td>3</td>
                    <td>600</td>
                    <td>4</td>
                    <td>5150</td>
                    <td>2021-01-11 13:22:09</td>
                </tr>
            </tbody>
        </table>
    );
}

export default TableOrder;
