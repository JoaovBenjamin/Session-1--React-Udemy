import './styles.css'

export const PostCard = ({title, cover, body, id}) =>{
    return(
        <div className='post'> 
        <img src={cover} alt={title}></img>
         <div className='posts-content'>
           <h2>{title}</h2>
           <p>{body}</p>
         </div>
         </div>
    )
}