import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../firebase/index";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sameBlogCards: [
      { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "1/6/2022" },
      { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "2/6/2022" },
      { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "3/6/2022" },
      { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "4/6/2022" }
    ],
    blogHTML:"Write your blog title here.....",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
    user: null,
    profileEmail: "",
    profileFirstName: "",
    profileLastName: "",
    profileUserName: "",
    profileId: null,
    profileInitials: null,
  },
  getters: {
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    updateUser(state, payload){
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUserName = doc.data().userName;
    },
    setProfileInitials(state) {
      state.profileInitials =  `${state.profileFirstName[0]||''}${state.profileLastName[0]||''}`;
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUserName(state, payload) {
      state.profileUserName = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      //Connect database
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dataResults = await dataBase.get();
      commit("setProfileInfo", dataResults);
      commit("setProfileInitials");
    },
    
    async updateUserSettings({commit, state}){
      const dataBase = await db.collection('user').doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUserName,
      });
      commit("setProfileInitials");
    },
  },
  modules: {
  }
})
