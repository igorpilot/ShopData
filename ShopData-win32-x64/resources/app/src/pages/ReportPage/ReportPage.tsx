import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import styles from "./ReportPage.module.css";

const { ipcRenderer } = window.require("electron");

const ReportPage: React.FC = () => {
    const [report, setReport] = useState([]);

    useEffect(() => {
        ipcRenderer.invoke("getReport").then(setReport);
    }, []);

    const columns = [
        { field: "name", headerName: "Назва товару", width: 200 },
        { field: "sold", headerName: "Продано", width: 150 },
        { field: "arrived", headerName: "Прийшло", width: 150 },
    ];
    const handleExport = async () => {
        const result = await window.electron.ipcRenderer.invoke('export-to-excel');
        if (result.success) {
            alert(`Експорт успішний: ${result.filePath}`);
        } else {
            alert('Помилка експорту.');
        }
    };
    return (
        <div className={styles.container}>
            <h1>Звіт</h1>
            <Table columns={columns} rows={report} />
            <button onClick={handleExport}>Експортувати в Excel</button>



        </div>
    );
};

export default ReportPage;
