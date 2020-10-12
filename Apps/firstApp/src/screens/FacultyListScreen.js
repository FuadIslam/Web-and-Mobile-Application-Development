import React from "react";
import { Text, View, StyleSheet, FlatList, Image} from "react-native";

const FacultyListScreen = () => {
    const faculty = [
        {name: "Mohayeminul Islam", key:'1'},
        {name: "Tajkia Rahman Toma", key:'2'},
        {name: "Bakhtiar Hasan", key:'3'},
        {name: "Tasnim Ahmed", key:'4'},
        {name: "Fardin Saad", key:'5'},
    ];
    return (
        <View style={styles.viewStyle}>
            <FlatList
                data = {faculty}
                renderItem = {
                    function({item}){
                       return (<Text style={styles.textStyle}>{item.key}. {item.name}</Text>);
                    }
                }
            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 25,
            color: "purple",
            marginVertical :5,
        },
    }
);

export default FacultyListScreen;