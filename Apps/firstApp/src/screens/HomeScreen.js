import React from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity} from "react-native";
//source = {require('./../../assets/IMG_0999-01.jpeg')}
const HomeScreen = (props) => {//this function returns JSX
    //console.log(props);
    //console.log(require('./../../assets/IMG_0999-01.jpeg'));//returns a pointer that points to the image in the image folder
    return (
    <View>
        <Image
                style={styles.imageStyle}
                source={require("./../../assets/iut.png")} 
        />
        <Text style={styles.textStyle}>Department of CSE</Text>
        <Text style={styles.textStyle}>Programme : SWE</Text>
        <TouchableOpacity
            onPress = {
                function(){
                    console.log("Button pressed!");
                    props.navigation.navigate("Profile");
                }
            }
            >
            <Text style={styles.textStyleProfile}>My Profile</Text>
        </TouchableOpacity>
        <Button
            title = "Semester Wise Course List"
            color="#3EA99F"
            onPress ={
                function(){
                    console.log("Button Pressed!");
                    props.navigation.navigate("Semesters");
                }
            }
        />
        <Button
            title = "List of Faculty Members"
            color="#9400D3"
            onPress ={
                function(){
                    console.log("Button Pressed!");
                    props.navigation.navigate("Faculty List");
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
            color: "black",
            alignSelf: "center",
        },
        textStyleProfile: {
            fontSize: 25,
            color: "blue",
            alignSelf: "center",
        },
        imageStyle: {
            marginTop: 20,
            width: 150,
            height: 250,
            alignSelf: "center",
            marginBottom : 20,
        },
    }
);

export default HomeScreen;