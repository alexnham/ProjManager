import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch'

const ProjectDetails = () => {
    const { _id:id } = useParams();
    const { data: project, error, isPending } = useFetch(`https://projmanage-e5a738ca3050.herokuapp.com/api/projects/${id}`);
    return (
        <div className="project-details">
            {isPending && <div>Loading (API Initalizing, Please Be Patient)...</div>}
            {error && <div>{error}</div>}
            {project && 
            <article>
                <h2>{project.title}</h2>
                <p id="project-detail-description">{project.description}</p>
                <p id="project-detail-description">By: {project.username}</p>
                {project.youtube && <iframe width="560" height="315" src={project.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                <div>{project.body}</div>
            </article>
            }
        </div>
    );
}
 
export default ProjectDetails;