/**
 * 用户信息
 */
import storage from '../util/storage'
// 读取
export default {
    saveUserMessage(state,userMessage){
        let followingIdList = {};
        if(userMessage.following.length >0 ) {
            userMessage.following.forEach((item) => followingIdList[item._id]=true);
        }
        state.followingIdList = followingIdList;
        // 改变状态，state 中的数据
        state.userMessage = userMessage;
    },
    saveLoginStatus(state,loginStatus){
        // 改变状态，state 中的数据
        state.loginStatus = loginStatus;
    },
    saveLogoutStatus(state){
        storage.clear('userId');
        storage.clear('token');
        // 改变状态，state 中的数据
        state.loginStatus = false;
        state.userMessage = {};
    },
    saveFollowingIdList(state,followingIdList){
        // 可以创建一个新的对象，把原来对象的属性，和要添加的属性加到新的对象里
        let newObject = Object.assign({}, followingIdList);
        // 改变状态，state 中的数据
        state.followingIdList = newObject;
    },
    saveCollectList(state,collectList){
        // 改变状态，state 中的数据
        state.focusStatusList.collect = collectList;
    },
    saveLoginModal(state,loginModal){
        // 改变状态，state 中的数据
        state.loginModal = loginModal;
    },

}