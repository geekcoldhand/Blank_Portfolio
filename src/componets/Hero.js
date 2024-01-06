import heroImg from "../images/img5.png";
export default function Hero() {
  return (

    <div className="hero mx-8 ">
      <div className="blur silhouette z-0  "></div>
      <section className="absolute flex-col justify-center items-center h-full w-full z-10 hero-box md:flex-row px-7">
        <div className="hero-top-text w-5/5 flex-col justify-evenly sm:w-3/5">
       
          <h3 className="subheading"> 
          <span className="hero-span pl-2 text-center"> Geek </span>With A Cold Hand</h3>
          <p className="my-3  sm:block ">
          Molestias adipisicing elit. Molestias aut, repellat ipsum facere
          voluptate dicta obcaecati deserunt nobis suscipit eaque? aut, repellat
          ipsum facere voluptate
        </p>
        </div>
        <hr></hr>
        <div className="hero-bottom-text flex-col items-center w-2/5 my-8 ">
        <img className="hero-img my-4 " src={heroImg} alt="placeholder"></img>
        <button className =" call-to-action"> Learn More</button>
        </div>
        <hr></hr>
      
      </section>
    </div>
  );
}
