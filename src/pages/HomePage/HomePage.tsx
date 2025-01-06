import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
    const [stores, setStores] = useState(["Магазин 1", "Магазин 2"]);
    const navigate = useNavigate();

    const handleAddStore = () => {
        const newStore = prompt("Введіть назву магазину:");
        if (newStore) setStores([...stores, newStore]);
    };
    const handleSync = async () => {
        try {
            const result = await window.electron.ipcRenderer.invoke('sync-with-server');
            alert('Синхронізація успішна!');
        } catch (error) {
            alert('Помилка синхронізації.');
        }
    };
    return (
        <div className={styles.container}>
            <h1>Вибір магазину</h1>
            <ul>
                {stores.map((store, index) => (
                    <li key={index} onClick={() => navigate(`/store/${index}`)}>
                        {store}
                    </li>
                ))}
            </ul>
            <button onClick={handleAddStore}>Додати магазин</button>
            <button onClick={handleSync}>Синхронізувати</button>



        </div>
    );
};

export default HomePage;
