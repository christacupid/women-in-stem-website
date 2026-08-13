/* Women in STEM — site data (edit content here)
 *
 * Content workflow:
 * - Add events to events.upcoming / events.past (see field structure on each event object)
 * - Add blogPosts and podcastEpisodes (omit entries without a title from public arrays)
 * - Internal planning items go in contentPlanning — not rendered on the site
 * - Set directorApplication.url when the application form is available
 * - Set links.social[].url when verified social/content URLs are available
 */

const WIS_DATA = {
  site: {
    name: "Women in STEM",
    university: "Western University",
    location: "Western University · London, Ontario",
    disclaimer: "A student-run club, not officially affiliated with the University Students' Council.",
    /* Used in footer — matches existing approved homepage messaging */
    missionStatement: "Empowering women and gender-diverse students in STEM through community, mentorship, research exposure, and connection.",
    westernUrl: "https://www.uwo.ca",
  },

  links: {
    membership: {
      url: "https://westernusc.store/product/western-women-in-stem/",
    },
    email: "wistem@uwo.ca",
    logo: "images/logo/classic_logo.jpg",
    social: [
      { label: "Instagram", url: "https://www.instagram.com/womeninstemuwo?igsh=MWI1dnM4aWpiNDBseQ==" },
      { label: "TikTok", url: "https://www.tiktok.com/@womeninstemuwo?_r=1&_t=ZS-98oM8sHvwZg" },
      { label: "Linktree", url: "https://linktr.ee/womeninstemuwo?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAToyLpwZG9mAmZkaWQWUMUscpHmFch5y12ZM6RQW25-I5qaSWV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp9j5Xw4RovcgEstEcTXzqZd5N5Ly6oultEcqfYOuXoVR-c0yu4q6f2jX3QbQ_aem_pirGOI3-ybRkwZPzigy04g" },
      { label: "Blog", url: "https://wisblog.wixsite.com/womeninstemuwo" },
      { label: "Podcast", url: "https://open.spotify.com/show/0KyHgRbSzHDQeWoWzHN5fI?si=KnLN4_msQte2SLHCv2bA-g&utm_source=sms" },
    ],
  },

  directorApplication: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfhHqSnD1xELi9TGU_al4bUXUhI8O9QSYDUBMaWuMVnZxCCrw/viewform?usp=publish-editor",
    status: "open",
    title: "Director Applications",
    timing: "Applications open in September",
  },

  stats: [
    { num: "450+", label: "Members across faculties" },
    { num: "30+", label: "Events run each year" },
    { num: "60", label: "Mentorship pairs this term" },
    { num: "12", label: "Partner labs & companies" },
  ],

  hero: {
    headline: "More women at the <em>bench</em>, the <em>board</em>, and the <em>blackboard</em>.",
    lede: "Women in STEM is a student-run community at Western University for women and gender-diverse students in science, technology, engineering, and math - built on mentorship, research exposure, and a place to belong.",
  },

  mission: {
    eyebrow: "Why we exist",
    title: "STEM is better with more voices in the room.",
    description: "We close gaps in representation, confidence, and access - not with one big event, but with steady, ongoing support across a student's whole degree.",
  },

  pillars: [
    {
      label: "01 - MENTORSHIP",
      title: "Upper-year & alumnae pairing",
      description: "First and second-year students are matched with upper-year mentors in their field for course advice, research leads, and the occasional reality check.",
    },
    {
      label: "02 - RESEARCH ACCESS",
      title: "Lab tours & PI talks",
      description: "Direct lines into Western labs and research groups, plus panels with faculty who'll tell you what their field actually looks like day to day.",
    },
    {
      label: "03 - SKILLS",
      title: "Workshops that fill the gaps",
      description: "Technical interview prep, Python and R bootcamps, grant-writing, and negotiation workshops - the unwritten-curriculum stuff.",
    },
    {
      label: "04 - COMMUNITY",
      title: "A floor, not a ceiling",
      description: "Study halls, social nights, and a Slack that's active at 11pm before a problem set is due. You're never doing this degree alone.",
    },
  ],

  events: {
    upcoming: [
      {
        title: "Development + CI Study Sessions",
        category: "Academic",
        date: "Ongoing biweekly beginning September 17, 2026",
        dateShort: "SEP 17+",
        time: "12:00–2:00 PM",
        location: "Taylor or Weldon study room — exact room TBD",
        description: "Biweekly study sessions providing members with a dedicated space to work on coursework, collaborate with peers, and build connections within the WIS community. Some sessions may feature themes such as MCAT preparation.",
        purpose: null,
        registrationUrl: null,
        status: null,
        notes: null,
      },
      {
        title: "BSLS — Little Applications Open",
        category: "Mentorship",
        date: "September 21–27, 2026",
        dateShort: "SEP 21–27",
        time: null,
        location: "Online",
        description: "Forms go online for Littles to apply for the mentorship program.",
        purpose: null,
        registrationUrl: null,
        status: null,
        notes: "Pairings are expected to be released by email October 5, 2026.",
      },
      {
        title: "Bracelet Making Social",
        category: "Social",
        date: "October 7, 2026",
        dateShort: "OCT 7",
        time: null,
        location: "Weldon Community Room or UCC Community Room — exact location TBD",
        description: "Members can choose charms and make bracelets for themselves while connecting with the WIS community.",
        purpose: null,
        registrationUrl: null,
        status: null,
        notes: "$5 for non-members.",
      },
      {
        title: "Suture Clinic",
        category: "Professional Development / Healthcare",
        date: "October 7, 2026",
        dateShort: "OCT 7",
        time: "6:00 PM",
        location: "UC Room — exact room TBD",
        description: "A hands-on workshop where participants learn and practice basic suturing techniques under the guidance of trained instructors. The session introduces foundational clinical skills and provides an opportunity to explore healthcare careers.",
        purpose: null,
        registrationUrl: null,
        status: null,
        notes: "Potential collaboration with Pre-Med society / Medical School Fair — not confirmed.",
      },
      {
        title: "Classroom Visits — Toronto Trip Promotion",
        category: "Professional Development",
        date: "October 26–30, 2026",
        dateShort: "OCT 26–30",
        time: null,
        location: "Western University classrooms / STEM lecture halls",
        description: "WIS Events VPs and Directors will visit STEM lecture halls to introduce students to the Toronto Trip, explain the trip and its benefits, and encourage students to sign up.",
        purpose: null,
        registrationUrl: null,
        status: "Exact classroom schedule TBD",
        notes: null,
      },
      {
        title: "Toronto Trip",
        category: "Professional Development / Networking",
        date: "November 2026 — date to be announced",
        dateShort: "NOV TBA",
        time: null,
        location: "Toronto, Ontario, including locations surrounding the MaRS Discovery District",
        description: "A full-day experience where approximately 100 selected WIS members from various STEM programs travel to Toronto to visit firms, laboratories, hospitals, and research facilities. Students can network with professionals, connect with other STEM students, and explore diverse STEM careers.",
        purpose: "Career exploration, professional development, networking, and exposure to diverse STEM career paths.",
        registrationUrl: null,
        status: "Date TBA — potential dates November 20 or November 27, 2026",
        notes: null,
      },
      {
        title: "Puppy Yoga",
        category: "Wellness / Social",
        date: "November 19, 2026",
        dateShort: "NOV 19",
        time: null,
        location: "UCC Community Room",
        description: "A wellness event featuring puppy yoga sessions designed to give members a fun opportunity to relax and recharge during the academic term.",
        purpose: null,
        registrationUrl: null,
        status: null,
        notes: null,
      },
      {
        title: "Coffee & Croissants",
        category: "Professional Development / Networking",
        date: "Late November–early December 2026 — exact date TBD",
        dateShort: "LATE NOV",
        time: null,
        location: "Mustang Lounge or another Western University location — TBD",
        description: "A career-focused networking event where members can ask WIS executives and experienced students about internships, research, networking, interviews, coffee chats, career paths, and university experiences.",
        purpose: "Research & Internship Opportunities / Student Experiences",
        registrationUrl: null,
        status: "Date TBD",
        notes: null,
      },
      {
        title: "Coco & Cram",
        category: "Academic / Social",
        date: "December 2026 — exact date TBD",
        dateShort: "DEC TBA",
        time: null,
        location: "Western University classroom — exact room TBD",
        description: "A cozy study-room social where members can study, connect with senior executives and other WIS members, and enjoy a festive atmosphere.",
        purpose: null,
        registrationUrl: null,
        status: "Date TBD",
        notes: null,
      },
      {
        title: "How to Case Comp Workshop",
        category: "Professional Development",
        date: "Approximately one week before the case competition — exact date TBD",
        dateShort: "FEB/MAR TBA",
        time: null,
        location: "Small lecture room or Zoom — TBD",
        description: "A workshop introducing participants to case competition fundamentals, how to approach a case, and what to expect during the competition.",
        purpose: null,
        registrationUrl: null,
        status: "Potential dates: February 28 or March 7, 2027",
        notes: null,
      },
      {
        title: "24-Hour WeSolve Case Competition",
        category: "Professional Development / Competition",
        date: "March 2027 — exact date TBD",
        dateShort: "MAR 2027",
        time: null,
        location: "Western University — exact rooms TBD",
        description: "A beginner-level case competition where WIS members work in teams to develop a solution to a case and present it to a panel of judges. The experience will also include speakers and workshops focused on networking, case competition skills, and LinkedIn development.",
        purpose: null,
        registrationUrl: null,
        status: "Potential dates: March 6–7 or March 13–14, 2027",
        notes: null,
      },
      {
        title: "Coffee & Croissants — Semester 2",
        category: "Professional Development",
        date: "February/March 2027 — exact date TBD",
        dateShort: "FEB/MAR 2027",
        time: null,
        location: "Western University room — TBD",
        description: "A semester-two Coffee & Croissants event focused on ITR-related questions, student experiences, and career/academic conversations with WIS executives.",
        purpose: null,
        registrationUrl: null,
        status: "Date TBD",
        notes: null,
      },
    ],
    past: [],
  },

  /* Add verified opportunities here when available */
  opportunities: [],

  opportunityCategories: [
    "Scholarships",
    "Research",
    "Internships",
    "Jobs",
    "Conferences",
    "Volunteer Opportunities",
    "External STEM Organizations",
  ],

  opportunityIntro: "Women in STEM will use this page to share verified scholarships, research positions, internships, jobs, conferences, and volunteer opportunities for members.",

  /* Add verified resources here when available */
  resources: {
    academic: [],
    career: [],
    stem: [],
    wellbeing: [],
  },

  resourceCategories: [
    { key: "academic", label: "Academic", blurb: "Study resources, course support, and academic tools for STEM students." },
    { key: "career", label: "Career", blurb: "Resume, interview, networking, and career development resources." },
    { key: "stem", label: "STEM", blurb: "Research organizations, professional groups, conferences, and funding information." },
    { key: "wellbeing", label: "Community & Well-being", blurb: "Campus support, mentorship, and student well-being resources." },
  ],

  /* Value titles for layout — descriptions to be added when provided */
  values: [
    { title: "Community", description: null },
    { title: "Empowerment", description: null },
    { title: "Inclusion", description: null },
    { title: "Curiosity", description: null },
    { title: "Collaboration", description: null },
    { title: "Growth", description: null },
  ],

  about: {
    whoWeAre: "Women in STEM is a student-run community at Western University for women and gender-diverse students in science, technology, engineering, and math - built on mentorship, research exposure, and a place to belong.",
    whyWis: null,
  },

  /* Blog posts — add listeningUrl when published externally */
  blogPosts: [
    {
      title: "Scholarships",
      author: "Finance",
      date: "September 18, 2026",
      category: "Financial Resources",
      description: "A guide to scholarship opportunities and resources for students.",
      status: "Planned",
    },
    {
      title: "Ways to Stay Active During the School Year",
      author: "Operations",
      date: "September 22, 2026",
      category: "Student Life / Wellness",
      description: "A guide to staying active during a busy school year, including Western resources, gym and intramural opportunities, and outdoor activities.",
      status: "Planned",
    },
    {
      title: "I Want to Switch Programs",
      author: "Operations",
      date: "October 20, 2026",
      category: "Academic / Student Support",
      description: "A guide for students considering changing programs, including questions to consider and where to seek guidance.",
      status: "Planned",
    },
    {
      title: "Standardized Testing Series",
      author: "Development",
      date: "November 3, 2026",
      category: "Academic / Career",
      description: "A planned content series related to standardized testing.",
      status: "Planned",
    },
    {
      title: "Investments",
      author: "Finance",
      date: "November 10, 2026",
      category: "Financial Resources",
      description: "An educational introduction to investing.",
      status: "Planned",
    },
    {
      title: "Volunteer Opportunities in London",
      author: "Operations",
      date: "November 17, 2026",
      category: "Opportunities",
      description: "A guide to volunteer opportunities in London and how students can find and apply for opportunities.",
      status: "Planned",
    },
  ],

  /* Public podcast episodes only — omit entries without a title/topic */
  podcastEpisodes: [
    {
      title: "The Art of Teaching with Dr. Derek McLachlin",
      host: "Audrey",
      date: "September 29, 2026",
      category: "Career / Academia",
      description: "An exploration of Dr. Derek McLachlin's journey from research scientist to educator, how his biochemical research background shaped his teaching approach, and his interest in the scholarship of teaching and learning.",
      status: "Recorded",
      listeningUrl: null,
    },
    {
      title: "Sophing...",
      host: "Julia",
      date: "October 27, 2026",
      category: "Student Life / Leadership",
      description: "An episode exploring the experience of being a Soph, how students can apply, and why the role can be an impactful way to get involved on campus.",
      status: "Planned",
      listeningUrl: null,
    },
    {
      title: "Standardized Testing Series",
      host: "Development",
      date: "November 3, 2026",
      category: "Academic / Career",
      description: "Planned podcast content related to standardized testing.",
      status: "Planned",
      listeningUrl: null,
    },
  ],

  spotlights: [],

  /* Internal content planning — not rendered on public pages */
  contentPlanning: {
    podcast: [
      {
        releaseDate: "November 24, 2026",
        status: "Planned",
        topic: null,
      },
    ],
  },

  applications: [
    {
      department: "Marketing",
      title: "Director of Marketing",
      description: "Lead campaigns, social media, and brand outreach for the club.",
    },
    {
      department: "Operations",
      title: "Director of Operations",
      description: "Help run day-to-day club logistics, planning, and internal coordination.",
    },
    {
      department: "Finance",
      title: "Director of Finance",
      description: "Manage budgets, funding requests, and financial reporting for the team.",
    },
  ],

  /* Homepage team preview — first N members shown on index.html (full roster stays in team[]) */
  teamPreviewCount: 5,


