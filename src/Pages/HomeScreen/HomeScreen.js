import React, {Component} from 'react';
import {
    Image,
    View,
    Dimensions,
    FlatList,
    TouchableOpacity,ActivityIndicator
} from 'react-native';
import {
    Button,
    Text,
    Right,
    Header,
    Left,
    Body,
    Title, Drawer,
} from 'native-base';
import {styles} from './HomeScreenStyle';
import Sidebar from '../utils/sidebar';
import {ApiHelper, ResponseHelper} from '../../Helper/Helper';
import moment from "moment";

export class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            songsList:[],
            songsListCount:0,
            isFetching: false,
        };
    }

    componentWillMount() {
        this.getSongsList();
    }

    getSongsList = async () =>{
        !this.state.isFetching ? this.setState({loading:true}) : null;
        let body = {
            'term' : 'Michael+jackson'
        }
        await ApiHelper.getApi('', body)
            .then((response) => response.json())
            .then((response) => {
                if (response.results) {
                    console.log(response.resultCount);
                    this.setState({songsList:response.results,songsListCount:response.resultCount})
                    ResponseHelper.success(!this.state.isFetching ?'Success..!' : 'List Updated');
                } else {
                    ResponseHelper.errors('No data found..!');
                }
            }).catch(error => {
                // error here
                console.log(error);

                // Toast.showWithGravity('something went wrong', Toast.LONG, Toast.BOTTOM);

            });
        this.setState({loading:false,isFetching:false});
    }

    onRefresh() {
        this.setState({isFetching: true,},() => {this.getSongsList();});
    }

    closeDrawer = () => {
        this.setState({openDrawer: false});
        this.drawer._root.close();
    };

    openDrawer = () => {
        this.setState({openDrawer: true});
        this.drawer._root.open();
    };



    render() {

        return (

            <Drawer

                ref={ref => {
                    this.drawer = ref;
                }}
                content={<Sidebar/>}
                tapToClose={true}
                // side="right"
                openDrawerOffset={0.27}
                panCloseMask={0.3}
                onClose={() => this.closeDrawer()}

            >

                <View style={styles.container}>

                    <Header style={styles.header}>
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Image style={styles.menuIcon}
                                       source={require('../../../assets/icon/menu-icon.png')}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.whiteText}>SONGS</Title>
                        </Body>

                    </Header>
                    {
                        !this.state.loading ?
                            <View>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    style={{backgroundColor:'f6f6f6',marginBottom:70}}
                                    data={ this.state.songsList }
                                    horizontal={false}
                                    onRefresh={() => this.onRefresh()}
                                    refreshing={this.state.isFetching}
                                    renderItem={({item}) =>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('SongDetailScreen',{'songDetail':item})}
                                            style={{flexDirection:'row',backgroundColor:'#f1f1f1',borderRadius:15,padding:10 ,marginTop:10,borderColor:'#e98013',borderWidth:1}}>
                                            <View style={{width: 80}}>
                                                <Image blurRadius={0} source={{ uri:item.artworkUrl100 }} style={{
                                                    height: 60,
                                                    width: 60,
                                                    borderRadius: 40,
                                                    overflow:'hidden',
                                                }} />
                                            </View>
                                            <View style={{width:'100%'}}>
                                                <Text style={{color:'#000',fontWeight:'bold',}}>{item.trackName ?? 'No tittle'}</Text>
                                                <Text style={{color:'#00000085',fontSize:14,}}>{item.artistName}</Text>
                                                <Text style={{color:'#00000085',fontSize:14,}}>{item.trackCensoredName}</Text>
                                                <View style={{width:'100%'}}>
                                                    <Text style={{textAlign: 'right',lineHeight:23,fontSize:13,color:'#8385F4',fontStyle:'italic',marginRight:80}}>{moment.utc(item.releaseDate).fromNow()}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    }
                                />
                            </View>
                            :
                            <View style={styles.containerSpiner}>
                                <ActivityIndicator size="large" color="#00ff00" />
                                <Text style={{marginLeft:165}}>Loading...</Text>
                            </View>
                    }


                </View>


            </Drawer>
        );
    }
}
