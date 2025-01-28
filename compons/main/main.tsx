import AboutMe from "./sub-compons/aboutMe";
import Myskills from "./sub-compons/myskills";
import MyProjects from "./sub-compons/myprojects";
const Main = () => {
    return (  
        <div className="container-fluid grid place-items-center p-4 mx-auto gap-32">
            <AboutMe />
            <Myskills />
            <MyProjects />
        </div>
        
    );
}
 
export default Main;