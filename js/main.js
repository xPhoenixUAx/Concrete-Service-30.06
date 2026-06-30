const siteConfig = {
  company: "Concrete Service",
  domain: "concreteservice.local",
  website: "www.concreteservice.local",
  email: "support@concreteservice.local",
  phone: "(888) 410-7726",
  phoneLabel: "24/7 Matching Line",
  address: "Austin, TX 78701",
  companyId: "Aggregator ID CS-48291",
  footerText:
    "Concrete Service is a free matching platform helping homeowners compare local concrete providers for repairs, flatwork, resurfacing, and installation needs.",
  copyright: "© 2026 Concrete Service. All rights reserved.",
  successMessage:
    "Thank you. Concrete Service has received your request. A local matching coordinator will review it and contact you through support@concreteservice.local."
};

const services = [
  {
    slug: "driveways",
    eyebrow: "Residential Flatwork",
    title: "Concrete Driveways",
    short:
      "Connect with local providers for new driveway installation, replacement, widening, grading, and finish options.",
    image: "img/services/driveways.webp",
    icon: "fa-road",
    intro:
      "A driveway is one of the hardest-working concrete surfaces on a property. We help homeowners find independent local providers who can evaluate drainage, base preparation, thickness, reinforcement, finish, and access requirements before work begins.",
    includes: [
      "New concrete driveway installation",
      "Driveway replacement and tear-out coordination",
      "Driveway extensions, aprons, and parking pads",
      "Broom, smooth, exposed aggregate, and decorative finishes",
      "Base preparation, grading, forms, reinforcement, and control joints",
      "Curing guidance and post-installation homeowner notes"
    ],
    process: [
      "Request details are reviewed for property type, access, size, and urgency.",
      "Available local providers are matched based on the project scope and service area.",
      "Homeowners compare estimates, licensing, insurance, timing, and proposed materials.",
      "The selected provider handles the site visit, schedule, installation, cleanup, and warranty terms."
    ],
    checklist: [
      "Measure approximate length and width",
      "Note slope, drainage issues, tree roots, or heavy vehicle use",
      "Take photos of the current driveway or installation area",
      "Ask providers about reinforcement, slab thickness, and joint layout"
    ],
    faq: [
      ["How thick should a concrete driveway be?", "Many residential driveways are commonly planned around 4 inches, while heavier vehicle use may require more. A local provider should confirm based on soil, load, and local standards."],
      ["Can providers remove the old driveway?", "Yes, many providers can include demolition, haul-away, base repair, forms, placement, finishing, and cleanup in one estimate."]
    ]
  },
  {
    slug: "repair-resurfacing",
    eyebrow: "Damage Control",
    title: "Concrete Repair & Resurfacing",
    short:
      "Find local help for cracks, spalling, uneven surfaces, worn patios, small patching, and resurfacing projects.",
    image: "img/services/repair-resurfacing.webp",
    icon: "fa-screwdriver-wrench",
    intro:
      "Not every damaged slab needs full replacement. Concrete Service helps homeowners connect with local providers who can inspect the condition, explain repair limits, and recommend practical options such as crack repair, patching, resurfacing, or replacement.",
    includes: [
      "Crack routing, filling, and sealing",
      "Surface patching and spall repair",
      "Patio, walkway, porch, and garage surface resurfacing",
      "Trip hazard evaluation and minor leveling recommendations",
      "Concrete overlays, bonding prep, and finish renewal",
      "Moisture, drainage, and recurring damage assessment"
    ],
    process: [
      "Share photos of damaged areas and describe when the issue appeared.",
      "Matched providers review whether repair, resurfacing, or replacement is realistic.",
      "You compare scope, preparation steps, material recommendations, and expected life span.",
      "The chosen provider completes repair work and explains maintenance expectations."
    ],
    checklist: [
      "Photograph cracks with a coin or tape measure for scale",
      "Mark areas that hold water after rain",
      "Mention if the surface was previously painted, sealed, or coated",
      "Ask whether the repair is cosmetic, structural, or both"
    ],
    faq: [
      ["Is resurfacing better than replacement?", "Resurfacing can be cost-effective when the slab is stable. If the base has failed, replacement may be the better long-term option."],
      ["Will cracks disappear completely?", "Some repairs reduce visibility but do not make structural movement vanish. A provider should explain realistic expectations before work starts."]
    ]
  },
  {
    slug: "stamped-decorative",
    eyebrow: "Outdoor Finish",
    title: "Stamped & Decorative Concrete",
    short:
      "Compare providers for stamped patios, colored concrete, borders, textured walkways, and decorative upgrades.",
    image: "img/services/stamped-decorative.webp",
    icon: "fa-stamp",
    intro:
      "Decorative concrete can create the look of stone, slate, tile, or custom texture without using separate pavers. We match homeowners with local providers who can explain pattern selection, color systems, sealing, maintenance, and realistic installation timelines.",
    includes: [
      "Stamped concrete patios and walkways",
      "Integral color, color hardener, and release color planning",
      "Decorative borders, saw-cut patterns, and texture upgrades",
      "Outdoor living areas, pool surrounds, and entry paths",
      "Sealing, resealing, and finish maintenance guidance",
      "Design consultation with local installation providers"
    ],
    process: [
      "Choose the surface type, approximate area, preferred texture, and color direction.",
      "Local decorative concrete providers review feasibility, access, and timing.",
      "You compare pattern options, sealing approach, curing schedule, and maintenance notes.",
      "The selected provider installs, stamps, details, seals, and walks you through care."
    ],
    checklist: [
      "Collect inspiration photos for pattern and color direction",
      "Confirm slip resistance needs for wet areas",
      "Ask about sample boards or completed local examples",
      "Discuss resealing frequency and winter care"
    ],
    faq: [
      ["Does stamped concrete need sealing?", "Most decorative installations benefit from sealing to protect color and make cleaning easier. Frequency depends on traffic, climate, and product used."],
      ["Can stamped concrete be installed over old concrete?", "Sometimes overlays are possible, but the existing surface must be stable and properly prepared. A local provider should inspect it first."]
    ]
  },
  {
    slug: "slabs-foundations",
    eyebrow: "Structural Prep",
    title: "Concrete Slabs & Foundations",
    short:
      "Get matched for garage slabs, shed pads, additions, equipment pads, footings, and foundation-related flatwork.",
    image: "img/services/slabs-foundations.webp",
    icon: "fa-border-all",
    intro:
      "Slabs and foundation-related concrete demand careful planning. Concrete Service helps connect homeowners with providers who understand base preparation, reinforcement, vapor barriers, drainage, forms, thickness, inspections, and local permit expectations.",
    includes: [
      "Garage, shed, workshop, and accessory structure slabs",
      "Concrete pads for HVAC, generators, and equipment",
      "Footings, stem walls, and foundation-adjacent flatwork",
      "Rebar, wire mesh, vapor barrier, and compacted base planning",
      "Control joint layout and finish specifications",
      "Permit, inspection, and engineering coordination where required"
    ],
    process: [
      "Project type, dimensions, intended load, and site access are collected.",
      "Matched providers identify whether engineering, permits, or inspection steps may apply.",
      "Homeowners compare preparation methods, reinforcement, drainage, and schedule.",
      "The selected provider coordinates excavation, forms, placement, finishing, and cleanup."
    ],
    checklist: [
      "Know the intended structure or load",
      "Locate utilities before excavation",
      "Ask about permits and inspections",
      "Confirm drainage, elevation, and finish tolerance"
    ],
    faq: [
      ["Do all slabs need reinforcement?", "Many slabs use wire mesh, rebar, fiber, or a combination depending on load, soil, and local practice. The provider should specify the plan."],
      ["Can I pour a slab without permits?", "Requirements vary by location and project type. Homeowners are responsible for confirming permits, but providers can often advise what is typical locally."]
    ]
  },
  {
    slug: "sidewalks-steps",
    eyebrow: "Access & Safety",
    title: "Sidewalks, Steps & Walkways",
    short:
      "Find providers for cracked walkways, porch steps, safe entry paths, public-facing sidewalk sections, and accessibility improvements.",
    image: "img/services/sidewalks-steps.webp",
    icon: "fa-shoe-prints",
    intro:
      "Walkways and steps affect curb appeal, drainage, and everyday safety. We connect homeowners with local concrete providers who can evaluate slope, step height, code considerations, trip hazards, and finish texture.",
    includes: [
      "Concrete sidewalk replacement and new walkways",
      "Porch steps, stoops, landings, and entry paths",
      "Trip hazard repairs and uneven surface replacement",
      "Broom finish, decorative edges, and textured surfaces",
      "Drainage correction near paths and entrances",
      "Accessibility-minded slope and transition planning"
    ],
    process: [
      "Describe the path, step count, damage level, and safety concerns.",
      "Local providers review access, grade, drainage, and demolition needs.",
      "You compare estimates, finish options, timeline, and cleanup expectations.",
      "The chosen provider completes removal, forms, pour, finish, and curing guidance."
    ],
    checklist: [
      "Photograph any trip hazards or broken step edges",
      "Measure approximate path width and length",
      "Note water pooling, ice buildup, or soil washout",
      "Ask about slip-resistant finishes and code-sensitive dimensions"
    ],
    faq: [
      ["Can steps be repaired instead of replaced?", "Small chips may be repairable, but failed or unsafe steps often need replacement. A provider should inspect before recommending the scope."],
      ["Who handles public sidewalk rules?", "Local rules vary. Homeowners should verify municipal requirements, and providers can often help explain common local processes."]
    ]
  },
  {
    slug: "garage-floors",
    eyebrow: "Interior Concrete",
    title: "Garage Floors & Interior Concrete",
    short:
      "Connect with providers for garage slabs, floor resurfacing, control joints, coatings prep, and interior concrete upgrades.",
    image: "img/services/garage-floors.webp",
    icon: "fa-warehouse",
    intro:
      "Garage and interior concrete needs a clean, durable surface that can handle vehicles, storage, moisture, and coatings. Concrete Service helps homeowners compare providers for new pours, resurfacing, repair, and coating-ready preparation.",
    includes: [
      "Garage floor replacement and new concrete slabs",
      "Surface grinding, patching, and resurfacing",
      "Control joint layout and edge detailing",
      "Moisture concerns and coating preparation",
      "Basement utility areas and interior concrete surfaces",
      "Cleanup, curing notes, and readiness timelines"
    ],
    process: [
      "You share dimensions, vehicle use, surface condition, and coating plans.",
      "Matched providers review moisture, cracking, slope, and existing slab condition.",
      "You compare preparation methods, finish tolerance, and return-to-use timing.",
      "The selected provider completes the agreed concrete or prep work."
    ],
    checklist: [
      "Clear photos of cracks, pitting, stains, or uneven areas",
      "Note whether a coating or epoxy system is planned",
      "Ask when vehicles can return to the surface",
      "Confirm ventilation, dust control, and cleanup expectations"
    ],
    faq: [
      ["Can a garage floor be resurfaced?", "Yes, if the slab is structurally sound and properly prepared. Deep movement or moisture problems may require a different approach."],
      ["Do you install epoxy coatings?", "We help connect homeowners with local providers. Some concrete providers offer coating prep or coatings directly, while others coordinate with coating specialists."]
    ]
  },
  {
    slug: "commercial-flatwork",
    eyebrow: "Business Properties",
    title: "Commercial Concrete Flatwork",
    short:
      "Match with providers for small business sidewalks, pads, ramps, loading areas, dumpster pads, and exterior flatwork.",
    image: "img/services/commercial-flatwork.webp",
    icon: "fa-building",
    intro:
      "Small commercial properties need concrete work that respects access, safety, scheduling, and business operations. We help property managers and business owners find local providers for practical flatwork needs.",
    includes: [
      "Storefront sidewalks and entry pads",
      "Dumpster pads, loading pads, and equipment bases",
      "Small parking-lot concrete sections and curbs",
      "ADA-minded ramps and transitions where applicable",
      "After-hours or phased scheduling discussions",
      "Safety markings, access planning, and cleanup expectations"
    ],
    process: [
      "Share property type, address area, access limits, and business-hours constraints.",
      "Matched providers review project size, safety concerns, and scheduling windows.",
      "You compare estimates, materials, timeline, and documentation needs.",
      "The selected provider handles the agreed flatwork and site cleanup."
    ],
    checklist: [
      "Photograph public access areas and vehicle routes",
      "Note preferred work windows or tenant restrictions",
      "Ask about barricades, curing time, and reopening schedule",
      "Confirm insurance documentation before hiring"
    ],
    faq: [
      ["Can providers work outside business hours?", "Some local providers can schedule phased or off-hour work depending on project size, noise rules, and crew availability."],
      ["Is this for large commercial projects?", "Concrete Service is best suited for homeowner and small commercial matching. Large engineered projects may require specialized bidding."]
    ]
  }
];

