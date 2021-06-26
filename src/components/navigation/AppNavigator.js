import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';

import {HomeScreen} from "../../Pages/HomeScreen/HomeScreen";
import {SongDetailScreen} from "../../Pages/SongDetailScreen/SongDetailScreen";

const MyStackNavigator = createStackNavigator({

        HomeScreen: {
            screen: HomeScreen,
        },
        SongDetailScreen: {
            screen: SongDetailScreen,
        },
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none',
    },
);

export default createAppContainer(MyStackNavigator);
