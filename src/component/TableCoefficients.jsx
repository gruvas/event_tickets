import React from 'react';

const TableCoefficients = () => {
    return (
        <table className='table_coefficients'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>type</th>
                    <th>Coefficient</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>0</td>
                    <td>Льготный</td>
                    <td>0.8</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Групповой</td>
                    <td>0.9</td>
                </tr>
            </tbody>
        </table>
    );
}

export default TableCoefficients;
