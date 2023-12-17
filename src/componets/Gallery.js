import placeholder from "../images/Placeholder.png";
import "../css/mainStyle.css"

export default function Gallery() {
  return (
    
      <section className="main-container">
        <div className="main-container-card ">
          <div className="main-container-image">
            <img src={placeholder}></img>{" "}
          </div>
          <label className="main-container-label">label 1</label>
        </div>

        <div className="main-container-card ">
          <div className="main-container-image">
            {" "}
            <img src={placeholder}></img>
          </div>
          <label className="main-container-label">label 1</label>
        </div>

        <div className="main-container-card ">
          <div className="main-container-image">
            {" "}
            <img src={placeholder}></img>
          </div>
          <label className="main-container-label">label 1</label>
        </div>
      </section>
    
  );
}
