// DATA --> push to firebase later
//[
//     {
//         name: 'Actsport',
//         description:
//             'This project was a consulting job for the startup Actsport. The start up is developing a application for sport psychology. The application had some design flaws in a interaction point of view. I helped the company to come up with a strategy how to improve the app. I then created a prototype using figma. I did tests on potential customers and on some people from the local gym. The result can be seen below.',
//         image: '../images/actsport.jpg',
//         id: 0,
//     },
//     {
//         name: 'Curiosum Find',
//         description:
//             'With close collaboration with Curiosum I had a leading role in a 60 people project of designing and implementing an AR-integrated applikation',
//         id: 1,
//     },
//     {
//         name: 'Arboreal',
//         description:
//             'As a part of a course we created and tested a prototpe useing Adobe XD',
//         id: 2,
//     },
//     {
//         name: 'Typer',
//         description:
//             'As a part of a course we created a game to race against your friends by typing. This used socket.io',
//         id: 3,
//     },
// ];
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
                if (profile.className.includes('active')) {
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
        setTimeout(() => {
            profileWrapper.classList.toggle('active');
        }, 150);
    }
    else {
        profileWrapper.classList.toggle('active');
        setTimeout(() => {
            toggleAboutMeText();
        }, 300);
    }
};

const btnClose = document.querySelector("#buttonClose");
const btnOpen = document.querySelector("#buttonOpen");

profile.addEventListener('click', toggleAboutMe);
btnClose.addEventListener('click', toggleAboutMe);
btnOpen.addEventListener('click', toggleAboutMe);

//////////////////////////////////////////////////////////////////////

// HAMBURGER MENU
const menuButton = document.querySelector('#menuButton');
const navbar = document.querySelector('#hamburgerMenu');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
})