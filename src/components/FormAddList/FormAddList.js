import React, {useState} from 'react';
import classes from './FormAddList.module.css'
import Input from "../Input/Input";
import Button from "../Button/Button";
import FirstService from "../../API/First";
import {first_form_first, first_form_second} from "../../constants";

const FormAddList = (props) => {
    const [name, setName] = useState(0)
    const [max, setMax] = useState("")
    async function addList() {
        const res = await FirstService.create(name, Number(max))
        const items = await FirstService.GetFirstList()
        props.setItemList(items)
        props.setModalVisible(false)
    }
    return (
        <div className={classes.container}>
            <header>Введите {first_form_first}</header>
            <Input onChange={(e) => {setName(e.target.value)}}/>
            <header>Введите {first_form_second}</header>
            <Input onChange={(e) => {setMax(e.target.value)}}/>
            <div className={classes.buttonContainer}>
                <Button name={"Создать"} onClick={() => {addList()}}/>
                <Button name={"Закрыть"} onClick={() => {props.setModalVisible(false)}}/>
            </div>
        </div>
    );
};

export default FormAddList;
