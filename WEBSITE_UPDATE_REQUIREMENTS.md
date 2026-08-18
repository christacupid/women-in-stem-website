# Women in STEM Club Website — Update Requirements

## Role

You are an expert web developer and UI/UX designer responsible for updating the existing Women in STEM Club website.

Your task is to **inspect the existing codebase and website first**, understand its current structure, styling, components, and functionality, and then implement the requirements below.

Do not unnecessarily rebuild the website from scratch. Preserve existing functionality and design elements that are already working well unless they conflict with the updated requirements.

---

# 1. Project Goal

Update the Women in STEM Club website into a polished, modern, student-focused website that functions as:

1. A public-facing hub for the Women in STEM community.
2. A central place for students to discover events and opportunities.
3. A resource library for women and gender-diverse students in STEM.
4. A platform for WIS blogs, podcasts, and spotlights.
5. A way for students and external organizations to get involved with the club.
6. A professional representation of the organization for potential partners, sponsors, speakers, and collaborators.

The website should feel:

- Modern
- Welcoming
- Professional
- Feminine without being overly stereotypical
- STEM-oriented
- Student-friendly
- Accessible
- Organized
- Visually engaging

Avoid making the site feel like a generic corporate website.

---

# 2. Important Development Instructions

Before making changes:

1. Inspect the entire existing project structure.
2. Identify the framework/library being used.
3. Identify existing routes/pages.
4. Identify reusable components.
5. Identify the current design system, colors, typography, and spacing.
6. Identify existing data/content sources.
7. Identify existing forms, APIs, CMS integrations, or external links.
8. Identify functionality that should be preserved.
9. Identify any existing bugs or inconsistencies relevant to the requested changes.

Do not replace existing infrastructure unless necessary.

Prefer:

- Reusable components
- Consistent styling
- Responsive design
- Accessible HTML
- Semantic structure
- Maintainable code
- Data-driven content where appropriate

---

# 3. Main Navigation

Update the primary website navigation to prioritize:

- Home
- About
- Events
- Opportunities
- Resources
- Get Involved
- Blog & Podcast

Secondary navigation/footer links can include:

- Team
- Contact

The navigation should work well on both desktop and mobile.

On mobile, use an appropriate hamburger/menu interaction.

---

# 4. Home Page

The home page should immediately communicate:

> Who Women in STEM is, what the organization does, and how students can get involved.

## Hero Section

Include:

- Women in STEM Club name
- Short tagline
- Brief description
- Primary CTA: "Join Us"
- Secondary CTA: "Upcoming Events"

Suggested messaging:

> Empowering women and gender-diverse students in STEM through community, opportunity, mentorship, and connection.

Do not treat this wording as mandatory if the existing brand has better messaging.

## Home Page Sections

Include:

### Upcoming Events

Display the next several events.

Each event should show:

- Event name
- Date
- Time
- Location
- Short description
- Registration/action button

Include a "View All Events" link.

### What We Do

Introduce the major areas of WIS:

- Community
- Professional Development
- Mentorship
- Networking
- Academic Support
- Social Events

### Featured Opportunity

Highlight one current scholarship, research opportunity, internship, conference, etc.

### Latest Content

Display recent:

- Blog posts
- Podcast episodes
- Women in STEM Spotlights

### Get Involved

Provide clear pathways for:

- Becoming a member
- Joining the team
- Becoming a mentor/mentee
- Partnering with WIS

### Social Media

Include appropriate social media links and/or an Instagram/social feed if an existing integration is available.

---

# 5. About Page

Create or update the About page.

Sections:

## Who We Are

Explain what Women in STEM is.

## Mission

Clearly communicate the organization's purpose.

## What We Do

Include:

- Professional development
- Social events
- Mentorship
- Networking
- Academic/community support
- Speaker events
- Workshops

## Why Women in STEM?

Provide concise context about the importance of community, representation, mentorship, and opportunities in STEM.

Do not make this section excessively academic or text-heavy.

## Values

Create a visually appealing presentation of core values such as:

- Community
- Empowerment
- Inclusion
- Curiosity
- Collaboration
- Growth

---

# 6. Events Page

This should be one of the most important pages.

Create a clean event listing/calendar experience.

## Upcoming Events

Each event should display:

- Name
- Date
- Time
- Location
- Category
- Description
- Registration link/button

Possible categories:

- Academic
- Professional
- Networking
- Social
- Speaker
- Workshop

## Past Events

Archive completed events instead of deleting them.

Past events can include:

- Event name
- Date
- Short recap
- Photos
- Relevant links/resources

If the existing site already has an event data structure, preserve and improve it rather than creating a redundant system.

---

# 7. Opportunities Page

Create a centralized opportunities hub.

Categories:

- Scholarships
- Research Opportunities
- Internships
- Jobs
- Conferences
- Volunteer Opportunities
- External STEM Organizations

Each opportunity should contain:

- Title
- Organization
- Deadline
- Category
- Short description
- External link
- Optional eligibility information

Expired opportunities should not remain mixed into active opportunities.

