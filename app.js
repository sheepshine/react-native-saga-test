/**
 * Created by yangchaoben on 2017/8/8.
 */
import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

const App = (props) => {
    console.log(props, 2222);
    const action = type => props.dispatch({type});

    let list = props.state.flightList.map(function (m) {
        return <View style={styles.container}>
            <Text>航班号：{m.category}</Text>
            <Text>天气：良好</Text>
            <View>
                <Text>姓名：{m.author}</Text>
                <Text>年龄: 20</Text>
            </View>
        </View>
    });

    return (
        <View>
            <TouchableHighlight onPress={() => {action('GET_LIST_DATA_BEGIN')}}>
                <View>
                    <Text>异步加载数据</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {action('GET_DETAIL_BEGIN')}}>
                <View>
                    <Text>非阻塞加载多个源数据</Text>
                </View>
            </TouchableHighlight>
            <View>
                <Text style={styles.title}>数据源一：</Text>
                <Text>点击量：{props.state.detail.clicked}</Text>
                <Text>省份：{props.state.detail.produce}</Text>
                <Text style={styles.title}>数据源二：</Text>
                <Text>详情：{props.state.content}</Text>

            </View>
            {list}
            <View style={styles.container}>
                <Text>航班号：10</Text>
                <Text>天气：良好</Text>
                <View>
                    <Text>姓名：ceshi</Text>
                    <Text>年龄: 20</Text>
                </View>
            </View>
            <Text style={styles.title}>基础测试：</Text>
            <Text>当前state num:{props.state.num}</Text>
            <TouchableHighlight onPress={() => {action('TEST_BEGIN')}}>
                <View>
                    <Text>SAGA测试增加</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {action('TEST_BEGIN_SYN')}}>
                <View>
                    <Text>测试增加</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
};

styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ff0'
    },
    title: {
        fontSize: 16
    }
});

function mapStateToProps (state) {
    return {
        state: state
    }
}

export default connect(
    mapStateToProps
)(App)