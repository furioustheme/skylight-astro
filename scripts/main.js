

(function () {
  "use strict";

// ########################## AOS ##########################
  AOS.init({
    once: true
  });

  // ########################## Tab ##########################
  function setActiveTab(tabGroup, tabName) {
    const tabsNav = tabGroup.querySelector("[data-tab-nav]");
    const tabsContent = tabGroup.querySelector("[data-tab-content]");

    tabsNav.querySelectorAll("[data-tab]").forEach((tabNavItem) => {
      tabNavItem.classList.remove("active");
    });
    tabsContent.querySelectorAll("[data-tab-panel]").forEach((tabPane) => {
      tabPane.classList.remove("active");
    });

    const selectedTabNavItem = tabsNav.querySelector(`[data-tab="${tabName}"]`);
    selectedTabNavItem.classList.add("active");
    const selectedTabPane = tabsContent.querySelector(
      `[data-tab-panel="${tabName}"]`,
    );
    selectedTabPane.classList.add("active");
  }
  const tabGroups = document.querySelectorAll("[data-tab-group]");
  tabGroups.forEach((tabGroup) => {
    const tabsNav = tabGroup.querySelector("[data-tab-nav]");
    const tabsNavItem = tabsNav.querySelectorAll("[data-tab]");
    const activeTabName = tabsNavItem[0].getAttribute("data-tab");

    setActiveTab(tabGroup, activeTabName);

    tabsNavItem.forEach((tabNavItem) => {
      tabNavItem.addEventListener("click", () => {
        const tabName = tabNavItem.dataset.tab;
        setActiveTab(tabGroup, tabName);
      });
    });
  });

  const tablist = document.querySelectorAll("[data-tab-nav] [data-tab]");
  function tabsHandler(event) {
    let index = Array.from(tablist).indexOf(this);
    let numbTabs = tablist.length;
    let nextId;
    if (numbTabs > 1) {
      if (event.key === "ArrowRight") {
        nextId = tablist[(index + 1) % numbTabs];
        if (index === numbTabs - 1) {
          nextId = tablist[0];
        }
        nextId.focus();
        nextId.click();
      }
      if (event.key === "ArrowLeft") {
        nextId = tablist[(index - 1 + numbTabs) % numbTabs];
        if (index === 0) {
          nextId = tablist[numbTabs - 1];
        }
        nextId.focus();
        nextId.click();
      }
    }
  }

  tablist.forEach(function (tab) {
    tab.addEventListener("keydown", tabsHandler);
  });

  // ########################## Accordion ##########################
  const accordion = document.querySelectorAll("[data-accordion]");
  accordion.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      accordionItem.classList.toggle("active");
    });
  });


  // ############################## nav sub-menu toggle ##############################
  const navDropdown = document.querySelector(".nav-dropdown");
  const navDropdownList = document.querySelector(".nav-dropdown-list");
  const navDropdownIcon = document.querySelector(".nav-dropdown-icon");

  navDropdown.addEventListener("click", () => {
    navDropdownList.classList.toggle("hidden");
    navDropdownIcon.classList.toggle("rotate-180");
  });


  // ############################## counter ##############################
  function counter(el, duration) {
    const endValue = Number(el.innerText.replace(/\D/gi, ""));
    const text = el.innerText.replace(/\W|\d/gi, "");
    const timeStep = Math.round(duration / endValue);
    let current = 0;

    const timer = setInterval(() => {
      if (current > endValue) {
        current = endValue;
      } else {
        current += 1;
      }
      el.innerText = current + text;
      if (current === endValue) {
        clearInterval(timer);
      }
    }, timeStep);
  }

  document.querySelectorAll(".counter .count").forEach((count) => {
    counter(count, 500);
  });

  // ############## hamburger ###############
  const groupActive = document.querySelector("#group-active");
  function toggleClasses() {
    if (groupActive.classList.contains("group")) {
      groupActive.classList.remove("group");
    } else {
      groupActive.classList.add("group");
    }
  }
  groupActive.addEventListener("click", toggleClasses);




  // Pricing Counter
  // --------------------------------------------------------------------
  function pricingInit() {
    var toggleSwitcherM = document.querySelector(".toggler-switcher-m");
    var toggleSwitcherY = document.querySelector(".toggler-switcher-y");
    var number = document.querySelector(".data-count");

    function animText(ele, status) {
      // For Annual
      if (status === "yearly") {
        document.querySelectorAll(".data-count").forEach(function (element) {
          if (element.dataset.countAnnually) {
            element.innerHTML = element.dataset.countAnnually;
            let counter = 0;
            let targetCount = parseInt(element.textContent);

            let animation = setInterval(function () {
              counter += 10;
              element.textContent = Math.ceil(counter);
              if (counter >= targetCount) {
                clearInterval(animation);
                element.textContent = element.dataset.countAnnually;
              }
            }, 1);
          }
        });
      }
      // For Monthly
      else if (status === "monthly") {
        document.querySelectorAll(".data-count").forEach(function (element) {
          if (element.dataset.countMonthly) {
            element.innerHTML = element.dataset.countMonthly;
            let counter = 0;
            let targetCount = parseInt(element.textContent);

            let animation = setInterval(function () {
              counter += 10;
              element.textContent = Math.ceil(counter);
              if (counter >= targetCount) {
                clearInterval(animation);
                element.textContent = element.dataset.countMonthly;
              }

              if (element.dataset.countMonthly) {
                element.innerHTML = element.dataset.countAnnually;
                let counter = 0;
                let targetCount = parseInt(element.textContent);

                let animation = setInterval(function () {
                  counter += 10;
                  element.textContent = Math.ceil(counter);
                  if (counter >= targetCount) {
                    clearInterval(animation);
                    element.textContent = element.dataset.countMonthly;
                  }
                }, 1);
              }
            }, 1);
          }
        });
      }
    }

    toggleSwitcherM?.addEventListener("change", function () {
      animText(this, "monthly");
    });

    toggleSwitcherY?.addEventListener("change", function () {
      animText(this, "yearly");
    });
  }
  pricingInit();


})();


