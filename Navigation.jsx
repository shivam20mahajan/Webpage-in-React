const Navigation=() => {
return(
    <nav className="continer">
    <div className="Logo">
    <img
      src="https://static.vecteezy.com/system/resources/previews/014/414/689/non_2x/adidas-new-logo-on-transparent-background-free-vector.jpg"
      alt="logo"
      width="120"
      height="120"
    />
    </div>

    <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
    </ul>

    <button>Login</button>
</nav>
);
};

export default Navigation;