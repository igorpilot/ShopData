import React, {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from 'react';
import Table from "../../components/Table";
import {columns} from "../InventoryPage/InventoryPage";
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import s from "./ArrivalPage.module.css"
import {v1} from "uuid";
type RowsType = {     id: string;     name: any;     brand: any;     quantity: any;     purchasePrice: any;     sellingPrice: any; }
type ArrivalPageProps = {
    menu:string[]
}
export const ArrivalPage = (props:ArrivalPageProps) => {

    const [active, setActive] = useState<boolean>(false);
    const [rows, setRows] = useState([{ id: v1(),category:"", name: "Товар 1",description:"", brand: "Бренд 1", quantity: 20, purchasePrice: 100, sellingPrice: 150 }]);
    const newRows =(category:any, name:any, description:any, brand:any, quantity:any,purchasePrice:any, sellingPrice:any) =>{
        setRows([ {id: v1(),category:category, name: name, description:description,  brand: brand, quantity: quantity, purchasePrice: purchasePrice, sellingPrice: sellingPrice },...rows])
    }
    return (
        <div>

            <Button variant={'outlined'} onClick={()=>setActive(true)}>Зробити приход</Button>
            <h1>Прихід товарів</h1>
            {active && <div>
            <ArrivalAddPage setActive={setActive} newRows={newRows} menu={props.menu}/>
        </div>}
            <Table columns={columns} rows={rows} />
        </div>
    );
};
type ArrivalAddPageProps = {
    setActive: Dispatch<SetStateAction<boolean>>;
    newRows: any;
    menu: string[]
}
const ArrivalAddPage = (props: ArrivalAddPageProps)=>{
    const [age, setAge] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [brand, setBrand] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [purchasePrice, setPurchasePrice] = React.useState('');
    const [sellingPrice, setSellingPrice] = React.useState('');
    const [code, setCode] = React.useState('');


    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };
    const handleTextChange = (event: ChangeEvent<HTMLInputElement| HTMLTextAreaElement>, field:string) => {
        if (field==="name") {
            setName(event.target.value);
        }
        if (field==="category") {
            setCategory(event.target.value);
        }
        if (field==="description") {
            setDescription(event.target.value);
        }
        if (field==="brand") {
            setBrand(event.target.value);
        }
        if (field==="quantity") {
            setQuantity(event.target.value);
        }
        if (field==="purchasePrice") {
            setPurchasePrice(event.target.value);
        }
        if (field==="sellingPrice") {
            setSellingPrice(event.target.value);
        }
        if (field==="code") {
            setCode(event.target.value);
        }
    }
    const saveHandler = ()=>{
        props.setActive(false)
        props.newRows(category, name, description, brand, quantity,purchasePrice, sellingPrice)


    }
    return <div className={s.arrivalAddPage}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Категорія</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Категорія"
                onChange={handleChange}
            >
                {props.menu.map((category, index )=><MenuItem value={index} key={index} >{category}</MenuItem>)}

            </Select>
        </FormControl>
        <TextField value={name} label={'Назва'} onChange={(event)=>handleTextChange(event, 'name')}/>
        <TextField value={description} label={'Опис'} onChange={(event)=>handleTextChange(event, 'description')}/>
        <TextField value={brand} label={'Бренд'} onChange={(event)=>handleTextChange(event, 'brand')}/>
        <TextField value={quantity} label={'Кількість'} onChange={(event)=>handleTextChange(event, 'quantity')}/>
        <TextField value={purchasePrice}  label={'Ціна закупки'} onChange={(event)=>handleTextChange(event, 'purchasePrice')}/>
        <TextField value={sellingPrice} label={'Ціна продажу'} onChange={(event)=>handleTextChange(event, 'sellingPrice')}/>
        <TextField value={code} label={'Штрих-код'} onChange={(event)=>handleTextChange(event, 'code')}/>
        <Button onClick={saveHandler}>Зберегти</Button>
    </div>
}
// [
//     { id: 1, name: "Товар 12", brand: "Бренд 1", quantity: 20, purchasePrice: 100, sellingPrice: 150 },
//     { id: 2, name: "Товар 22", brand: "Бренд 2", quantity: 15, purchasePrice: 80, sellingPrice: 120 },
// ]