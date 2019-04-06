import React, { useState } from 'react';
import TableTables from './tables/TablesTable';

export default function App(){
    const initialTables = [
        {id: 1, table_id: 't1', tablename: 'Table 1', status: 'Taken', 
            order: [
                {id: 1, order_id: 'E1', order_name: 'Scallops', qty: 2},
                {id: 2, order_id: 'E2', order_name: 'Caesar Salad', qty: 1},
                {id: 3, order_id: 'M1', order_name: 'Pork Sisig', qty: 2},
                {id: 4, order_id: 'D1', order_name: 'Iced Tea', qty: 2}
            ]
        },
        {id: 2, table_id: 't2', tablename: 'Table 2', status: 'Taken', 
            order: [
                {id: 1, order_id: 'E1', order_name: 'Scallops', qty: 5},
                {id: 2, order_id: 'M2', order_name: 'Lechon Kawali', qty: 5},
                {id: 3, order_id: 'D2', order_name: 'Bottomless Iced Tea', qty: 1},
                {id: 4, order_id: 'D3', order_name: 'Oreo Cream Cheese Milk Tea', qty: 5}
            ]
        },
        {id: 3, table_id: 't3', tablename: 'Table 3', status: 'Taken', 
            order: [
                {id: 1, order_id: 'D2', order_name: 'Bottomless Iced Tea', qty: 1},
            ]
        }
    ];

    const tableList = useTableList(initialTables);
    const addTable = useTableList(initialTables);

    return (
        <div className="container">
            <h1>Welcome to React Hook Resto <span role="img">⚛🍱</span></h1>
            <div className="flex-row">
                <div className="flex-large">

                </div>
                <div className="flex-large">
                    <h2>{tableList.tables.length} tables already taken<span role="img">🍻</span></h2>
                    <TableTables tables={tableList.tables}/>
                </div>
            </div>
        </div>
    );

    function useTableList(initialTables){
        
        // 
        const [tables, setTables] = useState(initialTables);
        
        //
        const addTables = function(table){
            table.id = tables.length + 1;
            setTables([...tables, table]);
        }

        return {
            tables,
            addTables
        }

    }

}