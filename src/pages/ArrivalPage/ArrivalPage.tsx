import React, { useState } from 'react';
import Table from "../../components/Table";
import {columns} from "../InventoryPage/InventoryPage";
type ArrivalPageProps = {

}
const ArrivalPage = (props:ArrivalPageProps) => {

    const [rows, setRows] = useState([
        { id: 1, name: "Товар 12", brand: "Бренд 1", quantity: 20, purchasePrice: 100, sellingPrice: 150 },
        { id: 2, name: "Товар 22", brand: "Бренд 2", quantity: 15, purchasePrice: 80, sellingPrice: 120 },
    ]);
    return (
        <div>
            <h1>Прихід товарів</h1> <button onClick={()=>{}}>Добавити до складу</button>
            <Table columns={columns} rows={rows} />
        </div>
    );
};

export default ArrivalPage;