const serviceGroups = [
  {
    title: "Pour & Replace",
    eyebrow: "New concrete",
    icon: "fa-helmet-safety",
    text: "For homeowners planning a fresh slab, driveway, walkway, garage surface, or replacement project.",
    slugs: ["driveways", "slabs-foundations", "sidewalks-steps", "garage-floors"]
  },
  {
    title: "Repair & Restore",
    eyebrow: "Existing surfaces",
    icon: "fa-hammer",
    text: "For cracked, worn, uneven, spalling, stained, or aging concrete that needs practical local evaluation.",
    slugs: ["repair-resurfacing", "garage-floors", "sidewalks-steps"]
  },
  {
    title: "Decorative Outdoor Finish",
    eyebrow: "Patios and upgrades",
    icon: "fa-layer-group",
    text: "For stamped patios, colored concrete, borders, resealing, outdoor living areas, and finish upgrades.",
    slugs: ["stamped-decorative", "driveways", "sidewalks-steps"]
  },
  {
    title: "Small Commercial Flatwork",
    eyebrow: "Business property",
    icon: "fa-briefcase",
    text: "For storefront walks, pads, ramps, loading areas, dumpster pads, and business access surfaces.",
    slugs: ["commercial-flatwork", "slabs-foundations", "sidewalks-steps"]
  }
];

