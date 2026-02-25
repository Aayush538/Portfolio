

/* --- DATA CONFIGURATION --- */

const skillsData = [
  {
    id: "networking",
    title: "Networking",
    desc: "Enterprise LAN/WAN, VLANs, Routing (OSPF/BGP), VPNs, HA",
    modalDesc: "Enterprise networking setup including Routing, Firewalls, and High Availability.",
    iconType: "class",
    icon: ["fa-solid", "fa-network-wired"]
  },
  {
    id: "security",
    title: "Security Ops",
    desc: "Firewalls, IDS/IPS, Endpoint Security, Access Control",
    modalDesc: "Maintaining system security and access controls using cutting-edge endpoint and perimeter security.",
    iconType: "class",
    icon: ["fa-solid", "fa-shield-halved"]
  },
  {
    id: "systems",
    title: "Systems & Virtualization",
    desc: "Windows Server, AD, Nutanix, Hyper V, Proxmox VE",
    modalDesc: "Extensive experience with virtualizing hardware environments and managing Active Directory.",
    iconType: "class",
    icon: ["fa-solid", "fa-server"]
  },
  {
    id: "database",
    title: "Database Admin",
    desc: "Microsoft SQL Server, SSMS, Backup & Restore",
    modalDesc: "Experience with data storage, querying, reporting, and disaster recovery.",
    iconType: "class",
    icon: ["fa-solid", "fa-database"]
  },
  {
    id: "monitoring",
    title: "Monitoring",
    desc: "Prometheus, Grafana, Nagios, Wazuh",
    modalDesc: "Implementation of multi-server observability logic to maintain 24/7 reliability.",
    iconType: "image",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg"
  },
  {
    id: "scripting",
    title: "Scripting",
    desc: "PowerShell & Automation Scripts",
    modalDesc: "Developing custom monitoring and remediation scripts for automatic issue resolution.",
    iconType: "class",
    icon: ["fa-solid", "fa-terminal"]
  },
  {
    id: "programming",
    title: "Programming",
    desc: "Python, Java",
    modalDesc: "Using high-level languages for scripting and application development.",
    iconType: "class",
    icon: ["fa-brands", "fa-python"]
  }
];

const projectsData = [
  {
    link: "#",
    image: "images/devops.png",
    title: "Multi-Server Infrastructure Monitoring System",
    description: "Designed and implemented Prometheus & Grafana for monitoring of multi-server infrastructure to track CPU, memory, disk, and availability.",
    tech: ["Prometheus", "Grafana", "Linux"],
    buttons: [
      { text: "View Details", link: "#", icon: ["fa-solid", "fa-file-alt"] }
    ]
  },
  {
    link: "#",
    image: "images/devops.png",
    title: "PowerShell Automation & Incident Response",
    description: "Developed PowerShell automation to monitor CPU usage and trigger alerts and service restarts at critical thresholds.",
    tech: ["PowerShell", "Automation", "Windows Server"],
    buttons: [
      { text: "View Details", link: "#", icon: ["fa-solid", "fa-file-alt"] }
    ]
  },
  {
    link: "#",
    image: "images/devops.png",
    title: "AD & DNS High-Availability Lab",
    description: "Built a multi-server lab with dual AD/DNS servers and separate networks, configured pfSense NAT, and integrated Wazuh.",
    tech: ["AD", "DNS", "pfSense", "Wazuh"],
    buttons: [
      { text: "View Details", link: "#", icon: ["fa-solid", "fa-file-alt"] }
    ]
  }
];

const blogsData = [
  {
    date: "February 01, 2026",
    title: "Mask Attack vs Brute Force: Efficiency in Cracking",
    excerpt: "Why mask attacks are more efficient than brute force when cracking passwords with known patterns.",
    link: "blogs/mask-attack-vs-brute-force.html"
  }
];

const experienceData = [
  {
    title: "Information Technology Assistant",
    company: "Yeti Airlines Ltd",
    link: "https://www.yetiairlines.com/",
    type: "Full-time",
    duration: "December 2022 - Present",
    description: [
      "Designed and deployed automated backup workflows and centralized monitoring with alerts.",
      "Administered and maintained AD, including user access, group policies, and authentication.",
      "Managed and optimized networks, servers & firewall ensuring security and HA.",
      "Performed incident resolution and root-cause analysis, reducing recurring system issues.",
      "Developed SQL-based operational reports for internal teams."
    ]
  },
  {
    title: "Business Development Intern",
    company: "Yeti Airlines Ltd",
    link: "https://www.yetiairlines.com/",
    type: "Internship",
    duration: "July 2022 - October 2022",
    description: [
      "Conducted market and competitor analysis while managing vendor and OTA data reporting to support commercial strategy and pricing decisions."
    ]
  }
];

