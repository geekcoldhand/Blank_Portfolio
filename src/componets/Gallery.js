import placeholder from "../images/Placeholder.png";

export default function Gallery() {
  return (
    <section className="gallery flex-col">
      <div className="main-container-card grow">
        <div className="flex flex-col main-container-image justify-center lg:flex-row justify-around">
          <img className="w-50 " src={placeholder} alt="placeholder"></img>
          <label className="main-container-label ">label 1</label>
        </div>
      </div>
      <div className="main-container-card">
        <div className="flex flex-col main-container-image justify-center lg:flex-row justify-around">
          <img className="w-50 " src={placeholder} alt="placeholder"></img>
          <label className="main-container-label ">label 2</label>
        </div>
      </div>
      <div className="main-container-card">
        <div className="flex flex-col main-container-image justify-center lg:flex-row justify-around">
          <img className="w-50 " src={placeholder} alt="placeholder"></img>
          <label className="main-container-label ">label 3</label>
        </div>
      </div>
    </section>
  );
}
