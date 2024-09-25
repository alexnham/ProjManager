import useFetch from "../hooks/useFetch";
import DeleteProjectList from "../components/DeleteProjectList";
import { Reroute } from "../components/Reroute";
import { useAuthContext } from "../hooks/useAuthContext";



const Delete = () => {
    Reroute()
    const { user } = useAuthContext()
    const {data: projects, isPending, errorMessage} = useFetch('https://projmanage-e5a738ca3050.herokuapp.com/api/projects');
    
    return (  
        <div className="deleteProject">
            <h2>Delete A Project</h2>
            {errorMessage && <div>{errorMessage}</div>}
            {isPending && <div>Loading...</div>}
            {projects && <DeleteProjectList projects={projects.filter((project) => project.username === user.username)}   /*handleDelete={handleDelete}*//>}
        </div>

    );
}
 
export default Delete;