const disclaimer =
  "Disclaimer: This site is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function asset(path) {
  const depth = location.pathname.split("/").filter(Boolean).length > 1 ? "../" : "";
  return depth + path;
}

function serviceHref(slug) {
  const depth = location.pathname.split("/").filter(Boolean).length > 1 ? "../" : "";
  return `${depth}service-${slug}.html`;
}

function initConfigText() {
  $$("[data-brand]").forEach((el) => (el.textContent = siteConfig.company));
  $$("[data-email]").forEach((el) => {
    const target = $("span", el) || el;
    target.textContent = siteConfig.email;
    if (el.tagName === "A") el.href = `mailto:${siteConfig.email}`;
  });
  $$("[data-phone]").forEach((el) => {
    const target = $("span", el) || el;
    target.textContent = siteConfig.phone;
    if (el.tagName === "A") el.href = `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`;
  });
  $$("[data-phone-label]").forEach((el) => (el.textContent = siteConfig.phoneLabel));
  $$("[data-address]").forEach((el) => (el.textContent = siteConfig.address));
  $$("[data-website]").forEach((el) => (el.textContent = siteConfig.website));
  $$("[data-footer-line]").forEach(
    (el) => (el.textContent = `${siteConfig.company} · ${siteConfig.address} · ${siteConfig.companyId}`)
  );
  $$("[data-footer-text]").forEach((el) => (el.textContent = siteConfig.footerText));
  $$("[data-copyright]").forEach((el) => (el.textContent = siteConfig.copyright));
  $$("[data-disclaimer]").forEach((el) => (el.textContent = disclaimer));
}

