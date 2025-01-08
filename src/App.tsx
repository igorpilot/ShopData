import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

import StorePage from "./pages/StorePage/StorePage";
import SalesPage from "./pages/SalesPage/SalesPage";
import {NavBar} from "./components/NavBar";
import {InventoryPage} from "./pages/InventoryPage/InventoryPage";
import {ArrivalPage} from "./pages/ArrivalPage/ArrivalPage";
import {Button} from "@mui/material";
import {v1} from "uuid";

const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "delivery", headerName: "Поставщик", width: 60 },
    { field: "numberOfDocument", headerName: "Накладна", width: 60 },
    { field: "date", headerName: "Дата", width: 60 },
    { field: "category", headerName: "Категорія", width: 100 },
    { field: "name", headerName: "Назва", width: 140 },
    { field: "description", headerName: "Опис", width: 150 },
    { field: "brand", headerName: "Бренд", width: 80 },
    { field: "quantity", headerName: "Кількість", width: 80 },
    { field: "purchasePrice", headerName: "Ціна закупки", width: 90 },
    { field: "profitPrice", headerName: "Націнка", width: 90 },
    { field: "sellingPrice", headerName: "Ціна продажу", width: 90 },
    { field: "code", headerName: "Штрих-код", width: 90 },
    { field: "actionsChange",headerName: "Редагувати", width: 120, renderCell: (params:any) => <Button variant={'contained'} color={'primary'} size={'small'} onClick={()=>handleChange(params.row)}>Редагувати</Button>},
    { field: "actionsDelete",headerName: "Видалити", width: 120, renderCell: (params:any) => <Button variant={'contained'} color={'primary'} size={'small'} onClick={()=>handleDelete(params.row)}>Видалити</Button>}
];

const handleChange =(row:any)=>{
    alert(` ${row.name}`)
}
const handleDelete =(row:any)=>{
    alert(` ${row.name}`)
}
const menu:string[] = ["АВТОХІМІЯ", "АКУМУЛЯТОРИ", "ГАЛЬМІВНА РІДИНА", "ГАЛЬМІВНА СИСТЕМА", "ДВІРНИКИ", "ДИСТИЛЬОВАНА ВОДА", "ЕЛЕКТРОЛІТ", "КОВПАКИ", "КОВПАКИ З ЕМБЛЕМАМИ", "УПАКОВКА ОЛІВ", "ОМИВАЧ СКЛА ЗИМОВИЙ", "ОМИВАЧ СКЛА ЛІТНІЙ", "ОСВІЖУВАЧ ПОВІТРЯ", "ОХОЛОДЖУЮЧІ РІДИНИ", "ПРИСАДКИ NANOPROTEC", "СВІЧКИ ЗАПАЛЮВАННЯ", "СИСТЕМА ЗАПАЛЮВАННЯ", "ФІЛЬТРА", "ІНШЕ"]
const supplier:string[] = ["Mannol","Ужгород", "Favorit"]

const App: React.FC = () => {
    const [rowsAll, setRowsAll] = useState([
        { id: v1(),category:"", name: "Товар 1",description:"", brand: "Бренд 1", quantity: 20, purchasePrice: 100, sellingPrice: 150 }
    ])
    const [rowsArrival, setRowsArrival] = useState([{ id: v1(),category:"",  name: "Товар 1",description:"", brand: "Бренд 1", quantity: 20, purchasePrice: 100, sellingPrice: 150 }]);

    return (
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route path="/inventory" element={<InventoryPage rows={rowsAll} columns={columns}/>} />
                    <Route path="/" element={<StorePage />} />
                    <Route path="/arrival" element={<ArrivalPage rowsAll={rowsAll} setRowsAll={setRowsAll} rowsArrival={rowsArrival}  columns={columns} setRowsArrival={setRowsArrival} menu={menu} supplier={supplier}/>} />
                    <Route path="/sales" element={<SalesPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

//yarn git add . && yarn git commit -m "Опис змін" && yarn git push origin main
