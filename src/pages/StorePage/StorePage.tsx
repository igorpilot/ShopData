import React from 'react';
import { useNavigate } from 'react-router-dom';  // Для навігації між сторінками

const StorePage: React.FC = () => {
    const navigate = useNavigate();  // Хук для навігації

    return (
        <div>
            <h1>Магазин</h1>
            {/* Кнопки для переходу на сторінки приходу та продажу товарів */}
            <button onClick={() => navigate('/arrival')}>Перейти на сторінку приходу товарів</button>
            <button onClick={() => navigate('/sales')}>Перейти на сторінку продажу товарів</button>
            <button onClick={() => alert("Додати новий товар")}>Додати новий товар</button>
            <button onClick={() => alert("Редагувати товар")}>Редагувати товар</button>
        </div>
    );
};

export default StorePage;
