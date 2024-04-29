window.addEventListener("load", () => {
  loadText();
});

function loadText() {
  /* Header Text */
  const headerTitle = document.querySelector(".header-title");
  const headerText = document.querySelector(".header-text");

  headerTitle.innerText = "A modern publishing platform";
  headerText.innerText = "Grow your audience and build your online brand";

  /* Section One */
  const sectionOneTitle = document.querySelector(".section-one-title");
  const sectionOnePara1 = document.querySelector(".section-one-para1");
  const sectionOnePara2 = document.querySelector(".section-one-para2");

  sectionOneTitle.innerText = "Designed for the future";
  sectionOnePara1.innerHTML = `<h2>Introducing an extensible editor</h2>
              Blogr features an exceedingly intuitive interface which lets you focus on
              one thing: creating content. The editor supports management of multiple
              blogs and allows easy manipulation of embeds such as images, videos, and
              Markdown. Extensibility with plugins and themes provide easy ways to add
              functionality or change the looks of a blog.`;

  sectionOnePara2.innerHTML = `<h2>Robust content management</h2>
              Flexible content management enables users to easily move through posts.
              Increase the usability of your blog by adding customized categories,
              sections, format, or flow. With this functionality, you’re in full control.`;

  /* Section Two */

  const sectionTwoInfo = document.querySelector(".section-two-info");
  sectionTwoInfo.innerHTML = `<h2>State of the Art Infrastructure</h2>
        <div class="section-two-para1">With and speed in mind,
        worldwide data centers provide the backbone for ultra-fast connectivity.
        This ensures your site will load instantly, no matter where your readers
        are, keeping your site competitive.</div>`;

  /* Section Three */
  const sectionThreePara1 = document.querySelector(".section-three-para1");
  const sectionThreePara2 = document.querySelector(".section-three-para2");

  sectionThreePara1.innerHTML = `<h2>Free, open, simple</h2>
            Blogr is a free and open source application backed by a large community of helpful developers.
            It supports features such as code syntax highlighting, RSS feeds, social
            media integration, third-party commenting tools, and works seamlessly with
            Google Analytics. The architecture is clean and is relatively easy to learn.`;
  sectionThreePara2.innerHTML = `<h2>Powerful tooling</h2>
            Batteries included. We built a simple and straightforward
            CLI tool that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.`;
}