const certificatesData = [
  {
    link: "#",
    title: "Oracle Certified Networking Professional",
    certifiedTag: true,
    issuer: "Oracle",
    date: "October 29, 2027",
    image: "images/Oracle Certified Networking Professionals.png"
  },
  {
    link: "#",
    title: "Certified Social Engineering Defense Practitioner (CSEDP)",
    certifiedTag: true,
    issuer: "The SecOps Group",
    date: "No Expiration",
    image: "images/Certified Social Engineering Defense Practitioner (CSEDP).png."
  },
  {
    link: "#",
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    certifiedTag: true,
    issuer: "Red Team Leaders",
    date: "No Expiration",
    image: "images/Certified Cybersecurity Educator Professional (CCEP).png"
  },
  {
    link: "#",
    title: "Fortinet NSE 1 & NSE 2",
    certifiedTag: true,
    issuer: "Fortinet",
    date: "No Expiration",
    image: "images/Fortinet NSE1.png"
  },
  {
    link: "#",
    title: "Cisco Ethical Hacker",
    certifiedTag: true,
    issuer: "Cisco",
    date: "No Expiration",
    image: "images/Cisco Ethical Hacker.png"
  },
  {
    link: "#",
    title: "CompTIA Security+ Training",
    certifiedTag: true,
    issuer: "kodeKloud",
    date: "No Expiration",
    image: "images/Compti security+ Training.png"
  }
];

const contactsData = [
  {
    link: "https://www.linkedin.com/in/aayushprajapati0901/",
    icon: ["fa-brands", "fa-linkedin-in"],
    title: "LinkedIn",
    desc: "Connect with me professionally"
  },
  {
    link: "mailto:aayushprajapati538@gmail.com",
    icon: ["fa-solid", "fa-envelope"],
    title: "Email",
    desc: "Send me a message directly"
  }
];

/* --- THEME MANAGER SYSTEM --- */
const ThemeManager = {
  init() {
    const toggleBtn = document.getElementById("theme-toggle");
    const text = document.getElementById("theme-text");
    const icon = document.querySelector("#theme-toggle i");

    let theme = "dark";
    this.apply(theme);

    toggleBtn.onclick = () => {
      theme = theme === "dark" ? "light" : "dark";
      this.apply(theme);
    };
  },

  apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const icon = document.querySelector("#theme-toggle i");
    const text = document.getElementById("theme-text");

    if (theme === "dark") {
      icon.className = "fa-solid fa-sun icon";
      text.textContent = "Light Mode";
    } else {
      icon.className = "fa-solid fa-moon icon";
      text.textContent = "Dark Mode";
    }
  },
};

/* --- COMMAND PALETTE SYSTEM --- */
const CommandPalette = {
  init() {
    const overlay = document.getElementById("cmdOverlay");
    const input = document.getElementById("cmdInput");
    const list = document.getElementById("cmdList");

    const commands = [
      { name: "Go to About", shortcut: "A", action: () => CommandPalette.selectSection("about") },
      { name: "Go to Projects", shortcut: "P", action: () => CommandPalette.selectSection("projects") },
      { name: "Go to Certificates", shortcut: "C", action: () => CommandPalette.selectSection("certificates") },
      { name: "Go to Experience", shortcut: "E", action: () => CommandPalette.selectSection("experience") },
      { name: "Go to Blog", shortcut: "B", action: () => CommandPalette.selectSection("blog") },
      { name: "Go to Contact", shortcut: "@", action: () => CommandPalette.selectSection("contact") },
      { name: "Toggle Theme", shortcut: "T", action: () => document.getElementById("theme-toggle").click() },
      { name: "Download Resume", shortcut: "DL", action: () => window.open("docs/Aayush Prajapati- CV.pdf", "_blank") }
    ];

    this.selectSection = (sectionId) => {
      setActiveSection(sectionId, true);
    };

    function openPalette() {
      overlay.classList.add("open");
      input.value = "";
      input.focus();
      renderList("");
      document.body.style.overflow = "hidden";
    }

    function closePalette() {
      overlay.classList.remove("open");
      document.body.style.overflow = "auto";
    }

    function renderList(filter) {
      list.innerHTML = "";
      const filtered = commands.filter((c) =>
        c.name.toLowerCase().includes(filter.toLowerCase())
      );

      if (filtered.length === 0) {
        const noResult = document.createElement("div");
        noResult.className = "cmd-item";
        noResult.style.cursor = "default";
        noResult.style.justifyContent = "center";
        noResult.style.opacity = "0.5";
        noResult.textContent = "No commands found";
        list.appendChild(noResult);
        return;
      }

      filtered.forEach((c) => {
        const item = document.createElement("div");
        item.className = "cmd-item";
        item.innerHTML = `<span>${c.name}</span> <span class="cmd-shortcut">${c.shortcut || '↵'}</span>`;
        item.onclick = () => {
          closePalette();
          c.action();
        };
        list.appendChild(item);
      });
    }

    input.oninput = (e) => renderList(e.target.value);

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (overlay.classList.contains("open")) {
          closePalette();
        } else {
          openPalette();
        }
      }
      if (e.key === "Escape" && overlay.classList.contains("open")) {
        closePalette();
      }
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closePalette();
    });
  },
};

