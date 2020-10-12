import React from "react";
import { Text, View, StyleSheet, FlatList, Image, Button} from "react-native";

const SemesterScreen = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Button
                title = "1st Semester"
                color="#003725"
                onPress ={
                    function(){
                        console.log("Button Pressed!");
                        props.navigation.navigate("First Semester");
                    }
                }
            />
            <Button
                title = "2nd Semester"
                color="#0031b6"
                onPress ={
                    function(){
                        console.log("Button Pressed!");
                        props.navigation.navigate("Second Semester");
                    }
                }
            />
            <Button
                title = "3rd Semester"
                color="#9400D3"
                onPress ={
                    function(){
                        console.log("Button Pressed!");
                        props.navigation.navigate("Third Semester");
                    }
                }
            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        viewStyle: {
            marginStart : 50,
            marginEnd : 50,
            marginTop : 50,
        },
    }
);

export default SemesterScreen;