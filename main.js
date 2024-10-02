const navListElem = document.querySelector("header > nav > ul");
const tabLinkList = navListElem.querySelectorAll("li");
const tabList = document.querySelectorAll("section.tab-pannel");

tabLinkList.forEach((link, i) => {
    if (i === 0) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});

tabList.forEach((tab, i) => {
    if (i === 0) {
        return;
    } else {
        tab.setAttribute("hidden", true);
    }
});

navListElem.addEventListener("click", e => {
    e.preventDefault();

    const selectedTab = e.target.closest("a");
    if (!selectedTab) return;

    let selectedTabID = selectedTab.getAttribute("href");
    if (!selectedTabID) return;

    selectedTabID = selectedTabID.slice(1);

    tabList.forEach(tab => {
        const tabID = tab.getAttribute("id");

        if (tabID && tabID === selectedTabID) {
            tab.removeAttribute("hidden");
        } else {
            tab.setAttribute("hidden", true);
        }
    });

    tabLinkList.forEach(link => {
        let linkHref = link.querySelector("a").getAttribute("href");
        if (!linkHref) return;

        linkHref = linkHref.slice(1);

        if (linkHref === selectedTabID) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    })
});
