/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    AppRegistry,
    Animated,
} from 'react-native';

import AppNavigator from "./src/components/navigation/AppNavigator";
import {Root} from 'native-base';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splashAnimation: new Animated.Value(0),
            splashAnimationComplete: false,
        };
    }


    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <Root><AppNavigator/></Root>
                {this._maybeRenderLoadingImage()}
            </SafeAreaView>
        );
    }

    _maybeRenderLoadingImage = () => {
        if (this.state.splashAnimationComplete) {
            return null;
        }

        return (
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000',
                    opacity: this.state.splashAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                    }),
                }}>

                <Animated.Image
                    source={require('./assets/splash.jpg')}
                    style={{
                        width: undefined,
                        height: undefined,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        resizeMode: 'contain',
                        transform: [
                            {
                                scale: this.state.splashAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 4],
                                }),
                            },
                        ],
                    }}
                    onLoadEnd={this._animateOut}
                />
            </Animated.View>
        );
    };

    _animateOut = () => {
        // SplashScreen.hide();
        Animated.timing(this.state.splashAnimation, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
        }).start(() => {
            this.setState({splashAnimationComplete: true});
        });
    };
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#93291E',
    },
});

AppRegistry.registerComponent('myapp', () => myapp);

