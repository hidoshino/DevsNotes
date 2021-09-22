import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

import ListScreen from '../Pages/ListScreean';
import EditScreen from '../Pages/EditNoteScreean';

export default () => (
    <MainStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#222',
        },
        headerTintColor: '#FFF'
    }}>
        <MainStack.Screen name="List" component={ListScreen}/>
        <MainStack.Screen name="EditNote" component={EditScreen}/>
    </MainStack.Navigator>
)