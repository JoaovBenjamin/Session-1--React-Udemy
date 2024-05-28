import './App.css';
import {Component} from 'react'
import {loadPosts} from './utils/load-post';
import { Posts } from './components/Posts';
class App extends Component{
  state = {
      post:[]
    };



   async componentDidMount(){
       await this.loadPost();
    }

    loadPost = async () =>{
      const postAndPhotos = await loadPosts();
      this.setState({post: postAndPhotos})
    }

  render(){
    const {post} = this.state;
  return (
    <section className='container'>
      <Posts post={post}></Posts>
    </section>
  );
  }
}

export default App;
