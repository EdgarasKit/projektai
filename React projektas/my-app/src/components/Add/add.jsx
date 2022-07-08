import React from "react";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Add = ({postsData}) => {
  const navigate=useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('yoursToken');
    fetch('/verify', {
    headers: {
    'Authorization': `Bearer ${token}`
    }
    })
    .then(res => res.json())
    .then(res => {
    if (res.err) {
    localStorage.removeItem('yoursToken');
    return navigate('/');
    }
    }
    )
    }, 
    [navigate])
  const addPost=(e)=>{
  e.preventDefault()
 const title=e.target.elements.title.value;
 const description=e.target.elements.description.value;
fetch(' /addposts',{
  method:'POST',
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({
    title:title,
    description:description,
  })
})
.then(()=>postsData())
.then(()=>e.target.reset())
.then(()=>alert('Post has been added !'))
console.log(title,description)
  

}
  return (  
    <>


    </>
  );
}
 
export default Add;