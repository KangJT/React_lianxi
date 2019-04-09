Mock.mock('/data',()=>{
    return data
})

export const getData = (data) => {
    return {
        type: 'ALL_DATA',
        data
    }
}

export const changeAllPrice = (data) => {
    return {
        type: 'ALL_PRICE',
        data
    }
}

export const changeAllCont = (data) => {
    return {
        type: 'ALL_CONT',
        data
    }
}

export const changeAllChecked = (data) => {
    return {
        type: 'ALL_CHECKED',
        data
    }
}

const initStore = {
    listData: [],
    allPrice: 0,
    allCont: 0,
    allChecked: false
}

const IndexStore = (state = initStore, action) => {
    switch(action.type) {
        case 'ALL_DATA':
            return {
                ...state,
                listData: [...action.data]
            }
        case 'ALL_PRICE':
            return {
                ...state,
                allPrice: action.data
            }
        case 'ALL_CONT':
            return {
                ...state,
                allCont: action.data
            }
        case 'ALL_CHECKED':
            return {
                ...state,
                allChecked: action.data
            }
        default:
            return state
    }
}
export default IndexStore

import {createStore, combineReducers} from 'redux';
import IndexStore from './index/index.reducer'
let bigStore = combineReducers({IndexStore});
export default createStore(bigStore)

import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as IndexActions from '../store/index/index.action'
import Item from './item'
import '../mock/mock'


class Index extends Component {
    componentDidMount() {
        let {
            getData
        } = this.props;
        axios.get('/data').then(res => {
            getData(res.data)
        })
    }

    changeAllChecked = (e) => {
        let {
            listData,
            getData,
            changeAllPrice,
            changeAllCont,
            defaultPrice = 0,
            defaultCont = 0,
            changeAllChecked
        } = this.props;
        listData = listData.map((v, i) => {
            v.checked = e.target.checked
            if (e.target.checked) {
                defaultPrice += (v.num * v.pic)
                defaultCont += v.num
            }
            return v
        })
        getData(listData);
        changeAllPrice(e.target.checked ? defaultPrice : 0)
        changeAllCont(e.target.checked ? defaultCont : 0)
        changeAllChecked(e.target.checked)
    }

    render () {
        let {
            listData,
            allPrice,
            allCont,
            allChecked
        } = this.props;
        return (
            <div>
                {
                    listData.length > 0 && listData.map((v, i) => {
                        return <Item key={i} val={v} ind={i} />
                    })
                }
                <div>
                    <input type='checkbox' checked={allChecked} onChange={this.changeAllChecked} />全选
                    <span>总价为{allPrice}</span>
                    <span>总数为{allCont}</span>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => state.IndexStore
const mapDispatchToProps = dispatch => bindActionCreators(IndexActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as IndexActions from '../store/index/index.action'


class Item extends Component {

    changeChecked = (e) => {
        let {
            listData,
            ind,
            getData,
            changeAllChecked,
            allPrice,
            allCont,
            val,
            changeAllCont,
            changeAllPrice
        } = this.props;
        listData[ind].checked = e.target.checked;
        let isAllChecked = listData.every((v, i) => {
            return v.checked
        })
        if (e.target.checked) {
            allPrice += (val.num * val.pic);
            allCont += val.num
        } else {
            allPrice -= (val.num * val.pic);
            allCont -= val.num
        }
        changeAllChecked(isAllChecked);
        getData(listData);
        changeAllPrice(allPrice)
        changeAllCont(allCont)
    }

    isAdd = (type) => {
        let {
            listData,
            ind,
            getData,
            allPrice,
            allCont,
            val,
            changeAllCont,
            changeAllPrice
        } = this.props;
        if (type === 'add') {
            listData[ind].num++;
            if (val.checked) {
                allPrice += val.pic
                allCont++
            }
        }else {
            listData[ind].num--;
            if (val.checked) {
                allPrice -= val.pic
                allCont--
            }
        }
        changeAllPrice(allPrice)
        changeAllCont(allCont)
        getData(listData)
    }

    render () {
        let {
            val
        } = this.props;
        return (
            <div>
                <div><input type='checkbox' checked={val.checked} onChange={this.changeChecked} />{val.name}</div>
                <h3>{val.pic}</h3>
                <div>
                    <button disabled={val.num === 1} onClick={() => {
                        this.isAdd('del')
                    }}>-</button>
                    <span>{val.num}</span>
                    <button onClick={() => {
                        this.isAdd('add')
                    }}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state.IndexStore
const mapDispatchToProps = dispatch => bindActionCreators(IndexActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)