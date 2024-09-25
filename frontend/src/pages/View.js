import ProjectList from '../components/ProjectList'
import useFetch from '../hooks/useFetch'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const View = () => {
        const {username} = useParams();
        const {data: projects, isPending, errorMessage} = useFetch('https://projmanage-e5a738ca3050.herokuapp.com/api/projects');
        const title = username + "'s Projects"
    
        return ( 
            <div className="home">
                {errorMessage && <div>{errorMessage}</div>}
                {isPending && <div>Loading (API may be initalizing, please be patient)...</div>}
                {projects && <ProjectList projects={projects.filter((project) => project.username === username)} title={title}  />}
            </div>
    
    
         );
    }
     
export default View;