function serviceCard(service, index) {
  return `
    <article class="service-card reveal" style="--delay:${index * 0.08}s">
      <a class="service-card__media" href="${serviceHref(service.slug)}">
        <img src="${asset(service.image)}" alt="${service.title}" loading="lazy">
      </a>
      <div class="service-card__body">
        <div class="mini-label"><i class="fa-solid ${service.icon}" aria-hidden="true"></i>${service.eyebrow}</div>
        <h3><a href="${serviceHref(service.slug)}">${service.title}</a></h3>
        <p>${service.short}</p>
        <a class="text-link" href="${serviceHref(service.slug)}">View details <i data-lucide="arrow-up-right"></i></a>
      </div>
    </article>
  `;
}

function categoryCard(group, index) {
  const linkedServices = group.slugs.map((slug) => services.find((service) => service.slug === slug)).filter(Boolean);
  return `
    <article class="category-card reveal" style="--delay:${index * 0.08}s">
      <div class="category-card__icon"><i class="fa-solid ${group.icon}" aria-hidden="true"></i></div>
      <span class="eyebrow">${group.eyebrow}</span>
      <h3>${group.title}</h3>
      <p>${group.text}</p>
      <div class="category-card__links">
        ${linkedServices.map((service) => `<a href="${serviceHref(service.slug)}">${service.title}<i data-lucide="arrow-up-right"></i></a>`).join("")}
      </div>
    </article>
  `;
}

