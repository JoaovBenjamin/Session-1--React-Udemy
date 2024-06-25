import './styles.css';
import {Component, useCallback, useEffect, useState} from 'react'
import {loadPosts} from '../../utils/load-post';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import {TextInput } from '../../components/Input';

export const Home = () => {

  const [post, setPost] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [page, setPage] = useState([0]);
  const [postsPerPage] = useState([10]);
  const [searchValue, setSearchValue] = useState('');
  const noMorePost = page + postsPerPage >= allPost.length;
  const filterPosts = !!searchValue ? allPost.filter(
    post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase());
    }
  )
   : post;

  

    const handleChange = (e) =>{
          const {value} = e.target;
          setSearchValue(value)
        }
    const handleLoadPost = useCallback(async (page, postsPerPage) =>{
          const postAndPhotos = await loadPosts();
          setPost(postAndPhotos.slice(page,postsPerPage))
          setAllPost(postAndPhotos)
        },[])
  
    useEffect(() => {
      handleLoadPost(0,postsPerPage);
    },[handleLoadPost,postsPerPage]);

    const loadMorePosts = () =>{
          const nextPage = page + postsPerPage
          const nextPosts = allPost.slice(nextPage, nextPage + postsPerPage)
          post.push(...nextPosts)
  
          setPost(post)
          setPage(nextPage)
        }
    
   return (
    <section className='container'>
      <div  className='search-container'>
        {!!searchValue &&(
          <>
            <h1>Search value: {searchValue} <br /></h1>
          </>
        )}
        
        <TextInput searchValue={searchValue} handleChange={handleChange}/>
      </div>
      
      {filterPosts.length > 0 && (
        <Posts post={filterPosts}></Posts>
      )}
      {filterPosts.length === 0 && (
        <p>Não existem post</p>
      )}
      <div className='button-container'>
        {!searchValue && (
            <Button  
            text = "Load more posts"
            onClick={loadMorePosts}
            disabled={noMorePost}
            />    
            )}
          
      </div>
    </section>
  );
}

// export class Home2 extends Component{
//   state = {
//       post:[],
//       allPost: [],
//       page: 0,
//       postsPerPage:10,
//       searchValue: ''
//     };



//    async componentDidMount(){
//        await this.loadPost();
//     }

//     handleChange = (e) =>{
//       const {value} = e.target;
//       this.setState({searchValue : value})
//     }
//     loadPost = async () =>{
//       const postAndPhotos = await loadPosts();
//       const {page, postsPerPage} = this.state
//       this.setState({
//         //Fatiador para dividir como a respota aparece
//         post: postAndPhotos.slice(page,postsPerPage),
//         allPost: postAndPhotos
//       })
//     }

//     loadMorePosts = () =>{
//       const{
//         page,
//         postsPerPage,
//         allPost,
//         post
//       } = this.state;

//       const nextPage = page + postsPerPage
//       const nextPosts = allPost.slice(nextPage, nextPage + postsPerPage)
//       post.push(...nextPosts)

//       this.setState({post, page : nextPage})
    
//     }

//   render(){
//     const {post,page,postsPerPage,allPost, searchValue} = this.state;
//     const noMorePost = page + postsPerPage >= allPost.length;
//     const filterPosts = !!searchValue ? allPost.filter(
//       post => {
//         return post.title.toLowerCase().includes(
//           searchValue.toLowerCase());
//       }
//     )
//      : post;
//   return (
//     <section className='container'>
//       <div  className='search-container'>
//         {!!searchValue &&(
//           <>
//             <h1>Search value: {searchValue} <br /></h1>
//           </>
//         )}
        
//         <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
//       </div>
      
//       {filterPosts.length > 0 && (
//         <Posts post={filterPosts}></Posts>
//       )}
//       {filterPosts.length === 0 && (
//         <p>Não existem post</p>
//       )}
//       <div className='button-container'>
//         {!searchValue && (
//             <Button  
//             text = "Load more posts"
//             onClick={this.loadMorePosts}
//             disabled={noMorePost}
//             />    
//             )}
          
//       </div>
//     </section>
//   );
//   }
// }

export default Home;
