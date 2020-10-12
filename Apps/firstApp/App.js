import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FacultyListScreen from "./src/screens/FacultyListScreen";
import SemesterScreen from "./src/screens/SemesterScreen";
import FirstSemesterScreen from "./src/screens/FirstSemesterScreen";
import SecondSemesterScreen from "./src/screens/SecondSemesterScreen";
import ThirdSemesterScreen from "./src/screens/ThirdSemesterScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen}></stack.Screen>
        <stack.Screen name="Profile" component={ProfileScreen}></stack.Screen>
        <stack.Screen name="Faculty List" component={FacultyListScreen}options={{
          headerStyle: {
            backgroundColor: '#e7305b'
          }
        }}></stack.Screen>
        <stack.Screen name="Semesters" component={SemesterScreen}></stack.Screen>
        <stack.Screen name="First Semester" component={FirstSemesterScreen} options={{
          title: 'Course List', headerStyle: {
            backgroundColor: '#e7305b'
          }
        }}></stack.Screen>
        <stack.Screen name="Second Semester" component={SecondSemesterScreen} options={{
          title: 'Course List', headerStyle: {
            backgroundColor: '#e7305b'
          }
        }}></stack.Screen>
        <stack.Screen name="Third Semester" component={ThirdSemesterScreen} options={{
          title: 'Course List', headerStyle: {
            backgroundColor: '#e7305b'
          }
        }}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;