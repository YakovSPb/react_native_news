import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import {Formik} from 'formik'

import { gStyle } from "../styles/style";
import { IActicle } from "./Main";

type IFormProps = {
    addArticle: (article: any) => void
}

export default function Form(props: IFormProps) {
  return (
    <View>
        <Formik 
        initialValues={{
            name: '',
            anons: '', 
            full: '',
            img: '',
        }}
        onSubmit={(values, action)=>{
            props.addArticle(values)
            action.resetForm()
        }}>
            {(props) => (
                <View>
                    <TextInput style={styles.input} value={props.values.name} placeholder='Введите название' onChangeText={props.handleChange('name')} />
                    <TextInput style={styles.input} multiline value={props.values.anons} placeholder='Введите анонс' onChangeText={props.handleChange('anons')} />
                    <TextInput style={styles.input} multiline value={props.values.full} placeholder='Введите статью' onChangeText={props.handleChange('full')} />
                    <TextInput style={styles.input} value={props.values.img} placeholder='Укажите фото' onChangeText={props.handleChange('img')} />
                    <Button title="Добавить" onPress={props.handleSubmit}/>
                </View>
            )}
        </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5
    }
});
