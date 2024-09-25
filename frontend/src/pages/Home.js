import ProjectList from '../components/ProjectList'
import useFetch from '../hooks/useFetch'
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"
import { Reroute } from '../components/Reroute';




const Home = () => {
    Reroute()
    const { user } = useAuthContext()
    const title = "My Projects"
    const {data: projects, isPending, errorMessage} = useFetch('https://projmanage-e5a738ca3050.herokuapp.com/api/projects');
    const navigate = useNavigate();

    
    const toDelete = () => {
        navigate('/delete');
    }
   /* const handleDelete = (id) => {
        const newProjects = projects.filter(project => project.id !== id);
        setProjects(newProjects);

    }*/



    return ( 
        <div className="home">
            {errorMessage && <div>{errorMessage}</div>}
            {isPending && <div>Loading (API Initalizing, Please Be Patient)...</div>}
            {projects && <div style={{display: 'flex', justifyContent:'right'}}><button onClick={toDelete}>Delete A Project</button></div>}
            {projects && user && user.username && (
            <ProjectList 
            projects={projects.filter((project) => project.username === user.username)} title={title} 
            />
            )}
        </div>


     );
}
 
export default Home;