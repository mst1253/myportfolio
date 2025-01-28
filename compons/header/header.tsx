import Menu from "./sub-compons/menu";
import MainHero from "./sub-compons/mainHero";
const Header = () => {
    return (  
        <div className="container grid mx-0 gap-20">
             <Menu />
             <MainHero />
        </div>
    );
}
 
export default Header