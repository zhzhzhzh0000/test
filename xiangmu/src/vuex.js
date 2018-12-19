import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

var car = JSON.parse(localStorage.getItem("cars") || "[]");

var store = new Vuex.Store({
    state:{
        car:car
    },
    mutations:{
        increm(state){
        },
        addCar(state,info){
            var flag = false;
            state.car.some(item => {
                if(item.id == info.id){
                    item.cuont += parseInt(info.cuont);
                    flag = true;
                    return;
                }
            })

            if(!flag) state.car.push(info);

            localStorage.setItem("cars",JSON.stringify(state.car));
        },
        updatecar(state,info){
            console.log(info)
            state.car.some(item =>{
                if(item.id == info.id){
                    item.cuont = parseInt(info.count);
                    return true;
                }
            })
            localStorage.setItem("cars",JSON.stringify(state.car));
        },
        removecar(state,id){
            state.car.some((item,i) =>{
                if(item.id == id){
                    state.car.splice(i,1);
                    return true;
                }
            })
            localStorage.setItem("cars",JSON.stringify(state.car));
        },
        updateSlc(state,val){
            console.log(val)
            state.car.forEach(item =>{
                if(item.id == val.id){
                    item.select = val.select;
                }
            })
            localStorage.setItem("cars",JSON.stringify(state.car));
        }
    },
    getters:{
        addCar(state){
            var o = 0;
            state.car.forEach(item => {
                o += item.cuont;
            })
            return o;
        },
        getSelect(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.select
            })
            return o;
        },
        jisuan(state){
            var o = {
                count:0,//数量
                amod:0//总价
            }
            state.car.forEach(item => {
                if(item.select){
                    o.count += item.cuont;
                    o.amod += item.price * item.cuont
                }
            })
            return o;
        }
    }
})

export default store;