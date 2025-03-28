
// function to load home page content
function loadHomeContent()
{
    const content = document.querySelector("#content");
    content.innerHTML = `
        <div class="homepage">

            <img class="hero-image" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1350&q=80"
             alt="Restaurant interior">

            <h1>Welcome to The Rustic Table</h1>

            <div class="description">

                <p>Experience farm-to-table dining at its finest. Our chefs craft seasonal menus using locally-sourced
                    ingredients from trusted regional producers.</p>

                <p>Founded in 2010, we've become a beloved neighborhood institution through our commitment to:</p>

                <ul>
                    <li>Artisanal cooking techniques</li>
                    <li>Thoughtfully curated wine pairings</li>
                    <li>Unmatched customer service</li>
                </ul>

            </div>

        </div>
    `;
}

export { loadHomeContent };