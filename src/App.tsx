import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

import StorePage from "./pages/StorePage/StorePage";
import SalesPage from "./pages/SalesPage/SalesPage";
import {NavBar} from "./components/NavBar";
import {InventoryPage} from "./pages/InventoryPage/InventoryPage";
import {ArrivalPage} from "./pages/ArrivalPage/ArrivalPage";



const App: React.FC = () => {
    const menu:string[] = ["АВТОХІМІЯ", "АКУМУЛЯТОРИ", "ГАЛЬМІВНА РІДИНА", "ГАЛЬМІВНА СИСТЕМА", "ДВІРНИКИ", "ДИСТИЛЬОВАНА ВОДА", "ЕЛЕКТРОЛІТ", "КОВПАКИ", "КОВПАКИ З ЕМБЛЕМАМИ", "УПАКОВКА ОЛІВ", "ОМИВАЧ СКЛА ЗИМОВИЙ", "ОМИВАЧ СКЛА ЛІТНІЙ", "ОСВІЖУВАЧ ПОВІТРЯ", "ОХОЛОДЖУЮЧІ РІДИНИ", "ПРИСАДКИ NANOPROTEC", "СВІЧКИ ЗАПАЛЮВАННЯ", "СИСТЕМА ЗАПАЛЮВАННЯ", "ФІЛЬТРА", "ІНШЕ"]
    return (
        <Router>
            <div>
                <NavBar/><SettingsApplicationsIcon/>
                <Routes>
                    <Route path="/inventory" element={<InventoryPage/>} />
                    <Route path="/" element={<StorePage />} />
                    <Route path="/arrival" element={<ArrivalPage menu={menu}/>} />
                    <Route path="/sales" element={<SalesPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

// git add .; if ($?) { git commit -m "Оновлення сайту" } ; if ($?) { git push origin main } ; if ($?) { yarn deploy }