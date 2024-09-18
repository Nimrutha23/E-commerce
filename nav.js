const createNav = () => {
    let nav = document.querySelector('.navbar');
    
    nav.innerHTML = `
        <div class="nav">
            <img src="logo.avif" class="brand-logo" alt="logo" />
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search product" />
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="user.png" alt="user" /></a>
                <a href="#"><img src="cart.png" alt="cart" /></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Ethnic</a></li>
            <li class="link-item"><a href="#" class="link">Western</a></li>
            <li class="link-item"><a href="#" class="link">Beauty care</a></li>
            <li class="link-item"><a href="#" class="link">Accessories</a></li>
        </ul>
    `;
}

createNav();