If possible, implement filtering by category and/or deadline.

---

# 8. Resources Page

Create a resource library.

Organize resources into:

## Academic

- Study resources
- Course resources
- Academic support

## Career

- Resume/CV resources
- Interview preparation
- LinkedIn
- Networking
- Research positions

## STEM

- Research resources
- Professional organizations
- Conferences
- Funding opportunities

## Community & Well-being

- Campus resources
- Mentorship
- Student support resources

Resources should be easy to scan and search.

---

# 9. Get Involved Page

This page should make it extremely easy for someone to become involved.

Create clear sections for:

## Become a Member

Explain how students can join WIS.

Include a prominent CTA.

## Join Our Team

Include information about:

- Executive applications
- Volunteer opportunities
- Committees

## Mentorship

Explain the mentorship program and provide application/sign-up links.

## Partner With Us

Target:

- Other Western clubs
- Faculty
- Researchers
- Companies
- Community organizations
- Potential sponsors

Explain how organizations can collaborate with WIS.

---

# 10. Team Page

Create a professional team directory.

Each member should have:

- Photo
- Name
- Position
- Short bio

Organize by:

- Executive Team
- Directors
- Coordinators
- Volunteers

Keep bios concise.

The design should feel personable rather than corporate.

If team information already exists in the codebase, preserve it and improve the presentation.

---

# 11. Blog & Podcast

Create a dedicated content area.

The navigation item may be called:

> Blog & Podcast

## Blog

Support categories such as:

- Women in STEM Spotlights
- Student Experiences
- Career Advice
- Research
- STEM News
- Club Updates

Each article should have:

- Title
- Author
- Date
- Category
- Image
- Preview/excerpt
- Full article

## Podcast

Create:

- Latest episode
- Episode archive
- Episode descriptions
- Guest information
- Listening links

The architecture should make it easy for Operations to regularly add new content.

---

# 12. Women in STEM Spotlight

Create a dedicated spotlight feature/page or section.

Spotlights can feature:

- Western students
- Professors
- Researchers
- Alumni
- STEM professionals

Suggested information:

- Name
- Position/program
- Field
- Photo
- Short introduction
- STEM journey
- Advice for students

This content should be reusable for social media and blog content where possible.

---

# 13. Contact Page

Create a simple contact page.

Include:

- General contact information
- Social media
- Partnership inquiries
- Event inquiries
- Volunteer inquiries

If appropriate, include a contact form with:

- Name
- Email
- Reason for contacting
- Message

Do not expose private personal contact information unless it already exists as intentionally public website content.

---

# 14. Footer

Create a consistent footer across the website.

Include:

- Women in STEM logo/name
- Short mission statement
- Main navigation
- Social media
- Contact information
- Relevant Western University links if appropriate
- Copyright information

---

# 15. Visual Design

The website should have a cohesive visual identity.

## General Style

Aim for:

- Clean
- Modern
- Bright
- Approachable
- Academic but not boring
- Feminine but not overly pink
- STEM-inspired

Use the existing brand colors if they are already established.

Do not introduce a completely new visual identity unless the current design is clearly inadequate.

## Typography

Use a clear hierarchy:

- Large, strong page headings
- Readable body text
- Distinct section headings
- Accessible contrast

Avoid excessive font styles.

## Cards

Use cards for:

- Events
- Opportunities
- Blog posts
- Podcast episodes
- Resources
- Team members

Keep card designs consistent across the site.

---

# 16. Responsive Design

The website must work properly on:

- Desktop
- Laptop
- Tablet
- Mobile

Pay particular attention to:

- Navigation
- Event cards
- Team grids
- Blog layouts
- Buttons
- Forms
- Images
- Spacing

Do not simply shrink desktop layouts for mobile.

---

# 17. Accessibility

Follow good accessibility practices.

Include:

- Semantic HTML
- Proper heading hierarchy
- Alt text for meaningful images
- Keyboard navigation
- Visible focus states
- Sufficient color contrast
- Accessible forms
- Descriptive buttons/links

Do not rely solely on color to communicate information.

---

# 18. Content Management

The website should be easy for a non-developer Operations team member to maintain.

Where appropriate, structure content as data rather than hardcoding repeated UI.

For example:

```js
const events = [
  {
    title: "...",
    date: "...",
    time: "...",
    location: "...",
    category: "...",
    description: "...",
    registrationUrl: "..."
  }
];
```

Similar data structures should exist for:

- Opportunities
- Resources
- Blog posts
- Podcast episodes
- Spotlights
- Team members

Keep editable content centralized so Operations can update the site without editing repeated HTML across multiple pages.

Document any content-editing workflow clearly in the project README.

---

# 19. Technical Requirements

Preserve the existing technical approach unless a change is clearly necessary.

Prefer:

- Static HTML pages
- Shared CSS
- Lightweight vanilla JavaScript
- No unnecessary build tools
- No heavy frameworks

Requirements:

- Reuse shared layout elements such as header, footer, and navigation
- Avoid duplicating large blocks of HTML across pages
- Keep JavaScript focused on rendering, filtering, and interaction
- Preserve existing external links and integrations where still valid
- Maintain compatibility with the current deployment setup

