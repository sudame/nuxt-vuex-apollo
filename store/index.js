import Vuex from 'vuex';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import fetch from 'node-fetch';

const client = new ApolloClient({
  fetch: fetch,
  uri: 'https://online.sohosai.com/graphql',
});

export default () =>
  new Vuex.Store({
    state: {
      projects: [],
    },
    mutations: {
      updateProjects(state, newProjectsList) {
        state.projects = newProjectsList;
      },
    },
    actions: {
      getProjectsList({ commit }) {
        console.log('hoge');
        client
          .query({
            query: gql`
              query {
                result {
                  projects {
                    id
                    projectGroupName
                    projectName
                    # projectClass
                    # description
                    # grandPrix
                    # category
                    # day0
                    # day1
                    # day2
                    # artistic
                    # academic
                    # inOut
                    # area
                    # classroomNumber
                    # tentNumber
                    # stage
                    # tagList
                  }
                }
              }
            `,
          })
          .then(data => {
            console.log('then');
            console.log(data.data.result.projects);
            commit('updateProjects', data.data.result.projects);
          })
          .catch(error => {
            console.log('catch');
            console.log(error);
          });
      },
    },
  });
