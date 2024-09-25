import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reroute } from '../components/Reroute';
import { useAuthContext } from '../hooks/useAuthContext';


const Create = () => {
    const { user } = useAuthContext()
    Reroute();
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [picture, setPicture] = useState(null);
    const [description, setDescription] = useState('');
    const [youtube, setYoutube] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState('');
    const navigate = useNavigate()

  

    const handleSubmit = (e) => {
        const username = user.username
        e.preventDefault();
        setLoading('Posting...');
        const project = {title,img,description,body,youtube,username};
        fetch('https://projmanage-e5a738ca3050.herokuapp.com/api/projects', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(project)
        }).then(() => {
            setLoading('Posted!');
            navigate('/');
        })
    }

    const convertToBase64 = (e) => {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
        
            reader.onload = () => {
              resolve(reader.result);
            };
        
            reader.onerror = (error) => {
              reject(error);
            };
        
            if (e.target.files && e.target.files.length > 0) {
              reader.readAsDataURL(e.target.files[0]);
            } else {
              reject("No file selected");
            }
          });
        };


    useEffect(() => {
        console.log(picture);
          }, [picture]);
        
   
    return (
        <div className="create">
        <h2>Create a Project</h2>
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input 
                type="text"
                required   
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            ></input>
            <div>
            <label>Image (300x300 Recommended):</label>
            <input 
                id="select-Img"
                type="file"
                required   
                value={picture}
                onChange={async (e) => {
                    setPicture(e.target.value);
                    convertToBase64(e)
                        .then((result) => {
                            setImg(result)
                        });
                  }
                }
                style={{height:'20px'}}
                accept="image/png, image/gif, image/jpeg"
            ></input>
            {}
            </div>
             <label>Description:</label>
            <textarea 
                id="description-label"
                required 
                value={description}
                onChange={(e)=> setDescription(e.target.value)}           
            ></textarea>
             <label>Body:</label>
            <textarea
                required     
                value={body}
                onChange={(e)=> setBody(e.target.value)}       
            ></textarea>
             <label>YouTube Embed Link (Optional):</label>
            <textarea 
                id="description-label"
                value={youtube}
                onChange={(e)=> setYoutube(e.target.value)}
                placeholder="(e.g. https://www.youtube.com/embed/some_link)"
            ></textarea>
           {loading !== 'Posting...' && <button>Create</button>}
           <text id="create-loading">{ loading }</text>
        </form>
        </div>
    );
}
export default Create
