This assignment gave me a much better understanding of how frontend and backend systems work together in a modern web application. Before starting, I had very little experience with Nuxt, Strapi, and Docker, so there was a lot to learn throughout the process.

One of the biggest challenges for me was setting up the project structure correctly and making sure Nuxt could detect all the pages and routes properly. I also struggled a bit with Strapi at first because my API requests kept returning empty data until I figured out the public permissions and publishing system.

Docker was probably the most confusing part initially because I had never really worked with containers before. After spending time troubleshooting and testing Dockerfiles for both the frontend and backend, I started understanding how useful Docker is for keeping projects consistent across different environments.

I also learned how APIs are used to fetch and display dynamic content, how routing works in Nuxt, and how a headless CMS like Strapi can manage website content separately from the frontend. Seeing the blog posts load dynamically from the API was probably the most satisfying part of the project.

Overall, this assignment helped improve my understanding of full-stack web development and gave me more confidence working with modern web technologies.

GitHub Repository:
PASTE_YOUR_GITHUB_LINK

Docker Commands:

Frontend:
docker build -t nuxt-blog .
docker run -p 3000:3000 nuxt-blog

Backend:
docker build -t strapi-blog .
docker run -p 1337:1337 strapi-blog