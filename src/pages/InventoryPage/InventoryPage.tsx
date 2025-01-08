import React, {useState} from "react";
import Table from "../../components/Table";
import styles from "./InventoryPage.module.css";




type InventoryPageProps = {
columns:any
    rows:any
}
export const InventoryPage = (props:InventoryPageProps) => {



    return (
        <div className={styles.container}>
            <h1>Склад</h1><button onClick={()=>{}}>Оновити</button>
            <Table columns={props.columns} rows={props.rows} />
        </div>
    );
};