Do not introduce a CMS, database, or backend unless explicitly requested.

---

# 20. File Structure & Architecture

Organize the project in a maintainable way.

Suggested structure:

```text
index.html
about.html
events.html
opportunities.html
resources.html
get-involved.html
team.html
blog.html
contact.html
css/styles.css
js/data.js
js/main.js
images/
README.md
```

Requirements:

- Shared styles belong in one CSS file unless there is a strong reason to split them
- Shared site logic belongs in one JavaScript file
- Editable content should live in a dedicated data file
- Images should be stored in an `images/` directory
- Each page should have a clear purpose and unique title/meta description

The architecture should make future updates straightforward for both developers and Operations.

---

# 21. SEO & Metadata

Each page should include appropriate metadata.

Include:

- Unique page title
- Meta description
- Logical heading hierarchy
- Descriptive link text
- Meaningful page structure

Homepage metadata should clearly identify:

- Women in STEM
- Western University
- Community, events, opportunities, and resources

Avoid duplicate or empty titles/descriptions across pages.

Use human-readable URLs and filenames where possible.

---

# 22. Performance

The site should feel fast and lightweight.

Requirements:

- Avoid unnecessary JavaScript
- Optimize images before adding them to the repo
- Minimize render-blocking resources where practical
- Keep page weight reasonable for mobile users
- Prefer simple static rendering over complex client-side logic

Do not sacrifice accessibility or maintainability for minor performance gains.

---

# 23. Deployment

The site should remain easy to deploy and update.

Requirements:

- Preserve the existing Vercel deployment workflow if already configured
- Any push to `main` should continue to trigger deployment if that is the current setup
- Avoid adding build steps unless they provide clear value
- Document how to preview the site locally in the README

Local preview options may include:

- Opening HTML files directly in a browser when appropriate
- Running a simple local static server for multi-page navigation

---

# 24. External Integrations & Links

Preserve and correctly wire existing external destinations.

Important links may include:

- Western Link membership page
- Director application form
- Public club email
- Social media profiles
- External opportunity and resource URLs

Requirements:

- External links should open appropriately and safely
- Use `target="_blank"` with `rel="noopener noreferrer"` where needed
- Do not leave placeholder `#` links in production-facing CTAs unless clearly marked as temporary
- Contact forms may remain front-end only initially, but the README should explain how to connect them later if needed

If an integration already exists and works, preserve it.

---

# 25. Testing & Quality Assurance

Before considering the update complete, verify the site thoroughly.

Test on:

- Desktop
- Tablet
- Mobile

Verify:

- Navigation works on all pages
- Mobile menu opens and closes correctly
- All primary CTAs link to the correct destinations
- Event, opportunity, resource, blog, and team content render correctly
- Filters and search work where implemented
- Forms are usable and accessible
- Footer and header are consistent sitewide
- No obvious layout breakage at common breakpoints
- No console errors during normal browsing

Also confirm that expired opportunities are hidden from active listings and that past events remain archived rather than deleted.

---

# 26. Definition of Done

The website update is complete when all of the following are true:

## Structure & Pages

- [ ] All required pages exist and are linked in navigation/footer
- [ ] Home, About, Events, Opportunities, Resources, Get Involved, Blog & Podcast, Team, and Contact are implemented
- [ ] Existing working functionality has been preserved where appropriate

## Content & Features

- [ ] Events display upcoming and archived past events
- [ ] Opportunities hub supports active listings and category filtering
- [ ] Resources are organized and searchable/scannable
- [ ] Team page presents members clearly with photo, name, role, and bio
- [ ] Blog, podcast, and spotlight content areas exist and are maintainable
- [ ] Get Involved pathways are clear for members, team applicants, mentors, and partners

## Design & UX

- [ ] Visual design is cohesive and aligned with the WIS brand
- [ ] Card layouts are consistent across content types
- [ ] Site feels modern, welcoming, and student-focused
- [ ] Responsive layouts work on mobile, tablet, and desktop

## Accessibility & Quality

- [ ] Semantic HTML and heading hierarchy are correct
- [ ] Keyboard navigation and focus states work
- [ ] Images have meaningful alt text
- [ ] Color contrast is sufficient
- [ ] Forms and buttons are accessible and descriptive

## Maintainability & Deployment

- [ ] Content is structured for easy Operations updates
- [ ] Shared CSS/JS architecture is clean and documented
- [ ] README explains how to edit content and deploy
- [ ] Site is ready to deploy through the existing workflow

---

## Final Instruction

Begin by inspecting the existing codebase and website.

Then implement the requirements above incrementally and carefully, preserving what already works well.

Prioritize:

1. Information architecture and navigation
2. Core pages and shared layout
3. Data-driven content structure
4. Visual polish and responsiveness
5. Accessibility and final QA

Do not rebuild the site unnecessarily. Improve, extend, and refine the existing foundation into a polished, maintainable Women in STEM website that serves students, members, partners, and the Operations team.
