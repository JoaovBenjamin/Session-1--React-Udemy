import './styles.css';
import {Component} from 'react'
import {loadPosts} from '../../utils/load-post';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
class Home extends Component{
  state = {
      post:[],
      allPost: [],
      page: 0,
      postsPerPage:2
    };



   async componentDidMount(){
       await this.loadPost();
    }

    loadPost = async () =>{
      const postAndPhotos = await loadPosts();
      const {page, postsPerPage} = this.state
      this.setState({
        //Fatiador para dividir como a respota aparece
        post: postAndPhotos.slice(page,postsPerPage),
        allPost: postAndPhotos
      })
    }

    loadMorePosts = () =>{
      console.log("Carregando posts")
    }

  render(){
    const {post} = this.state;
  return (
    <section className='container'>
      <Posts post={post}></Posts>
      <Button>ola</Button>
    </section>
  );
  }
}

export default Home;
