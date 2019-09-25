import React, { Component } from 'react'
import { FlatList, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const data =
    [
        {
            vin: "abc",
            manufacturer: "Tesla",
            model: "Model 3",
            year: 2018,
            image:
                "https://www.tesla.com/sites/default/files/images/model-3/model_3--side_profile.png?20170801"
        },
        {
            vin: "abc123",
            manufacturer: "Tesla",
            model: "Model 3",
            year: 2017,
            image:
                "https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524"
        }
    ];

class MyVehicleListScreen extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   refreshing: false
        // };
    }
    render() {
        return (
            <View style={{ flex: 1, paddingTop: 0, width: "100%" }}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item.vin}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Image props={item.image}></Image>
                                <Text
                                    style={{
                                        padding: 0,
                                        fontSize: 18,
                                        height: 60,
                                        borderWidth: 1,
                                        width: "100%"
                                    }}
                                >

                                    {item.model}
                                    {item.manufacturer}
                                    {item.year}


                                </Text>

                            </View>
                        );
                    }}
                />
            </View>

        )
    }
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerRight: (
                <TouchableOpacity
                    style={{ padding: 5, paddingRight: 15 }}
                    onPress={() => {
                        navigation.navigate("VehicleEditorStack");
                    }}
                >
                    <Ionicons name={"ios-add"} size={35} color={"white"} />
                </TouchableOpacity>
            ),
            title: "My Cars"
        };
    };
}

export default MyVehicleListScreen;

