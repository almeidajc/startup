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
    this.handleParams()
    this.handleResponse()

  }

  handleParams(){
    let today;
    let date = new Date();
    today = date.getUTCFullYear() +""+ (date.getUTCMonth() + 1) +""+ date.getUTCDate();
    this.setState({params: `&begin_date=${today}`})
  }
  handleResponse(rep){
    this.setState({response: rep});
    // console.log(this.state.response)
  }

    componentWillMount(){
      let thisClass = this;
      if(thisClass.state.params.item === "0"){
          thisClass.handleParams();
      }

      let xhttpConfig = {
        method: "GET",
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=adf72c67e37a4af7aac681a489215b03${this.state.params}`,
        asyncronic: true
      }

      function resolve(xhttp) {
             if (xhttp.readyState === XMLHttpRequest.DONE) {
               resp = JSON.parse(event.target.response);
             }
             thisClass.setState({response: resp})
            //  thisClass.handleResponse(resp);

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
        // <label>{resp.response.status}</label>
      )
    }
  }

export default ApiConfig;
