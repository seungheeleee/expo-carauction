import React from "react";
import { createStackNavigator } from "react-navigation-stack";



const DefaultScreen = props => {
    return (
        <View>
            <Text>Screen 구조를 위한 SampleScreen</Text>
        </View>
    );
};

const defaultNavigationOptions = {
    headerTintColor: "white",
    headerStyle: {
        backgroundColor: "tomato"
    }
};

const HomeStack = createStackNavigator(
    {
        Home: DefaultScreen,
        VehicleDetail: DefaultScreen
    },
    {
        defaultNavigationOptions
    }
);

HomeStack.navigationOptions = {
    tabBarLabel: "MyCars"
};

export default HomeStack;