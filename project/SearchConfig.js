import React from 'react';
import { Link } from 'react-router'
import {Button} from 'react-bootstrap';
import Rout from './routes';

let params = "";
let xhttpConfig;

class SearchConfig extends React.Component {

  constructor() {
    super();
    this.state = {
      title:"",
      begin_date:"",
      end_date:"",
      sort:""
    }


   this.handleTitle = this.handleTitle.bind(this);
   this.handleBeginDate = this.handleBeginDate.bind(this);
   this.handleEndDate = this.handleEndDate.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }


 handleTitle(event) {
   this.setState({title: event.target.value});
 }

 handleBeginDate(event) {
   let date = new Date(event.target.value);
   this.setState({begin_date: date.getUTCFullYear() +""+ (date.getUTCMonth() + 1) +""+ date.getUTCDate()});
   console.log(this.state.begin_date)
 }

 handleEndDate(event) {
   let date = new Date(event.target.value);
   this.setState({end_date: date.getUTCFullYear() +""+ (date.getUTCMonth() + 1) +""+ date.getUTCDate()});
   console.log(this.state.end_date)
 }

 handleSubmit(event) {
   let today
   let date = new Date();
   today = date.getUTCFullYear() +""+ (date.getUTCMonth() + 1) +""+ date.getUTCDate();

   if(this.state.title === ""){
     alert("you have to inser a title")
   }
   else{
     if(today < this.state.end_date || today < this.state.begin_date){
       alert("the date can't be greater than today")
     }
     else{
       if(this.state.end_date != "" && this.state.begin_date != "" && this.state.end_date <  this.state.begin_date){
         alert("error")
       }
       else{
         params = params.concat(`&q=${this.state.title}`);
         if(this.state.begin_date !== ""){
           params = params.concat(`&begin_date=${this.state.begin_date}`);
         }
         if(this.state.end_date !== ""){
           params = params.concat(`&end_date=${this.state.end_date}`);
         }
         this.context.router.push(`ApiConfig/${params}`);
       }
     }
   }

 }

 render() {
   return (
     <div>
       <label>Word key: </label> <input type="text" name="title" onChange={this.handleTitle.bind(this)} required="" />
       <label>Begin Date: </label> <input type="date" name="begin_date" onChange={this.handleBeginDate.bind(this)} />
       <label>End Date: </label> <input type="date" name="end_date" onChange={this.handleEndDate.bind(this)} />
       <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
     </div>
   );
 }

}

SearchConfig.contextTypes = {
    router: React.PropTypes.func
};

export default SearchConfig;


//  <Link to={`/List/${response.response}`}><Button bsStyle="primary">`Submit`</Button><Link>
 // "q"+ //palabra
 //Search query term. Search is performed on the article body, headline and byline

 // "begin_date" + //yyyymmdd fecha inicio
 //Restricts responses to results with publication dates of the date specified or later

 // "end_date"+ //yyyymmdd fecha max
 //Restricts responses to results with publication dates of the date specified or later.

 // "sort"+ // newest/oldest
 //By default, search results are sorted by their relevance to the query term (q). Use the sort parameter to sort by pub_date













//Para mostrar la noticia
//
// function showNotice() {
//   // let xhttpConfig = configAjax("GET", "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=adf72c67e37a4af7aac681a489215b03"+params, true);
//   // let xhttp = new XMLHttpRequest(xhttpConfig);
//   let indexI;
//   let params = "";
//   let columnNode = document.createElement("li");
//   // let textNode = document.createTextNode(elements.items[indexI].full_name);
//   //cambiar nombre
//    eventRequestReusable(xhttp).then( function (response) {
//      elements = JSON.parse(response);
//       elements.items.maps(function (item){
//        columnNode = document.createElement("li");
//       //  textNode = document.createTextNode(elements.items[indexI].full_name);
//        //cambiar nombre
//        columnNode.appendChild(textNode);
//        return columnNode;
//      });
//    }, function(error) {
//     //  document.getElementById("changeclass").innerHTML = "404 not found";
//      // render
//  });
// }

// creo que lo voy a tirar en el showNotices
