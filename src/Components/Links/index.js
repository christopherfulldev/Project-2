import "../Links/index.css";
import GitLogo from "./Github_logo_PNG2.png"

const Links = () => {
  return (
    <div className= "info-section elegantext2">
      <div className= "gamehub-creators">
      <h2>GAMEHUB CREATORS</h2>
      <div className= "info-creator">
        <h3>Christopher Pinto</h3>
        <h5>Aspire webDev fullStack</h5>
        <a target= "_blank" href= "https://github.com/DeAT1995"> 
          <img src= {GitLogo} alt= "gitlogo" className= "git-image"/>
        </a>
      </div>
      <div className= "info-creator2">
        <h3>Debora Tavares</h3>
        <h5>Aspire webDev fullStack</h5>
        <a target= "_blank" href= "https://github.com/DeAT1995"> 
          <img src= {GitLogo} alt= "gitlogo" className= "git-image"/>
        </a>
      </div>
      </div>
        <div className="back-link">
        <h2>Backlinks:</h2>
        <a target= "_blank" href= "https://rawg.io/" className= "elegantext2 back-link">http://rawg.io/</a>    
      </div>
    </div>
  );
};


export default Links;
