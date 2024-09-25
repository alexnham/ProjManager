import { Link } from 'react-router-dom';
import pfp from '../images/profileLogo.png';
import search from '../images/search.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [searchBar,setSearchbar] = useState()
    const navigate = useNavigate();
        //closing the dropdown
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("profile-dropdown");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
      //opening the dropdown
      const show = () => {
        console.log("test")
        document.getElementById('dropdown').classList.toggle("show");
      }
    
      const handleSubmit = () => {
        if(!searchBar) return
        navigate(`/user/${searchBar}`)
      }

    return ( 
        <nav className="navbar">
           <Link to="/"> <h1 id='main-title'>ProjManage</h1></Link>
           <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder=" Search.."
              value={searchBar}
              onChange={(e)=> setSearchbar(e.target.value)}
              />
            <button style={{ position: 'relative', height: '25px', width: '25px', padding: '0px 10px', top:'-5px', left: '10px'}}>
              <img src={ search } style={{ width: '25px', height: '25px', position: 'absolute', top: '0px', left:'0px'}}/>
            </button>

           </form>
            <div className="links">
                <Link to="/projects">Projects</Link>
                <Link to="/create">New Project</Link>
            </div>
            <div>
            <button class='dropbtn' onClick={show}><img src={pfp} style={{height:'30px',width:'30px'}}></img></button>
            </div>
        </nav>





     );
}
 
export default Navbar;
    