/* --- RENDERING FUNCTIONS --- */

function renderSkills() {
  const container = document.querySelector('.skills-grid');
  if (!container) return;
  container.innerHTML = '';

  skillsData.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('data-skill', skill.id);

    let iconHtml = '';
    if (skill.iconType === 'class') {
      iconHtml = `<i class="${skill.icon.join(' ')}"></i>`;
    } else {
      iconHtml = `<img src="${skill.icon}" alt="${skill.title}" width="48" height="48" />`;
    }

    card.innerHTML = `
      <div class="icon">${iconHtml}</div>
      <h4>${skill.title}</h4>
      <p>${skill.desc}</p>
    `;

    // Add click event for modal
    card.addEventListener("click", () => {
      const modal = document.getElementById("skillModal");
      const modalTitle = document.getElementById("modalTitle");
      const modalDescription = document.getElementById("modalDescription");
      const modalIcon = document.getElementById("modalIcon");

      // Inject the exact icon HTML string we built for the card into the modal
      modalIcon.innerHTML = iconHtml;

      modalTitle.textContent = skill.title;
      modalDescription.textContent = skill.modalDesc || skill.desc;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    container.appendChild(card);
  });
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  container.innerHTML = '';

  projectsData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';

    const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

    const buttonsHtml = project.buttons.map(btn => `
      <a href="${btn.link}" class="btn btn-primary btn-small" target="_blank" rel="noopener noreferrer">
        <i class="${btn.icon.join(' ')}"></i> ${btn.text}
      </a>
    `).join('');

    card.innerHTML = `
      <a href="${project.link}" target="_blank" rel="noopener noreferrer">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" />
        </div>
      </a>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">${techTags}</div>
        <div class="project-buttons">${buttonsHtml}</div>
      </div>
    `;

    // Add hover effect
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    container.appendChild(card);
  });
}

function renderBlogs() {
  const container = document.getElementById('blog-container');
  if (!container) return;
  container.innerHTML = '';

  blogsData.forEach(blog => {
    const card = document.createElement('article');
    card.className = 'blog-card';

    card.innerHTML = `
      <div class="blog-date">${blog.date}</div>
      <h3 class="blog-title">${blog.title}</h3>
      <p class="blog-excerpt">${blog.excerpt}</p>
      <a href="${blog.link}" class="read-more" target="_blank" rel="noopener noreferrer">Read More →</a>
    `;

    // Add hover effect
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.borderColor = "var(--highlight-color)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.borderColor = "var(--border-color)";
    });

    // Add click event
    card.addEventListener("click", function (e) {
      const readMoreLink = this.querySelector(".read-more");
      if (readMoreLink && readMoreLink.getAttribute("href") !== "#") {
        if (e.target.tagName.toLowerCase() !== "a") {
          window.open(readMoreLink.getAttribute("href"), "_blank");
        }
      }
    });

    container.appendChild(card);
  });
}

