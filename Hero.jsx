const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>Your Feet Deserve The BEST</h1>
                <p>Your Feet Deserve The BEST and we are here to help you with our shoes...</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>AVAILABLE ON</p>
                    <div className="brand-icons">
                        <img src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt="Amazon" width="40"
      height="30"/>
      <img src="https://i.pinimg.com/736x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg"  width="40"
      height="40"/>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/q/s/n/-original-imah25hq9y8t3ukf.jpeg?q=20&crop=false" width="600" height="600"/>
            </div>
        </main>
    );
};

export default HeroSection;