function renderServiceGrids() {
  $$("[data-services-grid]").forEach((grid) => {
    if (grid.dataset.grouped === "true") {
      grid.classList.add("category-grid");
      grid.innerHTML = serviceGroups.map(categoryCard).join("");
      return;
    }
    const limit = Number(grid.dataset.limit || services.length);
    grid.innerHTML = services.slice(0, limit).map(serviceCard).join("");
  });
}

function renderServicePage() {
  const root = $("[data-service-page]");
  if (!root) return;
  const slug = root.dataset.servicePage;
  const service = services.find((item) => item.slug === slug) || services[0];
  document.title = `${service.title} | ${siteConfig.company}`;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const scopeGroups = [
    {
      title: "Surface and site",
      text: service.checklist[0] || "Measure the surface and document the project area."
    },
    {
      title: "Condition and access",
      text: service.checklist[1] || "Note site access, visible damage, drainage, and use requirements."
    },
    {
      title: "Photos and context",
      text: service.checklist[2] || "Share photos and timing details so providers can understand the request."
    }
  ];

  root.innerHTML = `
    <section class="service-hero section-dark">
      <div class="container service-hero__grid">
        <div class="service-hero__copy reveal">
          <span class="eyebrow">${service.eyebrow}</span>
          <h1>${service.title}</h1>
          <p>${service.intro}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="contact.html">Request a Match <i data-lucide="arrow-right"></i></a>
            <a class="btn btn-ghost" href="services.html">All Services</a>
          </div>
        </div>
        <div class="service-hero__media reveal">
          <img src="${asset(service.image)}" alt="${service.title}">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container service-scope">
        <div class="section-kicker reveal">
          <span class="eyebrow">Included scope</span>
          <h2>What homeowners commonly request</h2>
          <p>These are common project points for ${service.title.toLowerCase()}. The final scope should always be confirmed directly with the independent provider who evaluates the site.</p>
        </div>
        <div class="scope-card-grid reveal">
          ${service.includes.map((item) => `<article><span>${item}</span></article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section-muted">
      <div class="container service-visual-grid">
        <article class="service-visual-card reveal">
          <img src="${asset(service.image)}" alt="${service.title} project example">
          <div><span class="eyebrow">${service.eyebrow}</span><h3>Project type</h3><p>${service.short}</p></div>
        </article>
        <article class="service-visual-card reveal">
          <img src="${asset("img/services/detail-site-prep-v2.webp")}" alt="Concrete site preparation details">
          <div><span class="eyebrow">Site prep</span><h3>What providers need to see</h3><p>Base condition, forms, access, drainage, demolition needs, surface use, and the surrounding property all affect the conversation.</p></div>
        </article>
        <article class="service-visual-card reveal">
          <img src="${asset("img/services/detail-estimate-review-v2.webp")}" alt="Concrete estimate review and project notes">
          <div><span class="eyebrow">Estimate review</span><h3>Compare written details</h3><p>Look beyond the price. Compare prep, materials, thickness, finish, cleanup, timeline, payment terms, and warranty notes.</p></div>
        </article>
      </div>
    </section>

    <section class="section section-muted">
      <div class="container process-grid">
        <div class="section-kicker reveal">
          <span>How matching works</span>
          <h2>A practical path from request to estimate</h2>
          <p>Concrete Service is not the contractor. We organize your request and help you connect with independent local providers who can evaluate the job directly.</p>
        </div>
        <div class="timeline reveal">
          ${service.process
            .map((item, index) => `<div class="timeline-item"><b>${String(index + 1).padStart(2, "0")}</b><p>${item}</p></div>`)
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container detail-grid">
        <div class="checklist-intro reveal">
          <span class="eyebrow">Before you hire</span>
          <h2>Use this as your estimate conversation guide.</h2>
          <p>Concrete Service can help organize the request, but the provider you choose should explain the work directly. These are the points to confirm before accepting an estimate.</p>
          <a class="text-link" href="contact.html">Start a matching request <i data-lucide="arrow-up-right"></i></a>
        </div>
        <div class="checklist reveal">
          ${service.checklist.map((item) => `<div><span>${item}</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section-dark service-proof">
      <div class="container service-proof__grid">
        <div class="section-kicker reveal">
          <span class="eyebrow">Provider verification</span>
          <h2>Good matching still needs homeowner review.</h2>
          <p>Concrete Service helps organize the request, but the hiring decision belongs to the homeowner. Before work begins, ask the provider to explain the documents, methods, and terms that apply to your project.</p>
          <div class="proof-points">
            ${scopeGroups.map((item) => `<div><b>${item.title}</b><span>${item.text}</span></div>`).join("")}
          </div>
        </div>
        <div class="service-proof__media reveal">
          <img src="${asset("img/services/detail-provider-check-v2.webp")}" alt="Concrete provider document review before hiring">
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-heading reveal">
          <span class="eyebrow">Service FAQ</span>
          <h2>Questions about ${service.title.toLowerCase()}</h2>
        </div>
        <div class="faq">
          ${service.faq.map(([q, a]) => `<button class="faq-item reveal"><span>${q}</span><i data-lucide="plus"></i><p>${a}</p></button>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading reveal">
          <span class="eyebrow">Related concrete work</span>
          <h2>Other ways we can match your request</h2>
        </div>
        <div class="services-grid compact" data-related-grid>
          ${related.map(serviceCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function initFAQ() {
  $$(".faq-item").forEach((item) => {
    item.setAttribute("aria-expanded", "false");
    item.addEventListener("click", () => {
      const wasOpen = item.classList.contains("is-open");
      $$(".faq-item", item.parentElement).forEach((sibling) => {
        sibling.classList.remove("is-open");
        sibling.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("is-open");
        item.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function initForm() {
  const form = $("[data-contact-form]");
  if (!form) return;
  const message = $("[data-success-message]");
  const modal = $("[data-form-modal]");
  const modalDialog = modal ? $(".form-modal__dialog", modal) : null;
  const modalMessage = $("[data-modal-message]");

  const closeModal = () => {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  const openModal = () => {
    if (!modal) return;
    if (modalMessage) modalMessage.textContent = siteConfig.successMessage;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modalDialog?.focus();
  };

  $$("[data-modal-close]", modal || document).forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.hidden) closeModal();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (modal) {
      openModal();
    } else if (message) {
      message.textContent = siteConfig.successMessage;
      message.hidden = false;
    }
    form.reset();
  });
}

function initNavigation() {
  const toggle = $("[data-menu-toggle]");
  const nav = $("[data-nav]");
  if (nav && !$(".nav-dropdown", nav)) {
    $$('a[href$="services.html"]', nav).forEach((servicesLink) => {
      const dropdown = document.createElement("div");
      dropdown.className = "nav-dropdown";
      const menu = document.createElement("div");
      menu.className = "nav-dropdown__menu";
      menu.setAttribute("aria-label", "Concrete services");
      menu.innerHTML = [
        `<a href="services.html">All Services</a>`,
        ...services.map((service) => `<a href="${serviceHref(service.slug)}">${service.title}</a>`)
      ].join("");
      servicesLink.after(dropdown);
      dropdown.append(servicesLink, menu);
      servicesLink.classList.add("nav-dropdown__trigger");
      servicesLink.setAttribute("aria-haspopup", "true");
      servicesLink.setAttribute("aria-expanded", "false");
    });
  }

  if (toggle && nav) {
    const dropdowns = $$(".nav-dropdown", nav);
    const closeMenu = () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("is-open");
        $(".nav-dropdown__trigger", dropdown)?.setAttribute("aria-expanded", "false");
      });
    };

    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
      if (!open) closeMenu();
    });

    dropdowns.forEach((dropdown) => {
      const trigger = $(".nav-dropdown__trigger", dropdown);
      trigger?.addEventListener("click", (event) => {
        if (innerWidth > 980) return;
        event.preventDefault();
        const open = dropdown.classList.toggle("is-open");
        trigger.setAttribute("aria-expanded", String(open));
      });
    });

    $$("a", nav).forEach((link) => {
      link.addEventListener("click", () => {
        if (link.classList.contains("nav-dropdown__trigger") && innerWidth <= 980) return;
        closeMenu();
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && document.body.classList.contains("menu-open")) closeMenu();
    });
  }

  const header = $(".site-header");
  const onScroll = () => header?.classList.toggle("is-scrolled", scrollY > 12);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });
}

function initMotion() {
  if (window.lenis) return;
  if (window.Lenis) {
    window.lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    const raf = (time) => {
      window.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 42, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: Number(getComputedStyle(el).getPropertyValue("--delay") || 0),
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 86%" }
      }
    );
  });

  gsap.utils.toArray("[data-parallax]").forEach((el) => {
    gsap.to(el, {
      yPercent: 10,
      ease: "none",
      scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "bottom top", scrub: true }
    });
  });

  gsap.utils.toArray("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const proxy = { value: 0 };
    gsap.to(proxy, {
      value: target,
      duration: 1.7,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
      onUpdate: () => (el.textContent = Math.round(proxy.value).toLocaleString())
    });
  });
}

function initIcons() {
  if (window.lucide) lucide.createIcons();
}

function initFloatingAction() {
  const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
  const action = document.createElement("a");
  action.className = "floating-action";
  action.href = phoneHref;
  action.setAttribute("aria-label", `Call ${siteConfig.company}`);
  action.innerHTML = '<i class="fa-solid fa-phone" aria-hidden="true"></i><span>Call</span>';
  document.body.append(action);
  document.body.classList.add("has-floating-action");

  const update = () => {
    action.classList.toggle("is-visible", scrollY > 120);
  };

  update();
  addEventListener("scroll", update, { passive: true });
}

function initCookieBanner() {
  const storageKey = "concreteServiceCookieChoice";
  const storage = (() => {
    try {
      localStorage.setItem("__cookie_test__", "1");
      localStorage.removeItem("__cookie_test__");
      return localStorage;
    } catch {
      return null;
    }
  })();
  const savedChoice = storage?.getItem(storageKey);
  if (savedChoice) return;

  const banner = document.createElement("section");
  banner.className = "cookie-banner";
  banner.setAttribute("aria-label", "Cookie notice");
  banner.innerHTML = `
    <div>
      <h2>Cookie Notice</h2>
      <p>We use necessary cookies to keep this site working and may use optional cookies to understand visits and improve the matching experience. Read our <a href="cookie.html">Cookie Policy</a>.</p>
    </div>
    <div class="cookie-banner__actions">
      <button class="btn btn-ghost" type="button" data-cookie-choice="declined">Decline</button>
      <button class="btn btn-primary" type="button" data-cookie-choice="accepted">Accept</button>
    </div>
  `;
  document.body.append(banner);

  const closeBanner = (choice) => {
    storage?.setItem(storageKey, choice);
    banner.classList.remove("is-visible");
    document.body.classList.remove("cookie-banner-open");
    setTimeout(() => banner.remove(), 320);
  };

  $$("[data-cookie-choice]", banner).forEach((button) => {
    button.addEventListener("click", () => closeBanner(button.dataset.cookieChoice));
  });

  requestAnimationFrame(() => {
    banner.classList.add("is-visible");
    document.body.classList.add("cookie-banner-open");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initConfigText();
  renderServiceGrids();
  renderServicePage();
  initConfigText();
  initNavigation();
  initFAQ();
  initForm();
  initIcons();
  initFloatingAction();
  initCookieBanner();
  initMotion();
});
