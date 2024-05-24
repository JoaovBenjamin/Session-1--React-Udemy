import './App.css';
import {Component} from 'react'

class App extends Component{
  state = {
      post:[]
    };



    componentDidMount(){
        this.loadPost();
    }

    loadPost = async () =>{
      const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')

      const [post] = await Promise.all([postsResponse]);

      const postJson = await post.json();

      this.setState({post: postJson})
    }

  render(){
    const {post} = this.state;
  return (
    <div className="App">
        {post.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
  }
}

export default App;
