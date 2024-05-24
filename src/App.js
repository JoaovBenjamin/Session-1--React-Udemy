import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

class App extends Component{
  state = {
      counter: 0,
      post: [
        {
          id:1,
          title: 'Title',
          body: 'Body'
        },
        {
          id:2,
          title: 'Title 2',
          body: 'Body 2'
        },
        {
          id:3,
          title: 'Title 3',
          body: 'Body 3'
        }
      ]
    };



    componentDidMount(){
     this.handleTimeout();
    }

    componentDidUpdate(){
     // this.handleTimeout();
    }

    handleTimeout=() =>{
      const {post, counter} = this.state;
      post[0].title = "Titulo mudou"
        setTimeout(() => {
          this.setState({post, counter : counter + 1})
        }, 1000);
    }

  render(){
    const {post, counter} = this.state;
     return (
    <div className="App">
      <h1>{counter}</h1>
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
