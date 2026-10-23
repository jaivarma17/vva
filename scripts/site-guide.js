(function () {
  var toggle = document.createElement("button");
  toggle.className = "site-guide-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "site-guide-panel");
  toggle.setAttribute("aria-label", "Open the VVA website guide");
  toggle.innerHTML = '<span class="site-guide-toggle-mark" aria-hidden="true">V</span><span>Ask VVA</span>';

  var panel = document.createElement("section");
  panel.className = "site-guide-panel";
  panel.id = "site-guide-panel";
  panel.setAttribute("aria-label", "VVA website guide");
  panel.hidden = true;
  panel.innerHTML =
    '<header class="site-guide-header"><div><span class="site-guide-kicker">STUDIO VVA</span><h2>How can we help?</h2><p>Website guide · answers from this site only</p></div><button class="site-guide-close" type="button" aria-label="Close website guide">×</button></header>' +
    '<div class="site-guide-messages" role="log" aria-live="polite" aria-relevant="additions"></div>' +
    '<div class="site-guide-suggestions" aria-label="Suggested questions"></div>' +
    '<form class="site-guide-form"><label class="visually-hidden" for="site-guide-input">Ask about projects, services, the team or contact details</label><input id="site-guide-input" name="question" type="text" maxlength="240" placeholder="Ask about the studio..." autocomplete="off" required><button type="submit" aria-label="Send question">Send</button></form>' +
    '<p class="site-guide-note">This guide searches information published on this website. For anything else, please contact the studio.</p>';

  document.body.appendChild(toggle);
  document.body.appendChild(panel);

  var closeButton = panel.querySelector(".site-guide-close");
  var messages = panel.querySelector(".site-guide-messages");
  var suggestions = panel.querySelector(".site-guide-suggestions");
  var form = panel.querySelector(".site-guide-form");
  var input = panel.querySelector("#site-guide-input");

  function addMessage(text, type, links) {
    var message = document.createElement("div");
    message.className = "site-guide-message site-guide-message-" + type;
    message.textContent = text;

    (links || []).forEach(function (item) {
      var link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      message.appendChild(link);
    });

    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function setSuggestions(items) {
    suggestions.replaceChildren();
    items.forEach(function (item) {
      var button = document.createElement("button");
      button.type = "button";
      button.textContent = item;
      button.addEventListener("click", function () { ask(item); });
      suggestions.appendChild(button);
    });
  }

  function normalize(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  function answer(question) {
    var query = normalize(question);
    var words = query.split(" ").filter(function (word) {
      return word.length > 2 && ["the", "and", "for", "show", "find", "tell", "about", "please", "project", "projects"].indexOf(word) === -1;
    });
    var projects = Array.isArray(window.projects) ? window.projects : [];

    var exactProject = projects.find(function (project) {
      var title = normalize(project.title);
      return query === normalize(project.id.replace(/-/g, " ")) ||
        (query.length >= 5 && (query.indexOf(title) !== -1 || title.indexOf(query) !== -1));
    });
    if (exactProject) {
      return {
        text: exactProject.title + " is in " + exactProject.location + ". Open its photo gallery and project information here:",
        links: [{ label: "View project gallery", href: "projects.html?project=" + encodeURIComponent(exactProject.id) }]
      };
    }

    var groups = [
      { id: "residential", terms: ["residential", "residence", "home", "homes", "house", "houses"] },
      { id: "hospitality", terms: ["hospitality", "resort", "resorts", "hotel", "hotels", "spa"] },
      { id: "commercial", terms: ["commercial", "office", "offices", "hospital", "campus", "institutional"] },
      { id: "architecture", terms: ["architecture", "architect", "architectural"] },
      { id: "interior-design", terms: ["interior", "interiors"] },
      { id: "master-planning", terms: ["planning", "masterplan", "masterplanning"] },
      { id: "landscape", terms: ["landscape", "landscaping"] }
    ];
    var requestedGroup = groups.find(function (group) {
      return group.terms.some(function (term) { return words.indexOf(term) !== -1; });
    });
    if (requestedGroup) {
      var label = requestedGroup.id.replace(/-/g, " ");
      return {
        text: "Browse the " + label + " work in the project gallery.",
        links: [{ label: "Explore " + label + " projects", href: "projects.html#" + requestedGroup.id }]
      };
    }

    if (projects.length && words.length) {
      var matches = projects.map(function (project) {
        var searchable = normalize([project.title, project.location, project.short, project.lede].join(" "));
        var title = normalize(project.title);
        var score = words.reduce(function (total, word) {
          return total + (searchable.split(" ").indexOf(word) !== -1 ? 1 : 0);
        }, 0);
        var titleScore = words.reduce(function (total, word) {
          return total + (title.split(" ").indexOf(word) !== -1 ? 1 : 0);
        }, 0);
        return { project: project, score: score, titleScore: titleScore };
      }).filter(function (match) {
        return match.titleScore >= 2 || (match.titleScore === 1 && words.length === 1 && words[0].length >= 6);
      }).sort(function (a, b) {
        return b.titleScore - a.titleScore || b.score - a.score;
      }).slice(0, 3);

      if (matches.length) {
        return {
          text: "These projects on the site may be what you are looking for:",
          links: matches.map(function (match) {
            return {
              label: match.project.title + " · " + match.project.location,
              href: "projects.html?project=" + encodeURIComponent(match.project.id)
            };
          })
        };
      }
    }

    if (/\b(contact|email|phone|call|address|location|visit|office hours|open)\b/.test(query)) {
      return {
        text: "The studio is in Vasant Kunj, New Delhi. Office hours are Monday to Saturday, 9:00 am to 5:00 pm.",
        links: [
          { label: "Contact the studio", href: "contact.html" },
          { label: "Email studiovva@gmail.com", href: "mailto:studiovva@gmail.com" },
          { label: "Call +91 9810021899", href: "tel:+919810021899" }
        ]
      };
    }

    if (/\b(team|founder|people|vikram|medha|jai)\b/.test(query)) {
      return {
        text: "Meet Vikram Varma, Medha Varma and Jai Varma, and read about their roles in the studio.",
        links: [{ label: "Meet the team", href: "team.html" }]
      };
    }

    if (/\b(service|services|practice|philosophy|sustainab|wellness|established|founded|1994|design build)\b/.test(query)) {
      return {
        text: "The studio was established in 1994 and works across architecture, planning and interior design, with a focus on sustainability, energy conservation and wellness.",
        links: [{ label: "Explore the studio and services", href: "about.html" }]
      };
    }

    if (/\b(project|projects|portfolio|gallery|work)\b/.test(query)) {
      return {
        text: "Explore the project portfolio by category, or open a featured project gallery.",
        links: [
          { label: "Browse all projects", href: "projects.html" },
          { label: "Residential", href: "projects.html#residential" },
          { label: "Hospitality", href: "projects.html#hospitality" },
          { label: "Commercial", href: "projects.html#commercial" }
        ]
      };
    }

    return {
      text: "I couldn't find that information on this website. I can help you explore projects, services, the team or contact details.",
      links: [{ label: "Contact the studio", href: "contact.html" }]
    };
  }

  function ask(question) {
    var text = question.trim();
    if (!text) return;
    addMessage(text, "visitor");
    input.value = "";
    var result = answer(text);
    addMessage(result.text, "guide", result.links);
    setSuggestions(["Explore projects", "What services does the studio offer?", "How can I contact the studio?"]);
  }

  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close the VVA website guide" : "Open the VVA website guide");
    if (open) input.focus();
  }

  toggle.addEventListener("click", function () { setOpen(panel.hidden); });
  closeButton.addEventListener("click", function () {
    setOpen(false);
    toggle.focus();
  });
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    ask(input.value);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !panel.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });

  addMessage("Welcome. Ask me about the studio, team, contact details or a project.", "guide");
  setSuggestions(["Explore projects", "What services does the studio offer?", "How can I contact the studio?"]);
})();