team: [
    {
      group: "Leadership",
      members: [
        { name: "Kathryn Medeiros", role: "Co-President", initials: "K.M." },
        { name: "Stephanie Vieriu", role: "Co-President", initials: "S.V." },
        { name: "Christa Cupid", role: "Senior Advisor", initials: "C.C." },
      ],
    },
    {
      group: "Events",
      members: [
        { name: "Haley Lam", role: "VP of Events", initials: "H.L." },
        { name: "Thea Farruggio", role: "Co-VP of Events", initials: "T.F." },
      ],
    },
    {
      group: "Finance",
      members: [
        { name: "Sia Andros", role: "Co-VP Finance", initials: "S.A." },
        { name: "Elle Coene", role: "Co-VP Finance", initials: "E.C." },
      ],
    },
    {
      group: "Operations",
      members: [
        { name: "Audrey Tsang", role: "Co-VP of Operations", initials: "A.T." },
        { name: "Julia Wills", role: "Co-VP of Operations", initials: "J.W." },
      ],
    },
    {
      group: "Marketing",
      members: [
        { name: "Emily Kenoski", role: "Co-VP Marketing", initials: "E.K." },
        { name: "Lucy Pavlovic", role: "Co-VP Marketing", initials: "L.P." },
      ],
    },
    {
      group: "Development",
      members: [
        { name: "Madison Ruddy", role: "Co-VP Development", initials: "M.R." },
        { name: "Hailey Liu", role: "Co-VP of Developments", initials: "H.L." },
      ],
    },
    {
      group: "Community Inclusion",
      members: [
        { name: "Ashley Oswald", role: "VP Community Inclusion", initials: "A.O." },
        { name: "Mufliha Fatimah Said", role: "VP Community Inclusion", initials: "M.S." },
      ],
    },
  ],
};
