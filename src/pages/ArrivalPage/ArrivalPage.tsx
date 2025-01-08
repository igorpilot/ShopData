import React, {useState} from 'react';
import Table from "../../components/Table";
import {Button} from "@mui/material";

import {v1} from "uuid";
import {ArrivalAddPage} from "./ArrivalAddPage";

type ArrivalPageProps = {
    menu:string[]
    supplier:string[]
    columns:any
    rowsArrival:any
    setRowsArrival:any
    rowsAll:any
    setRowsAll:any

}

export const ArrivalPage = (props:ArrivalPageProps) => {
    const [supplierInfo, setSupplierInfo] = useState({
        delivery: "",
        numberOfDocument: "",
        date: "",
    });

    const addNewRow = (newProduct: any) => {debugger
        props.setRowsArrival([
            {
                id: v1(),
                delivery: supplierInfo.delivery,
                numberOfDocument: supplierInfo.numberOfDocument,

                date: supplierInfo.date,
                ...newProduct,
            },
            ...props.rowsArrival,
        ]);

        // Оновлюємо props.rowsAll
        props.setRowsAll((prevRowsAll:any) => {
            const index = prevRowsAll.findIndex((row:any) => row.id === newProduct.id);

            if (index !== -1) {
                // Якщо товар існує, оновлюємо кількість і ціни
                const updatedRows = [...prevRowsAll];
                updatedRows[index] = {
                    ...updatedRows[index],
                    ...newProduct, // Оновлюємо інші дані
                    quantity: updatedRows[index].quantity + parseFloat(newProduct.quantity), // Додаємо кількість
                    purchasePrice: parseFloat(newProduct.purchasePrice), // Замінюємо ціну закупки
                    sellingPrice: parseFloat(newProduct.sellingPrice), // Замінюємо ціну продажу
                };
                return updatedRows;
            } else {
                // Якщо товар не існує, додаємо новий
                return [
                    ...prevRowsAll,
                    {
                        id: v1(),
                        delivery: supplierInfo.delivery,
                        numberOfDocument: supplierInfo.numberOfDocument,
                        date: supplierInfo.date,
                        ...newProduct,
                    },
                ];
            }
        });
    };

    const [active, setActive] = useState<boolean>(false);


    return (
        <div>

            <Button variant={'outlined'} onClick={()=>setActive(true)}>Зробити приход</Button>
            <h1>Прихід товарів</h1>
            {active && <div>
            <ArrivalAddPage rowsAll={props.rowsAll} supplaier={props.supplier} supplierInfo={supplierInfo} setSupplierInfo={setSupplierInfo} addNewRow={addNewRow}  setActive={setActive}  menu={props.menu}/>
        </div>}
            <Table columns={props.columns} rows={props.rowsArrival} />
        </div>
    );
};
