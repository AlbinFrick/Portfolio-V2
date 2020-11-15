const scrollToElement = (id) => {
    var element = document.getElementById(id);
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top;
    window.scrollTo({
        top: offset - 50,
        left: 0,
        behavior: 'smooth',
    });
};

// OPEN AND CLOSING ABOUT ME

const aboutMeTitle = document.querySelector(".aboutMeTitle");
const aboutMeDescription = document.querySelector(".aboutMeDescription");
const toggleAboutMeText = () => {
    aboutMeTitle.classList.toggle('active');
    aboutMeDescription.classList.toggle('active');
}
const toggleAboutMe = () => {
    if (profileWrapper.className.includes('active')) {
        toggleAboutMeText();
        profileWrapper.classList.toggle('active');
    }
    else {
        scrollToElement(profileWrapper.id)
        var projects = document.getElementsByClassName('project')
        for (var i = 0; i < projects.length; i++) {
            if (projects[i].className.includes('active'))
                projects[i].classList.remove('active');
        }
        profileWrapper.classList.toggle('active');
        toggleAboutMeText();
    }
};

const btnClose = document.querySelector("#buttonClose");
const btnOpen = document.querySelector("#buttonOpen");

profile.addEventListener('click', toggleAboutMe);
btnClose.addEventListener('click', toggleAboutMe);
btnOpen.addEventListener('click', toggleAboutMe);

//////////////////////////////////////////////////////////////////////



// CREATING PROJECTS FROM .JSON-FILE

fetch("./data/projects.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        var projects = data.Projects;
        var profile = document.getElementById('profile');
        var aboutMe = document.getElementById('aboutMe');
        var title = document.getElementById('title');
        var profileContainer = document.getElementById('profileWrapper');


        var projectsContainer = document.getElementById('projects');



        projects.forEach((project) => {
            var projectBox = document.createElement('div');
            projectBox.setAttribute('class', 'project');
            projectBox.setAttribute('id', project.id);

            var title = document.createElement('h3');
            var titleText = document.createTextNode(project.name);
            title.className = 'projectTitle';
            title.appendChild(titleText);
            projectBox.appendChild(title);

            var description = document.createElement('p');
            var descriptionText = document.createTextNode(project.description);
            description.className = 'projectDescription';
            description.appendChild(descriptionText);

            projectBox.appendChild(description);

            if (project.image) {
                var image = document.createElement('img');
                image.src = project.image;
                image.classList.add('projectImage');
                projectBox.appendChild(image);
            }
            if (project.url) {
                var url = document.createElement('a');
                url.href = project.url;
                url.target = "_blank";
                var urlText = document.createTextNode('Project Link');
                url.appendChild(urlText)
                url.classList.add('projectURL');
                projectBox.appendChild(url);
            }
            projectBox.addEventListener('click', () => {
                var loadedProjects = document.getElementsByClassName('project');
                for (var i = 0; i < loadedProjects.length; i++) {
                    if (loadedProjects[i].className.includes('active') && loadedProjects[i].id != projectBox.id) {
                        loadedProjects[i].classList.remove('active');
                    }
                }
                projectBox.classList.toggle('active');
                if (profileContainer.className.includes('active')) {
                    toggleAboutMe();
                }
                setTimeout(() => {
                    scrollToElement(project.id);
                }, 300);
            });

            projectsContainer.appendChild(projectBox);
        });

    });


//////////////////////////////////////////////////////////////////////

// HAMBURGER MENU
const menuButton = document.querySelector('#menuButton');
const navbar = document.querySelector('#hamburgerMenu');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
})