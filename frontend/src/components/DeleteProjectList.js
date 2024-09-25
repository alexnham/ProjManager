import { useNavigate } from 'react-router-dom';

const DeleteProjectList = ({projects, title, /*handleDelete*/}) => {
    //const ProjectList = (props) => {
    // const projects = props.projects
    
    // const title = props.title
    const navigate = useNavigate();
    const confirmDeleteProject = (project) => {
      {window.confirm(`Are you sure you want to Delete ${project.title}`) && deleteProject(project._id)}

    }
    const deleteProject = (id) => {
        fetch('https://projmanage-e5a738ca3050.herokuapp.com/api/projects/' + id, {
            method: 'DELETE',
        }).then(() => {
            navigate('/');
        })
    }
    return (
        
        <div className="project-list">
            <h1>{title}</h1>
            {projects.map((project) => (
                <a onClick={() => confirmDeleteProject(project)} style={{cursor: 'pointer'}}>

                <div className="project-preview" key={project._id}>

                    <img className='proj-img' src={project.img} style= {
                        {
                        marginLeft: "10px",
                        minWidth: '300px',
                        maxWidth: '300px',
                        height: '300px',
                        borderRadius: '70px'
                        }
                    }/>
                    <div className="aboutProject">
                    <h2 >{project.title}</h2>
                    <p>About: {project.description}</p>
                    </div>
                  {/*  <button onClick={() => handleDelete(project.id)}>Delete me</button>*/}
                </div>
                </a>



            ))}



        </div>
    )
}
export default DeleteProjectList;