function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;

  container.className = 'experience-timeline';
  container.innerHTML = '';

  experienceData.forEach((exp, index) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.setAttribute('data-index', index);

    // Handle both string and array descriptions
    let descriptionHtml = '';
    if (Array.isArray(exp.description)) {
      descriptionHtml = '<ul class="job-description-list">';
      exp.description.forEach((bullet, i) => {
        descriptionHtml += `<li class="job-bullet" style="animation-delay: ${0.3 + (i * 0.1)}s">${bullet}</li>`;
      });
      descriptionHtml += '</ul>';
    } else {
      descriptionHtml = `<p class="job-description">${exp.description}</p>`;
    }

    const typeTag = exp.type ? `<span class="job-type-tag">${exp.type}</span>` : '';

    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3 class="job-title">${exp.title} ${typeTag}</h3>
        <div class="company">${exp.link ? `<a href="${exp.link}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; text-decoration-color: var(--highlight-color); text-underline-offset: 4px;" class="company-link" onclick="event.stopPropagation()">${exp.company} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.7em; margin-left: 4px; opacity: 0.7;"></i></a>` : exp.company}</div>
        <div class="job-duration">${exp.duration}</div>
        ${descriptionHtml}
      </div>
      <div class="expand-indicator">▼</div>
    `;

    // Add accessibility attributes
    item.setAttribute('role', 'button');
    item.setAttribute('aria-expanded', 'false');
    item.setAttribute('tabindex', '0');
    item.style.cursor = 'pointer';

    // Click handler for accordion functionality
    const toggleExpand = () => {
      const isExpanded = item.classList.contains('expanded');

      // Toggle expanded state
      item.classList.toggle('expanded');
      item.setAttribute('aria-expanded', !isExpanded);

      // Re-trigger bullet animations when expanding
      if (!isExpanded) {
        const bullets = item.querySelectorAll('.job-bullet');
        bullets.forEach((bullet) => {
          bullet.style.animation = 'none';
          bullet.offsetHeight; // Trigger reflow
          bullet.style.animation = '';
        });
      }
    };

    // Click event
    item.addEventListener('click', toggleExpand);

    // Keyboard support
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpand();
      }
    });

    container.appendChild(item);
  });

  // Initialize scroll animations
  initExperienceAnimations();
}

function initExperienceAnimations() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  if (!timelineItems.length) return;

  // Create Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all timeline items
  timelineItems.forEach(item => {
    observer.observe(item);
  });
}


function renderCertificates() {
  const container = document.getElementById('certificates-container');
  if (!container) return;
  container.innerHTML = '';

  certificatesData.forEach(cert => {
    const card = document.createElement('a');
    card.href = cert.link;
    card.className = 'certificate-card';
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    const certifiedTagHtml = cert.certifiedTag ? '<span class="certified-tag">Certified</span>' : '';

    card.innerHTML = `
      <div class="certificate-header">
        <div class="certificate-info">
          <h3>${cert.title} ${certifiedTagHtml}</h3>
          <div class="certificate-issuer">${cert.issuer}</div>
        </div>
      </div>
      <div class="certificate-date">${cert.date}</div>
      <div class="certificate-image-container" style="text-align: center; margin-top: 15px">
        <img src="${cert.image}" alt="${cert.title}" style="width: 100%; max-height: 250px; object-fit: contain; border-radius: 8px;" />
      </div>
    `;

    // Add hover effect
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    container.appendChild(card);
  });
}

function renderContacts() {
  const container = document.querySelector('.contact-grid');
  if (!container) return;
  container.innerHTML = '';

  contactsData.forEach(contact => {
    const card = document.createElement('a');
    card.href = contact.link;
    card.className = 'contact-card';
    if (contact.link.startsWith('http')) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    card.innerHTML = `
      <span class="icon"><i class="${contact.icon.join(' ')}"></i></span>
      <h4>${contact.title}</h4>
      <p>${contact.desc}</p>
    `;

    // Add hover effect
    card.addEventListener("mouseenter", function () {
      this.style.background = "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))";
    });
    card.addEventListener("mouseleave", function () {
      this.style.background = "var(--secondary-bg)";
    });

    container.appendChild(card);
  });
}

/* --- MAIN LOGIC --- */

const navItems = document.querySelectorAll(".nav-item:not(#theme-toggle)");
const sections = document.querySelectorAll(".section");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu-icon");

function setupLoadMore(containerId, buttonId, initialItems) {
  const container = document.getElementById(containerId);
  const button = document.getElementById(buttonId);

  // Wait for content to be rendered
  setTimeout(() => {
    const items = Array.from(container.children);
    items.forEach((item, index) => {
      if (index >= initialItems) {
        item.classList.add("hidden");
      }
    });

    if (button) {
      if (items.length <= initialItems) {
        button.style.display = "none";
      }

      button.addEventListener("click", () => {
        items.forEach((item) => {
          item.classList.remove("hidden");
        });
        button.style.display = "none";
      });
    }
  }, 100);
}

function setActiveSection(targetSectionId, pushState = true) {
  document.querySelectorAll(".sidebar > .nav-item:not(#theme-toggle)").forEach((nav) => {
    nav.classList.remove("active");
    if (window.innerWidth > 1024) {
      nav.style.borderLeft = "";
    }
  });
  sections.forEach((section) => section.classList.remove("active"));

  const targetNavItem = document.querySelector(
    `.nav-item[data-section="${targetSectionId}"]`
  );
  const targetSection = document.getElementById(targetSectionId);

  if (targetNavItem && targetSection) {
    targetNavItem.classList.add("active");
    targetSection.classList.add("active");

    if (window.innerWidth > 1024) {
      targetNavItem.style.borderLeft = "3px solid var(--highlight-color)";
    }

    if (pushState) {
      history.pushState(
        { section: targetSectionId },
        targetSectionId,
        `#${targetSectionId}`
      );
    }

    smoothTransition();
    if (window.innerWidth <= 1024) {
      if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}

