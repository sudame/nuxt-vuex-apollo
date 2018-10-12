// このファイルがvuex本体

// vuexの読み込み
import Vuex from 'vuex';
// apollo-clientをラップして使いやすくしたものらしい
import ApolloClient from 'apollo-boost';
// gql(=GraphQL Query)を書きやすくするやつ
import gql from 'graphql-tag';
// fetchがグローバルに無い場合こいつを使う
// はじめ開発してみたときここでコケたが、どうやらnuxtのサーバーサイドレンダリングが行われる際にfetchメソッドが無くてコケるらしい
import fetch from 'node-fetch';

// apollo clientのセットアップ
const client = new ApolloClient({
  // 独自のfetchメソッドを使う場合はここで設定する
  fetch: fetch,
  // 取得先のベースURLを設定
  uri: 'https://online.sohosai.com/graphql',
});

export default () =>
  new Vuex.Store({
    state: {
      // 企画情報の保管変数
      projects: [],
    },
    mutations: {
      // 企画情報の更新ミューテーション
      updateProjects(state, newProjectsList) {
        state.projects = newProjectsList;
      },
    },
    actions: {
      // 実際にクエリを叩いてもってくる部分
      getProjectsList({ commit }) {
        client
          .query({
            // graphql-tagの機能でクエリをカッコ良く書けている
            // 全情報を取ってくるとレスポンスが悪いのでとりあえずidと企画名と企画団体名のみ取得
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
          // クエリ結果はPromiseで返される。成功したらthen、失敗したらcatchの関数が実行される
          .then(data => {
            // データ取得に成功したらupdateProjectsミューテーションに得られたデータをコミット
            // 取得されるデータのデータ構造がよく分からないので汚い書き方になっている。公式ドキュメントが見当たらない。
            commit('updateProjects', data.data.result.projects);
          })
          .catch(error => {
            // データ取得に失敗したらエラーメッセージをブラウザコンソールに吐く。
            console.error(error);
          });
      },
    },
  });
