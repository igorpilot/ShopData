import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
// Сторінка продажу товарів
import Header from './components/Header';
import StorePage from "./pages/StorePage/StorePage";
import ArrivalPage from "./pages/ArrivalPage/ArrivalPage";
import SalesPage from "./pages/SalesPage/SalesPage";
import {NavBar} from "./components/NavBar";
import {InventoryPage} from "./pages/InventoryPage/InventoryPage";
  // Заголовок для додатка


const App: React.FC = () => {

    return (
        <Router>
            <div>
                <Header />
                <NavBar/>
                <Routes>
                    <Route path="/inventory" element={<InventoryPage/>} />
                    <Route path="/" element={<StorePage />} /> {/* Головна сторінка */}
                    <Route path="/arrival" element={<ArrivalPage/>} />  {/* Сторінка приходу */}
                    <Route path="/sales" element={<SalesPage />} />  {/* Сторінка продажу */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
