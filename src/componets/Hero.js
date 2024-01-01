import heroImg from "../images/img5.png";
export default function Hero() {
  return (
    //make section blurry

    <div className="hero mx-8 px-4">
      <div className="blur silhouette z-0  "></div>
      <section className="absolute flex-col items-center h-full w-full z-10 px-7 hero-box lg:flex-row ">
        <div className="hero-top-text w-3/5 flex-col justify-evenly ">
       
          <h3 className="subheading">Geek With A Cold Hand</h3>
          <p className="my-3">
          Molestias adipisicing elit. Molestias aut, repellat ipsum facere
          voluptate dicta obcaecati deserunt nobis suscipit eaque? aut, repellat
          ipsum facere voluptate
        </p>
        </div>

        <div className="hero-bottom-text items-center w-2/5 my-8 lg:flex-col">
        <img className="hero-img my-4 " src={heroImg} alt="placeholder"></img>
        <button className =" call-to-action"> Learn More</button>
        </div>
        <hr></hr>
      
      </section>
    </div>
  );
}
