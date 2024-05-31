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
      postsPerPage:10
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
      const{
        page,
        postsPerPage,
        allPost,
        post
      } = this.state;

      const nextPage = page + postsPerPage
      const nextPosts = allPost.slice(nextPage, nextPage + postsPerPage)
      post.push(...nextPosts)

      this.setState({post, page : nextPage})
    
    }

  render(){
    const {post,page,postsPerPage,allPost} = this.state;
    const noMorePost = page + postsPerPage >= allPost.length;
  return (
    <section className='container'>
      <Posts post={post}></Posts>
      <div className='button-container'>
          <Button  
          text = "Load more posts"
          onClick={this.loadMorePosts}
          disable={noMorePost}
          />
      </div>
    </section>
  );
  }
}

export default Home;
