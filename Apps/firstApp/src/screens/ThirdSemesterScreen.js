import React from "react";
import { Text, View, StyleSheet, FlatList, Image} from "react-native";

const ThirdSemesterScreen = () => {
    const course = [
        {name: "Math 4341: Linear Algebra", key:'1'},
        {name: "CSE 4303: Data Structures", key:'2'},
        {name: "CSE 4304: Data Structures Lab", key:'3'},
        {name: "CSE 4305: Computer Organization and Architecture", key:'4'},
        {name: "CSE 4307: Database Management System", key:'5'},
        {name: "CSE 4308: Database Management Systems Lab", key:'6'},
        {name: "CSE 4309: Theory of Computing", key:'7'},
        {name: "SWE 4301: Object Oriented Concepts II", key:'8'},
        {name: "SWE 4302: Object Oriented Concepts II Lab", key:'9'},
        {name: "SWE 4304: Software Project Lab I", key:'10'},
    ];
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle2}>Third Semester</Text>
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

export default ThirdSemesterScreen;