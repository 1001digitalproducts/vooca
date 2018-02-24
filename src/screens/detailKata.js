import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as kategoriActions from '../redux/kategori/actions';
import {
    Container,
    Content,
    List,
    Text,
    ListItem,
} from 'native-base';

class DetailKata extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        const item = params ? params.item : null;

        return {
            title: item.kategori,
        }
    };

    componentDidMount() {
        const { params } = this.props.navigation.state;
        const item = params ? params.item : null;
        const {kategoriActions} = this.props;
        kategoriActions.getKata(item.id);
    }

    render() {
        const {dataKata} = this.props.kategoriReducer;

        return (
            <Container>
                <Content>
                    <List
                        dataArray={dataKata}
                        renderRow={(item) =>
                            <ListItem>
                                <Text
                                    style={{flex:1}}
                                    onPress={()=>{
                                        this.props.navigation.navigate('ArtiKata',{item})}
                                    }
                                >{item.kata}</Text>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        kategoriReducer: state.kategoriReducer,
    }
}

const mapDispatchToProps = (dispatch) => ({kategoriActions: bindActionCreators(kategoriActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(DetailKata);