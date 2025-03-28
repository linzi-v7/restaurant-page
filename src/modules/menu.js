
//function to load menu tab content
function loadMenuContent()
{
    const content = document.querySelector("#content");
    content.innerHTML = `
        <div class="menu">

            <h1>Menu</h1>
            <p>Coming soon...</p>

        </div>
    `;
}

export { loadMenuContent };