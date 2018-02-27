import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Alert} from 'react-native';
import * as kategoriActions from '../redux/kategori/actions';
import {
    Container,
    Content,
    Text,
    List,
    ListItem,
    Item,
    Input,
    Icon
} from 'native-base';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        };
    }

    render() {
        const {keyword} = this.state;
        const {dataKategori} = this.props.kategoriReducer;
        let filteredData;

        if (keyword.length !== 0) {
            filteredData = dataKategori.filter(
                (val) => {
                    return val.kategori.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
                }
            );
        } else {
            filteredData = dataKategori
        }

        return (
            <Container>
                <Content>
                    <Item>
                        <Input placeholder='Cari...' onChangeText={(text) => {
                            this.setState({
                                keyword: text
                            })
                        }}/>
                        <Icon active name='search'/>
                    </Item>
                    <List
                        dataArray={filteredData}
                        renderRow={(item) =>
                            <ListItem>
                                <Text
                                    style={{flex: 1}}
                                    onPress={() => {
                                        this.props.navigation.navigate('DetailKata', {item})
                                    }
                                    }
                                >{item.kategori}</Text>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        kategoriReducer: state.kategoriReducer,
    }
}

const mapDispatchToProps = (dispatch) => ({kategoriActions: bindActionCreators(kategoriActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Home);