import './style.css'
import profilePic from './assets/ems_square.png'

document.querySelector('#app').innerHTML = `
<nav>
  <span class="nav-logo">marga<span>.dev</span></span>
  <ul class="nav-links">
    <li><a href="#home">top</a></li>
    <li><a href="#about">about</a></li>
    <li><a href="#projects">projects</a></li>
    <li><a href="#skills">skills</a></li>
    <li><a href="#contact">contact</a></li>
  </ul>
</nav>

<section id="home" class="hero">
  <div class="hero-left">
    <p class="hero-eyebrow">CS Student & Developer</p>
    <h1 class="hero-name">Hi, I'm Marga.</h1>
    <p class="hero-sub">I build things <span>that work.</span></p>
    <p class="hero-bio">From deployed AI chatbots to hardware I had to wire myself — I'm a CS student at Mapúa MCM who builds practical systems and figures out the rest along the way.</p>
    <div class="hero-cta">
      <a class="btn btn-primary" href="#projects">View Projects <i class="ti ti-arrow-down"></i></a>
      <a class="btn btn-ghost" href="https://github.com/vennDiagramm" target="_blank"><i class="ti ti-brand-github"></i> GitHub</a>
      <a class="btn btn-ghost" href="https://www.linkedin.com/in/marga-pilapil-013a17298" target="_blank"><i class="ti ti-brand-linkedin"></i> LinkedIn</a>
    </div>
  </div>
  <div class="hero-right">
    <img src="${profilePic}" alt="Marga Pilapil" class="hero-img" />
  </div>
</section>

<section id="projects" class="container">
  <div class="section-label">Projects</div>
  <div class="project-grid">

    <div class="project-card reveal">
      <div class="project-top">
        <span class="project-title">AskWhiz — Institutional Knowledge Chatbot</span>
        <span class="badge">Thesis</span>
      </div>
      <p class="project-desc">
        Conducted a comparative study evaluating nine RAG configurations — combining Basic RAG, Prompt-Engineered RAG, and Hybrid RAG with GPT-4o-mini, Gemini 2.5 Flash, and Claude Haiku 4.5 — on 50 validated institutional QA pairs. Statistical analysis via one-way ANOVA and Tukey HSD identified Hybrid RAG + Claude Haiku 4.5 as the top configuration, achieving a RAGAS score of 0.7713, Faithfulness of 0.9758, and the lowest variance across all setups. Deployed as a live web chatbot on Render answering student and applicant queries about MMCM policies, admissions, and enrollment.
      </p>
      <div class="tags">
        <span class="tag">FastAPI</span>
        <span class="tag">Anthropic API</span>
        <span class="tag">FAISS</span>
        <span class="tag">Amazon OpenSearch</span>
        <span class="tag">BM25</span>
        <span class="tag">RAGAS</span>
        <span class="tag">Render</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/vennDiagramm/AskWhiz" target="_blank" class="project-link"><i class="ti ti-brand-github"></i> GitHub</a>
      </div>
    </div>

    <div class="project-card reveal">
      <div class="project-top">
        <span class="project-title">AI Chatbot Evolution — MMCMate+ & Margatron</span>
      </div>
      <p class="project-desc">
        Two generations of institutional chatbots built over the course of a year. Margatron (2024) was the first — a Gemini-powered admission assistant built with Python, Streamlit, and SQLite as part of a Programming Languages course. It was the team's first deep dive into AI and NLP, and the learning curve was steep. MMCMate+ (2025) evolved that foundation into a full multilingual policy chatbot with session management, fuzzy input handling, and language detection. A companion Node.js admin panel lets staff manage the knowledge base without touching code, with the database hosted on PostgreSQL.
      </p>
      <div class="tags">
        <span class="tag">Python</span>
        <span class="tag">LangChain</span>
        <span class="tag">Gemini API</span>
        <span class="tag">Streamlit</span>
        <span class="tag">Node.js</span>
        <span class="tag">PostgreSQL</span>
        <span class="tag">SQLite</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/vennDiagramm/MMCMate_PLUS_An-AI-Chatbot-for-Comprehensive-School-Policy-Assistance" target="_blank" class="project-link"><i class="ti ti-brand-github"></i> MMCMate+</a>
        <a href="https://github.com/vennDiagramm/MMCMate-Management-Site" target="_blank" class="project-link"><i class="ti ti-brand-github"></i> Admin Panel</a>
        <a href="https://github.com/vennDiagramm/Group-4-System-Margatron-Admissions-Buddy" target="_blank" class="project-link"><i class="ti ti-brand-github"></i> Margatron</a>
      </div>
    </div>

    <div class="project-card reveal">
      <div class="project-top">
        <span class="project-title">Monterde Apartments Management System</span>
      </div>
      <p class="project-desc">
        Full-stack web-based property management system for Monterde Apartments covering tenant management, room allocation, payment tracking, and data visualization for occupancy and revenue analytics. Built with a RESTful Node.js/Express.js backend, MySQL database, and a dynamic frontend using Bootstrap and JavaScript. Handled deployment to Render, database connection setup, and the complete room management module.
      </p>
      <div class="tags">
        <span class="tag">Node.js</span>
        <span class="tag">Express.js</span>
        <span class="tag">MySQL</span>
        <span class="tag">Bootstrap</span>
        <span class="tag">JavaScript</span>
        <span class="tag">Render</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/vennDiagramm/Monterde_Apartments_Dormitory-Manager" target="_blank" class="project-link"><i class="ti ti-brand-github"></i> GitHub</a>
      </div>
    </div>

    <div class="project-card reveal">
      <div class="project-top">
        <span class="project-title">Kitchen Sentinel — Smart Stove & Gas Leak Alert System</span>
      </div>
      <p class="project-desc">
        IoT-based kitchen safety prototype targeting elderly users living alone. Uses an ESP32 microcontroller with MQ-2 gas sensors, flame/temperature sensors, and PIR motion sensors to monitor kitchen conditions in real time. When hazards are detected — high gas concentration or an unattended active stove — the system triggers buzzer/LED alerts and sends remote notifications to caregivers. Focused on affordability and accessibility over full automation. Led ESP32 backend development, system debugging, and full hardware assembly including wiring and housing.
      </p>
      <div class="tags">
        <span class="tag">ESP32</span>
        <span class="tag">Arduino</span>
        <span class="tag">MQ-2 Sensor</span>
        <span class="tag">PIR Sensor</span>
        <span class="tag">IoT</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/vennDiagramm/Kitchen_Sentinel_Smart_Stove_and_Gas_Leak_Alert_System" target="_blank" class="project-link"><i class="ti ti-brand-github"></i> GitHub</a>
      </div>
    </div>

  </div>

  <div class="section-sublabel">Other Projects</div>
  <div class="project-grid-small">

    <div class="project-card-small reveal">
      <div class="project-top">
        <span class="project-title-small">Galactic Eco Guardians</span>
        <span class="project-date">Mar 2024</span>
      </div>
      <p class="project-desc-small">A Space Invaders-inspired game built with Python Turtle, focused on file handling. One of the first projects — simple, but it started everything.</p>
      <div class="tags">
        <span class="tag">Python</span>
        <span class="tag">Turtle</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/vennDiagramm/Galactic-Eco-Guardians" target="_blank" class="project-link"><i class="ti ti-brand-github"></i> GitHub</a>
      </div>
    </div>

    <div class="project-card-small reveal">
      <div class="project-top">
        <span class="project-title-small">EGD Management System</span>
        <span class="project-date">Jun 2024</span>
      </div>
      <p class="project-desc-small">Java-based dormitory management system for adding, viewing, deleting, and saving records with report generation. Built with Java Swing across 8 connected files using arrays and action listeners.</p>
      <div class="tags">
        <span class="tag">Java</span>
        <span class="tag">Java Swing</span>
        <span class="tag">OOP</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/vennDiagramm/EGD-Management-System" target="_blank" class="project-link"><i class="ti ti-brand-github"></i> GitHub</a>
      </div>
    </div>

  </div>

  <div class="github-more reveal">
    <a href="https://github.com/vennDiagramm" target="_blank" class="btn btn-ghost"><i class="ti ti-brand-github"></i> View all projects on GitHub</a>
  </div>

</section>

<section id="skills" class="container">
  <div class="section-label">Skills</div>
  <div class="skills-grid">
    <div class="skill-block reveal"><div class="skill-label">Languages</div><div class="skill-val">Python, JavaScript, Java, C/C++, C#, HTML, CSS</div></div>
    <div class="skill-block reveal"><div class="skill-label">Frameworks</div><div class="skill-val">Node.js, FastAPI, LangChain, Streamlit, Express.js, Bootstrap</div></div>
    <div class="skill-block reveal"><div class="skill-label">AI & ML</div><div class="skill-val">RAG, LLM APIs, Prompt Engineering, NLP, Amazon Bedrock</div></div>
    <div class="skill-block reveal"><div class="skill-label">Cloud & DB</div><div class="skill-val">AWS, MySQL, PostgreSQL, Amazon OpenSearch, Render</div></div>
    <div class="skill-block reveal"><div class="skill-label">Tools</div><div class="skill-val">Git, GitHub, Arduino, ESP32, Figma, REST APIs</div></div>
    <div class="skill-block reveal"><div class="skill-label">Certifications</div><div class="skill-val">AWS AI Practitioner, IT Specialist Data Analytics, MOS Excel</div></div>
  </div>
</section>

<section id="about" class="container">
  <div class="section-label">About</div>
  <p class="about-text reveal">
    I'm a 3rd year CS student at <strong>Mapúa Malayan Colleges Mindanao</strong>, currently finishing my undergraduate thesis on RAG systems for institutional knowledge. <strong>President's Lister</strong> and consistent Dean's Lister.<br><br>
    I'm drawn to AI systems and backend work — the kind of problems where you have to actually understand what's happening under the hood. Outside of code, I try to stay human about it.
  </p>
  <div class="personal-row">
    <div class="personal-chip reveal"><i class="ti ti-music"></i> Music</div>
    <div class="personal-chip reveal"><i class="ti ti-guitar-pick"></i> Bass</div>
    <div class="personal-chip reveal"><i class="ti ti-ball-basketball"></i> Basketball</div>
    <div class="personal-chip reveal"><i class="ti ti-ball-football"></i> Football</div>
    <div class="personal-chip reveal"><i class="ti ti-device-gamepad-2"></i> Video Games</div>
    <div class="personal-chip reveal"><i class="ti ti-book"></i> Reading</div>
  </div>
</section>

<section id="contact" class="container">
  <div class="section-label">Contact</div>
  <p class="contact-intro reveal">I'm currently open to OJT opportunities and interesting projects. Feel free to reach out.</p>
  <div class="contact-links reveal">
    <a class="btn btn-primary" href="mailto:margagpilapil@gmail.com"><i class="ti ti-mail"></i> margagpilapil@gmail.com</a>
    <a class="btn btn-ghost" href="https://www.linkedin.com/in/marga-pilapil" target="_blank"><i class="ti ti-brand-linkedin"></i> LinkedIn</a>
    <a class="btn btn-ghost" href="https://github.com/vennDiagramm" target="_blank"><i class="ti ti-brand-github"></i> GitHub</a>
    <a class="btn btn-ghost" href="https://www.credly.com/users/marga-pilapil" target="_blank"><i class="ti ti-award"></i> Credly</a>
  </div>
</section>

<footer>built by marga · 2026</footer>
`

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))