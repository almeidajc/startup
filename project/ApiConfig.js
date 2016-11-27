import React from 'react';
import {Link} from 'react-router';
import Rout from './routes';

import ArticlesList from './ArticlesList'

let resp
class ApiConfig extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      params: this.props.params.item,
    }
    this.handleParams = this.handleParams.bind(this);
    this.handleResponse();

  }

  handleParams(event){
    this.setState({params: ""})
    // console.log(this.state.params);
    // console.log("aca tambien");
  }

  handleResponse(rep){
    this.setState({response: rep});
    // console.log(this.state.response)
  }

    componentWillMount(){
      let thisClass = this;
      if(thisClass.state.params === "0"){
          thisClass.handleParams.bind(this);
          console.log("entro")
      }
      console.log(this.state.params);

      if(this.state.params != "0"){

      console.log(this.state.params)
        let xhttpConfig = {
          method: "GET",
          url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=adf72c67e37a4af7aac681a489215b03${this.state.params}`,
          asyncronic: true
        }

        function resolve(xhttp) {
          if (xhttp.readyState === XMLHttpRequest.DONE) {
            resp = JSON.parse(event.target.response);
          }
          thisClass.handleResponse(resp)

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
    }


    // console.log(this.state.response);
    render(){
      return(
        <ArticlesList articles={this.state.response} />
      )
    }
  }

export default ApiConfig;
