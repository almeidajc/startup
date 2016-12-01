import React from 'react';
import {Link} from 'react-router';
import Rout from './routes';

import ArticlesList from './ArticlesList'

let resp;
let par;

class ApiConfig extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.params.item === "0"){
      par = ""
    }
    else{
      par = this.props.params.item
    }
    this.state = {
      params: par,
    }
    console.log(this.props.params.item);
    this.handleResponse();
  }


  handleResponse(rep){
    this.setState({response: rep});
  }

    componentWillMount(){
        // localStorage.clear("articleStorage");// ver como borrar solo 1
        let thisClass = this;

        let xhttpConfig = {
          method: "GET",
          url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=adf72c67e37a4af7aac681a489215b03${this.state.params}`,
          asyncronic: true
        }

        function resolve(xhttp) {
          if (xhttp.readyState === XMLHttpRequest.DONE) {
            resp = JSON.parse(event.target.response);
          }
          thisClass.handleResponse(resp.response)
          // localStorage.setItem("articleStorage", resp.response);

        }


        function reject() {
          alert("we can't connect with the API")
        }

        eventRequestReusable(xhttpConfig).then(resolve,reject);

        function eventRequestReusable(object) {
          let promise = new Promise( function (resolve, reject) {
            let xhttp = new XMLHttpRequest();
            xhttp.open(object.method, object.url, object.asyncronic);
            xhttp.send();
            xhttp.onload = function () {
              if (this.readyState === 4 && this.status === 200) {
                resolve(xhttp);
              } else {
                reject(this.statusText);
              }
            };
            xhttp.onerror = function () {
              reject(this.statusText);
            };
          });
          return promise;
        }
    }

    render(){
      return(
        <ArticlesList articles={this.state.response} />
      )
    }
  }

export default ApiConfig;
