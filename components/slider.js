const Slider = () => {
    return(
        <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{height: "", overflow: 'hidden'}}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h3 style={{color: '#293241', fontSize: 25, fontWeight: 800, lineHeight: '1.5em'}}>We are a platform that connects car sellers and buyers. Our focus is to make it easy for car buyers to acquire the car they want regardless of their current credit score.</h3>
          </div>
          <div className="carousel-item">
            <h3 style={{color: '#293241', fontSize: 25, fontWeight: 800, lineHeight: '1.5em'}}>As a seller, you have many advantages when you sell your vehicle in our platform.</h3>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </>
    )
}

export default Slider