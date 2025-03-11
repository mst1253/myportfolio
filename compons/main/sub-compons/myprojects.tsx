import CodePen from "./projects/codepen/codepen"
import Github from "./projects/github/github"
const MyProjects = () => {
    return (  
     <div id="Myprojects" className="container grid place-items-center gap-11">
        <h1 className="dark:text-white font-bold text-lg">My Projects</h1>
        <CodePen />
        <Github />
     </div>         
    )
}
export default MyProjects