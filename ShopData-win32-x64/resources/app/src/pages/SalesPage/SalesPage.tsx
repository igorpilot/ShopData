import React, { useState } from 'react';

const SalesPage: React.FC = () => {
    const [sales, setSales] = useState<{ productName: string; quantity: number }[]>([]);  // Стейт для продажу товарів

    const handleAddSale = () => {
        // Логіка додавання продажу товару
        setSales([...sales, { productName: 'Товар', quantity: 1 }]);
    };

    return (
        <div>
            <h1>Продажі товарів</h1>
            <button onClick={handleAddSale}>Додати продаж</button>
            {/* Виведення списку продажів */}
            <ul>
                {sales.map((sale, index) => (
                    <li key={index}>{sale.productName} - Кількість: {sale.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default SalesPage;