function handleInitialLoadAndPopState() {
  let initialSection = window.location.hash.substring(1) || "about";
  history.replaceState(
    { section: initialSection },
    initialSection,
    `#${initialSection}`
  );
  setActiveSection(initialSection, false);

  window.addEventListener("popstate", (event) => {
    let sectionFromHistory = event.state ? event.state.section : "about";
    setActiveSection(sectionFromHistory, false);
  });
}

function smoothTransition() {
  const activeSection = document.querySelector(".section.active");
  if (activeSection) {
    activeSection.style.opacity = "0";
    activeSection.style.transform = "translateY(20px)";

    setTimeout(() => {
      activeSection.style.opacity = "1";
      activeSection.style.transform = "translateY(0)";
    }, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Render Dynamic Content
  renderSkills();
  renderProjects();
  renderBlogs();
  renderExperience();
  renderCertificates();
  renderContacts();

  setupLoadMore("projects-container", "load-more-projects", 6);
  setupLoadMore("blog-container", "load-more-blog", 6);
  setupLoadMore("certificates-container", "load-more-certificates", 6);

  ThemeManager.init();
  handleInitialLoadAndPopState();
  CommandPalette.init();

  // Modal Close Logic
  const modal = document.getElementById("skillModal");
  const closeModal = document.querySelector(".close-modal");

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  }

  // Initial Animation
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);

  setTimeout(() => {
    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = "translateY(-5px)";
        setTimeout(() => {
          card.style.transform = "translateY(0)";
        }, 200);
      }, index * 100);
    });
  }, 1000);
});

mobileMenuToggle.addEventListener("click", function () {
  sidebar.classList.toggle("open");

  if (sidebar.classList.contains("open")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});

document.querySelectorAll(".sidebar > .nav-item:not(#theme-toggle)").forEach((item) => {
  item.addEventListener("click", function () {
    const targetSectionId = this.getAttribute("data-section");
    setActiveSection(targetSectionId, true);
  });
});

document.addEventListener("keydown", function (e) {
  const mainNavItems = Array.from(document.querySelectorAll(".sidebar > .nav-item:not(#theme-toggle)"));
  const activeNavIndex = mainNavItems.findIndex((item) =>
    item.classList.contains("active")
  );

  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    if (document.getElementById('cmdOverlay').classList.contains('open')) return;

    e.preventDefault();
    const nextIndex = (activeNavIndex + 1) % mainNavItems.length;
    mainNavItems[nextIndex].click();
  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    if (document.getElementById('cmdOverlay').classList.contains('open')) return;

    e.preventDefault();
    const prevIndex =
      activeNavIndex === 0 ? mainNavItems.length - 1 : activeNavIndex - 1;
    mainNavItems[prevIndex].click();
  }
});

let konamiCode = [];
const konamiPattern = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

document.addEventListener("keydown", function (e) {
  konamiCode.push(e.code);
  if (konamiCode.length > konamiPattern.length) {
    konamiCode.shift();
  }

  if (konamiCode.join(",") === konamiPattern.join(",")) {
    document.body.style.animation = "rainbow 2s infinite";
    setTimeout(() => {
      document.body.style.animation = "";
      alert("🎉 Konami Code activated! You found the easter egg!");
    }, 2000);
    konamiCode = [];
  }
});

const style = document.createElement("style");
style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
document.head.appendChild(style);

/* --- CODE PROTECTION --- */
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
  }
});
