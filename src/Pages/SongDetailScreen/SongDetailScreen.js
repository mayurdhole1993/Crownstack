import React from 'react';
import {
    Image,
    View,
    TouchableOpacity, BackHandler,ActivityIndicator
} from 'react-native';
import {
    Button,
    Text,
    Header,
    Left,
    Body,
    Title,
} from 'native-base';
import {styles} from './SongDetailScreenStyle';

export class SongDetailScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            songsDetail:this.props.navigation.getParam('songDetail') ?? null,
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    render() {
        let context = this.state;
        return (
                <View style={styles.container}>

                    <Header style={styles.header}>
                        <Left>
                            <Button transparent onPress={() => this.handleBackButtonClick()}>
                                <Image style={{width: 18, resizeMode: 'contain'}}
                                       source={require('../../../assets/icon/leftarrow.png')}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.whiteText}>{context.songsDetail.trackName ?? 'No tittle'}</Title>
                        </Body>

                    </Header>
                    {
                        !this.state.loading ?
                            <View>
                                <TouchableOpacity style={styles.mainContainer}>
                                    <View style={styles.imageViewContainer}>
                                        <Image blurRadius={0} source={require('./../../../assets/picbg.jpg')} style={styles.statImage} />

                                        <Image blurRadius={0} source={{ uri:context.songsDetail.artworkUrl100 }} style={styles.floatImage} />
                                    </View>

                                    <View>
                                        <Text style={styles.textStyle}>Trak Name: {context.songsDetail.trackName ?? 'No tittle'}</Text>
                                        <Text style={styles.textStyle}>Artist Name: {context.songsDetail.artistName}</Text>
                                        <Text style={styles.textStyle}>Cencor Name: {context.songsDetail.trackCensoredName}</Text>
                                        <Text style={styles.textStyle}>Track Count: {context.songsDetail.trackCount}</Text>
                                        <Text style={styles.textStyle}>File Type: {context.songsDetail.kind}</Text>
                                        <Text style={styles.textStyle}>Collection Name: {context.songsDetail.collectionName}</Text>
                                        <Text style={styles.textStyle}>Collection Price: {context.songsDetail.collectionPrice}</Text>
                                        <Text style={styles.textStyle}>Currency: {context.songsDetail.currency}</Text>
                                        <Text style={styles.textStyle}>Release Date: {new Date(context.songsDetail.releaseDate).toString()}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={styles.containerSpiner}>
                                <ActivityIndicator size="large" color="#00ff00" />
                                <Text style={styles.loadText}>Loading...</Text>
                            </View>
                    }


                </View>
        );
    }
}
