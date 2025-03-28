
//function to load contact us tab content
function loadContactContent()
{
    const content = document.querySelector("#content");
    content.innerHTML = `
        <div class="contact-us">

            <h1>Contact Us</h1>
            <p>Stay connected with us:</p>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>

        </div>
    `;
}

export { loadContactContent };