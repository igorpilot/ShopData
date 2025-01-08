import React, {Dispatch, SetStateAction, useState} from "react";
import s from "./ArrivalPage.module.css";
import {Autocomplete, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

type ArrivalAddPageProps = {
    setActive: Dispatch<SetStateAction<boolean>>;

    menu: string[]
    addNewRow: (newProduct: any) => void;
    supplierInfo: any
    setSupplierInfo: any
    supplaier: string[]
    rowsAll: any
}
export const ArrivalAddPage = (props: ArrivalAddPageProps) => {
    const [productData, setProductData] = useState({
        category: "",
        name: "",
        description: "",
        brand: "",
        quantity: "",
        purchasePrice: "",
        profitPrice:"",
        sellingPrice: "",
        code: "",
    });

    const handleFieldChange = (event: any, field: string) => {
        const value = event.target.value;

        // Оновлюємо стан для конкретного поля
        setProductData(prevData => {
            const updatedData = { ...prevData, [field]: value };

            // Якщо змінена ціна закупки або націнка, перераховуємо ціну продажу
            if (field === "purchasePrice" || field === "profitPrice") {
                // Забезпечуємо, щоб значення були числами
                const purchasePrice = parseFloat(updatedData.purchasePrice || '0');
                const profitPrice = parseFloat(updatedData.profitPrice || '0');
                const sellingPrice = purchasePrice + profitPrice;

                // Оновлюємо ціни
                updatedData.sellingPrice = sellingPrice.toFixed(2); // Встановлюємо ціну продажу
            }

            return updatedData;
        });
    };

    const handleSupplierChange = (event: any, field: string) => {
        props.setSupplierInfo({ ...props.supplierInfo, [field]: event.target.value });
    };

    const handleAddProduct = () => {
        props.addNewRow(productData);

        setProductData({
            category: "",
            name: "",
            description: "",
            brand: "",
            quantity: "",
            purchasePrice: "",
            profitPrice:"",
            sellingPrice: "",
            code: "",
        });
    };

    return (
        <div className={s.arrivalAddPage}>
            <div className={s.addHead}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Постачальник</InputLabel>
                    <Select
                        value={props.supplierInfo.delivery}
                        onChange={(event) => handleSupplierChange(event, "delivery")}
                    >
                        {props.supplaier.map((name, index) => (
                            <MenuItem key={index} value={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    value={props.supplierInfo.numberOfDocument}
                    label={'Номер накладної'}
                    onChange={(event) => handleSupplierChange(event, "numberOfDocument")}
                />
                <TextField
                    value={props.supplierInfo.date}
                    label="Дата"
                    onChange={(event) => handleSupplierChange(event, "date")}
                />
            </div>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Категорія</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={productData.category}
                    label="Категорія"
                    onChange={(event) => handleFieldChange(event, "category")}
                >
                    {props.menu.map((category, index) => (
                        <MenuItem value={category} key={index}>
                            {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Autocomplete
                value={productData.name}
                onChange={(event, newValue) => {
                    setProductData({ ...productData, name: newValue || "" });
                }}
                inputValue={productData.name}
                onInputChange={(event, newInputValue) => {
                    setProductData({ ...productData, name: newInputValue });
                }}
                options={props.rowsAll.map((product:any) => product.name)}
                renderInput={(params) => <TextField {...params} label="Назва товару" />}
                freeSolo // Дозволяє вводити нові значення
            />

            <TextField
                value={productData.description}
                label="Опис"
                onChange={(event) => handleFieldChange(event, "description")}
            />
            <TextField
                value={productData.brand}
                label="Бренд"
                onChange={(event) => handleFieldChange(event, "brand")}
            />
            <TextField
                value={productData.quantity}
                label="Кількість"
                onChange={(event) => handleFieldChange(event, "quantity")}
            />
            <TextField
                value={productData.purchasePrice}
                label="Ціна закупки"
                onChange={(event) => handleFieldChange(event, "purchasePrice")}
            />
            <TextField
                value={productData.profitPrice}
                label="Націнка"
                onChange={(event) => handleFieldChange(event, "profitPrice")}
            />
            <TextField
                value={productData.sellingPrice}
                label="Ціна продажу"
                onChange={(event) => handleFieldChange(event, "sellingPrice")}
            />
            <TextField
                value={productData.code}
                label="Штрих-код"
                onChange={(event) => handleFieldChange(event, "code")}
            />

            <Button onClick={handleAddProduct} variant="contained" color="secondary">
                Додати товар
            </Button>

            <Button variant={'contained'} color={'success'} onClick={() => props.setActive(false)}>
                Закінчити
            </Button>
        </div>
    );
};