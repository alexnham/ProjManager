import {Link} from 'react-router-dom';


const ProjectList = ({projects, title, /*handleDelete*/}) => {
    //const ProjectList = (props) => {
    // const projects = props.projects
    
    // const title = props.title
    return (
        
        <div className="project-list">
            <h1>{title}</h1>
           {projects.length === 0 && <div style={{display:'flex', justifyContent:'center',marginTop:'100px',fontSize:'50px'}}>No Projects</div>}
           {console.log(projects.length)}
            {projects.map((project) => (
                <Link to={`/projects/${project._id}`}>
                <div className="project-preview" key={project._id}>
                    {console.log(project.img)}
                    <img className='proj-img' src={project.img} style= {
                        {
                        marginLeft: "10px",
                        minWidth: '300px',
                        maxWidth: '300px',
                        height: '300px',
                        borderRadius: '70px',
                        objectFit: 'cover'
                        }
                    }/>
                    <div className="aboutProject">
                    <h2 >{project.title}</h2>
                    <p>About: {project.description}</p>
                    </div>
                  {/*  <button onClick={() => handleDelete(project.id)}>Delete me</button>*/}

                </div>
                </Link>


            ))}



        </div>
    )
}
export default ProjectList;