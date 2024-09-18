const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="logo.avif" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Ethnic Fashions</li>
                <li><a href="#" class="footer-link">Kurtis</a></li>
                <li><a href="#" class="footer-link">Kurtas</a></li>
                <li><a href="#" class="footer-link">Dresses & Gowns</a></li>
                <li><a href="#" class="footer-link">Kurta Suit Sets</a></li>
                <li><a href="#" class="footer-link">Sarees</a></li>
                <li><a href="#" class="footer-link">Lehengas</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Western Fashions</li>
                <li><a href="#" class="footer-link">Tshirts</a></li>
                <li><a href="#" class="footer-link">Trousers & Pants</a></li>
                <li><a href="#" class="footer-link">Shirts</a></li>
                <li><a href="#" class="footer-link">Track Pants</a></li>
                <li><a href="#" class="footer-link">Jeans</a></li>
                <li><a href="#" class="footer-link">Co-ord Sets</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about us</p>
    <p class="info">Our clothing choices carry a deep psychological impact on our mood and self perception. We feel and act differently based on what you prefer to wear.</p>
    <p class="info">support emails - help@fashionclothing.com,
    customersupport@fashionclothing.com</p>
    <p class="info">telephone - 81000 00045, 81000 00046</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">X</a>
        </div>
    </div>
    <p class="footer-credit">Fashion - Clothing store</p>
    `;

}

createFooter();
