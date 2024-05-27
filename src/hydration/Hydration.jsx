const Hydration = () => {

    return <>
        <h2 style={{ marginTop: '50px' }}>Hydration</h2>
        <p>In the context of web development, &quot;hydration&quot; refers to the process by which a client-side JavaScript framework takes over a static HTML page rendered by the server, attaches event listeners, and makes the page interactive. This technique is commonly used in modern web applications that employ server-side rendering (SSR) to deliver initial HTML content to the client for better performance and search engine optimization (SEO), followed by client-side rendering (CSR) to enable interactivity.</p>
        <h3>How it works</h3>
        <ol>
            <li>
                <p>Server Side Rendering</p>
                <ul>
                    <li>
                        Initially, the server renders the HTML content and sends it to the client. This HTML includes all the necessary markup but lacks client-side interactivity (e.g., no event listeners are attached yet).
                    </li>
                    <li>
                        This approach ensures that the user sees content quickly because the browser can render the static HTML immediately.
                    </li>
                </ul>
            </li>
            <li>
                <p>Client-Side Hydration:</p>
                <ul>
                    <li>
                        Once the static HTML is loaded in the browser, the client-side JavaScript framework (e.g., React, Vue.js, or Angular) kicks in.
                    </li>
                    <li>
                        The framework reads the static HTML, re-renders the components, attaches event listeners, and sets up any necessary state. This process is known as &quot;hydration.&quot;
                    </li>
                    <li>
                        After hydration, the web page becomes fully interactive, responding to user inputs and interactions.
                    </li>
                </ul>
            </li>
        </ol>
        <p>
            <strong>Progressive Hydration</strong> - not load entire js bundle on once, split it to smaller fragments and then hydrate first only necessary content for initial view, defer loading other js code to have better time to interaction TTI.
        </p>
    </>
}

export default Hydration;