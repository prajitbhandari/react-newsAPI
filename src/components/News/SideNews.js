import React,{Component} from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';

class SideNews extends Component{
  constructor(props){
    super(props);
    this.state={
      sidenews:[],
      error:false,
    }
  }
    componentDidMount(){
        const url=`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=7caef30d6dbd44a3a680ab8ef3bf2706`;      
        axios.get(url)
        .then((response)=>{
            this.setState({
                sidenews:response.data.articles       
            })
        })
        .catch((error)=>{
            this.setState({
              error:true
            })
        });
    }
    renderItems(){
        if(!this.state.error){
            return this.state.sidenews.map((item)=>(
                <SingleSide key={item.url} item={item}/>
            ));
       }else{
           return <Error/>
       }     
    }
    render(){
        return(
            <ul>
             {this.renderItems()}
            </ul>
        );
    }
}

export default SideNews;