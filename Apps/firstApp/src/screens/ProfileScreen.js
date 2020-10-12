import React from "react";
import { Text, View, StyleSheet, FlatList, Image} from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Image
                style={styles.imageStyle}
                source={require("./../../assets/profile.jpeg")} 
            />
            <Text> </Text>
            <Text style={styles.textStyle}>Name: Md Fuadul Islam</Text>
            <Text style={styles.textStyle}>Student ID: 170042069</Text>
            <Text style={styles.textStyle}>Room no: 501, South Hall of Res.</Text>
            <Text style={styles.textStyle}>Email: fuadulislam@iut-dhaka.edu</Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 20,
            color: "blue",
        },
        imageStyle: {
            marginTop: 20,
            width: 300,
            height: 300,
            alignSelf: "center",
            marginBottom : 20,
        },
    }
);

export default ProfileScreen;