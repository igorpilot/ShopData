import React, {useState} from "react";
import Table from "../../components/Table";
import styles from "./InventoryPage.module.css";
import {Button} from "@mui/material";
type ProductType = {
    id?: number;
    category?: string;
    name?: string;
    description?: string;
    brand?: string;
    quantity?: number;
    purchasePrice?: number;
    sellingPrice?: number;
    code?: number
    actions?: ()=>void
}
const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "category", headerName: "Категорія", width: 160 },
    { field: "name", headerName: "Назва", width: 150 },
    { field: "description", headerName: "Опис", width: 150 },
    { field: "brand", headerName: "Бренд", width: 90 },
    { field: "quantity", headerName: "Кількість", width: 90 },
    { field: "purchasePrice", headerName: "Ціна закупки", width: 90 },
    { field: "profitPrice", headerName: "Націнка", width: 90 },
    { field: "sellingPrice", headerName: "Ціна продажу", width: 90 },
    { field: "code", headerName: "Штрих-код", width: 90 },
    { field: "actionsChange",headerName: "Редагувати", width: 150, renderCell: (params:any) => <Button variant={'contained'} color={'primary'} onClick={()=>handleChange(params.row)}>Редагувати</Button>},
    { field: "actionsDelete",headerName: "Видалити", width: 150, renderCell: (params:any) => <Button variant={'contained'} color={'primary'} onClick={()=>handleDelete(params.row)}>Видалити</Button>}

];
const handleChange =(row: ProductType)=>{
    alert(` ${row.name}`)
}
const handleDelete =(row: ProductType)=>{
    alert(` ${row.name}`)
}
type InventoryPageProps = {

}
export const InventoryPage = (props:InventoryPageProps) => {

    const [rows, setRows] = useState([
        { id: 1, name: "Товар 1", brand: "Бренд 1", quantity: 20, purchasePrice: 100, sellingPrice: 150 },
        { id: 2, name: "Товар 2", brand: "Бренд 2", quantity: 15, purchasePrice: 80, sellingPrice: 120 },
    ]);

    return (
        <div className={styles.container}>
            <h1>Склад</h1><button onClick={()=>{}}>Оновити</button>
            <Table columns={columns} rows={rows} />
        </div>
    );
};


