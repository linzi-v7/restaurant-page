
//function to load about us tab content
function loadAboutContent()
{
    const content = document.querySelector("#content");
    content.innerHTML = `
        <div class="about-us">

            <h1>About Us</h1>
            <p>Learn more about us:</p>
            <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Our Values</a></li>
            </ul>

        </div>
    `;
}

export { loadAboutContent };