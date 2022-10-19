import React from 'react';

const RowTable = (props) => {
    let obj = props.obj 

    return (
        <tr className='entry'>
            <td>{obj.id}</td>
            <td>{obj.event_id}</td>
            <td>{obj.ticket_type}</td>
            <td>{obj.event_date}</td>
            <td>{obj.ticket_adult_price}</td>
            <td>{obj.ticket_adult_quantity}</td>
            <td>{obj.ticket_kid_price}</td>
            <td>{obj.ticket_kid_quantity}</td>
            <td>
                <a href={`https://bitbucket.org/nevatrip/test-task/commits/${obj.barcode}`} rel="nofollow" className="ap-connect-link">
                    {obj.barcode}
                </a>
            </td>
            <td>{obj.user_id}</td>
            <td>{obj.equal_price}</td>
            <td>{obj.created}</td>
        </tr>
    );
}

export default RowTable;
