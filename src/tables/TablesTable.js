import React from 'react';

const TableTables = props => (
    <div>
        {props.tables.length > 0 ? (
            props.tables.map(table => (
                <div className="card" key={table.id}>
                    <div className="card-header no-border">
                        <div className="dis-flex justify-content-between">
                            <h1 className="card-title">{table.tablename}</h1>
                            <button className="button muted-button">
                            Edit
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Order Code</th>
                                    <th>Order Name</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table.order.length > 0 ? (
                                    table.order.map(order => (
                                        <tr key={order.id}>
                                            <td>{order.order_id}</td>
                                            <td>{order.order_name}</td>
                                            <td>{order.qty}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr></tr>
                                )}
                            </tbody>
                        </table>
                        <div className="dis-flex justify-content-end">
                            <button className="button muted-button">Release</button>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div></div>
        )}
        
    </div>
    
);

export default TableTables;
