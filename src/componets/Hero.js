

export default function Hero() {
  return (
    //make section blurry

    <div className="hero mx-8 px-4">
  <div className ="blur silhouette z-0  ">

      </div>
      <section className="absolute flex-col h-full w-full z-10 px-7">
        <div className="hero-top-text w-3/5 ">
          <h2 className="heading">GWACH </h2>
          <h3 className ="subheading">Geek With A Cold Hand</h3>
        </div>

        <div className="hero-text-bottom w-2/5 justify-self-end ml-auto ">
          
       
     
        </div>
        <hr></hr>
        <p className ="my-3">
            Molestias adipisicing elit. Molestias aut, repellat ipsum facere
            voluptate dicta obcaecati deserunt nobis suscipit eaque? aut,
            repellat ipsum facere voluptate
          </p>
      </section>
    
    </div>
  
  );
}
