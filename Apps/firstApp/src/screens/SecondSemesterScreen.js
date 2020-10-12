import React from "react";
import { Text, View, StyleSheet, FlatList, Image} from "react-native";

const SecondSemesterScreen = () => {
    const course = [
        {name: "Math 4241: Integral Calculus and Differential Equations", key:'1'},
        {name: "CSE 4203: Discrete Mathematics", key:'2'},
        {name: "CSE 4205: Digital Logic Design", key:'3'},
        {name: "CSE 4206: Digital Logic Design Lab", key:'4'},
        {name: "SWE 4201: Object Oriented Concepts I", key:'5'},
        {name: "SWE 4202: Object Oriented Concepts I Lab", key:'6'},
        {name: "Hum 4247: Accounting", key:'7'},
        {name: "Hum 4242: Arabic II", key:'8'},
        {name: "Hum 4249: Business Psychology and Communications", key:'9'},
    ];
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle2}>Second Semester</Text>
            <FlatList
                data = {course}
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
            fontSize: 20,
            color: "blue",
            marginVertical :10,
        },
        textStyle2: {
            fontSize: 25,
            color : "black",
            alignSelf: "center",
        },
    }
);

export default SecondSemesterScreen;