const Rendering = () => {

    return <>
        <h2>Rendering</h2>
        <h3>Client Side Rendering</h3>
        <p>
            In Client-Side Rendering (CSR) only the barebones HTML container for a page is rendered by the server. The logic, data fetching, templating and routing required to display content on the page is handled by JavaScript code that executes in the browser/client. CSR became popular as a method of building single-page applications. It helped to blur the difference between websites and installed applications.
        </p>
        <p>
            As the complexity of the page increases to show images, display data from a data store and include event handling, the complexity and size of the JavaScript code required to render the page will also increase. CSR resulted in large JavaScript bundles which increased the FCP and TTI of the page.

            As shown in the above illustration, as the size of bundle.js increases, the FCP and TTI are pushed forward. This implies that the user will see a blank screen for the entire duration between FP and FCP.
        </p>
        <h3>Advantages</h3>
        <ul>
            <li>CSR allows us to have a Single-Page Application that supports navigation without page refresh</li>
            <li>Once page is load you have access to entire app no refreshes in subpages</li>
            <li>CSR also allows developers to achieve a clear separation between client and server code</li>
            <li>Grate for highly dynamic apps where all content is personalized to user</li>
            <li>CSR is a key enabler of PWAs, which can work offline or with unreliable network connections by caching data and assets locally. This provides a more resilient user experience.</li>
        </ul>
        <h3>Disadvantages</h3>
        <ul>
            <li>SEO consideration web crawlers couldn&apos;t have enough time to get content from javascript rendering on time, poor SEO</li>
            <li>Performance - big js bundle size can impact on first content visibility on the page</li>
            <li>Sometimes there is a need of writing same logic on backend and client, for example for validation tools like swagger can be useful</li>
        </ul>
        <h3>Performance</h3>
        <ul>
            <li>Performance topic is reduced to question how to improve js bundle loading time (size)</li>
            <li>Ensure that you have a reasonably tight JavaScript budget for your initial page loads. An initial bundle of smaller than 100-170KB minified and gzipped is a good starting point. Code can then be loaded on-demand as features are needed</li>
            <li>Lazy loading: With lazy loading, you can identify resources that are non-critical and load these only when needed. Initial page load times can be improved using this approach as the size of resources loaded initially is reduced.</li>
            <li>Code Splitting: To avoid a large bundle of JavaScript code, you could start splitting your bundles. Code-Splitting is supported by bundlers like Webpack where it can be used to create multiple bundles that can be dynamically loaded at runtime. Code splitting also enables you to lazy load JavaScript resources.</li>
            <li>Application shell caching with service workers: This technique involves caching the application shell which is the minimal HTML, CSS, and JavaScript powering a user interface. Service workers can be used to cache the application shell offline. This can be useful in providing a native single-page app experience where the remaining content is loaded progressively as needed.</li>
        </ul>
        <h3>Server Side Rendering</h3>
        <p>The oldest web technique for providing pages, on every request server generates new html file from scratch</p>
        <h3>Advantages</h3>
        <p>In cases where there are multiple UI elements and application logic on the page, SSR has considerably less JavaScript when compared to CSR. The time required to load and process the script is thus lesser. FP, FCP and TTI are shorter and FCP = TTI. With SSR, users will not be left waiting for all the screen elements to appear and for it to become interactive.</p>
        <p>Search engine crawlers are easily able to crawl the content of an SSR application thus ensuring higher search engine optimization on the page.</p>
        <p>Development teams are required to work with a JS budget that limits the amount of JS on the page to achieve the desired performance. With SSR, since you are directly eliminating the JS required to render the page, it creates additional space for any third party JS that may be required by the application.</p>
        <h3>Disadvantages</h3>
        <p>Since all processing takes place on the server, the response from the server may be delayed in case of one or more of the following scenarios

            Multiple simultaneous users causing excess load on the server.
            Slow network
            Server code not optimized.
        </p>
        <p>Since all code is not available on the client, frequent round trips to the server are required for all key operations causing full page reloads. This could increase the time between interactions as users are required to wait longer between operations. A single-page application is thus not possible with SSR.</p>
        <h3>Static Side Rendering</h3>
        <p>Based on our discussion on SSR, we know that a high request processing time on the server negatively affects the TTFB. Similarly, with CSR, a large JavaScript bundle can be detrimental to the FCP, LCP and TTI of the application due to the time taken to download and process the script.

            Static rendering or static generation (SSG) attempts to resolve these issues by delivering pre-rendered HTML content to the client that was generated when the site was built.</p>

        <h3>Advantages</h3>
        <p>As discussed, SSG results in a great performance for websites as it cuts down the processing required both on the client and the server. The sites are also SEO friendly as the content is already there and can be rendered by web-crawlers with no extra effort. While performance and SEO make SSG a great rendering pattern, the following factors need to be considered when assessing the suitability of SSG for specific applications.</p>
        <h3>Disadvantages</h3>
        <p>

            A large number of HTML files: Individual HTML files need to be generated for every possible route that the user may access. For example, when using it for a blog, an HTML file will be generated for every blog post available in the data store. Subsequently, edits to any of the posts will require a rebuild for the update to be reflected in the static HTML files. Maintaining a large number of HTML files can be challenging.
        </p>
        <p>


            Hosting Dependency: For an SSG site to be super-fast and respond quickly, the hosting platform used to store and serve the HTML files should also be good. Superlative performance is possible if a well-tuned SSG website is hosted right on multiple CDNs to take advantage of edge-caching.

        </p>
        <p>


            Dynamic Content: An SSG site needs to be built and re-deployed every time the content changes. The content displayed may be stale if the site has not been built + deployed after any content change. This makes SSG unsuitable for highly dynamic content.

        </p>

        <h3>Incremental Static Generation</h3>
        <p>Think of a growing blog with multiple posts. You wouldn’t possibly want to rebuild and redeploy the site just because you want to correct a typo in one of the posts. Similarly, one new blog post should also not require a rebuild for all the existing pages. Thus, SSG on its own is not enough for rendering large websites or applications.</p>

        <h4>Adding new pages</h4>
        <p>The lazy loading concept is used to include new pages on the website after the build. This means that the new page is generated immediately on the first request. While the generation takes place, a fallback page or a loading indicator can be shown to the user on the front-end. Compare this to the SSG scenario discussed earlier for individual details page per product. The 404 error page was shown here as a fallback for non-existent pages.</p>
        <h4>Updated existing page</h4>
        <p>
            To re-render an existing page, a suitable timeout is defined for the page. This will ensure that the page is revalidated whenever the defined timeout period has elapsed. The timeout could be set to as low as 1 second. The user will continue to see the previous version of the page, till the page has finished revalidation. Thus, iSSG uses the stale-while-revalidate strategy where the user receives the cached or stale version while the revalidation takes place. The revalidation takes place completely in the background without the need for a full rebuild.
        </p>
        <h3>Results</h3>
        <ul>
            <li>
                Dynamic data: The first advantage is obviously why iSSG was envisioned. Its ability to support dynamic data without a need to rebuild the site.
            </li>
            <li>
                Speed: iSSG is at least as fast as SSG because data retrieval and rendering still takes place in the background. There is little processing required on the client or the server.
            </li>
            <li>
                Consistent: As the regeneration takes place on the server one page at a time, the load on the database and the backend is low and performance is consistent. As a result, there are no spikes in latency.
            </li>
            <li>
                Ease of Distribution: Just like SSG sites, iSSG sites can also be distributed through a network of CDN’s used to serve pre-rendered web pages.
            </li>
        </ul>
    </>
}

export default Rendering;