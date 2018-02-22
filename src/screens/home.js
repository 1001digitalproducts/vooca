import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as kategoriActions from '../redux/kategori/actions';
import {
    Container,
    Content,
    Text,
    List,
    ListItem,
} from 'native-base';

class Home extends Component {

    render() {
        const {dataKategori} = this.props.kategoriReducer;
        return (
            <Container>
                <Content>
                    <List
                        dataArray={dataKategori}
                        renderRow={(item) =>
                            <ListItem>
                                <Text
                                    style={{flex:1}}
                                    onPress={()=>{
                                        this.props.navigation.navigate('DetailKata',{item})}
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