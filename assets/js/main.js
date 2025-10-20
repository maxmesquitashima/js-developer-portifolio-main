(function () {
    const profilePhoto = document.getElementById('profile.photo');
    const profileName = document.getElementById('profile.name');
    const profileJob = document.getElementById('profile.job');
    const profileLocation = document.getElementById('profile.location');
    const profilePhone = document.getElementById('profile.phone');
    const profileEmail = document.getElementById('profile.email');
    const hardSkills = document.getElementById('profile.skills.hardSkills');
    const softSkills = document.getElementById('profile.skills.softSkills');
    const languages = document.getElementById('profile.languages');
    const portfolio = document.getElementById('profile.portfolio');
    const professionalExperience = document.getElementById('profile.professionalExperience');

    function updateProfileInfo(profileData) {
        profilePhoto.src = profileData.photo;
        profilePhoto.alt = profileData.name;
        profileName.innerText = profileData.name;
        profileJob.innerText = profileData.job;
        profileLocation.innerText = profileData.location;
        profilePhone.innerText = profileData.phone;
        profileEmail.innerText = profileData.email;
        profileEmail.href = `mailto:${profileData.email}`;
    }

    function updateSkills(profileData) {
        const hardSkillsList = profileData.skills.hardSkills.map(skill => {
            return `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`;
        }).join('');
        hardSkills.innerHTML = hardSkillsList;

        const softSkillsList = profileData.skills.softSkills.map(skill => {
            return `<li>${skill}</li>`;
        }).join('');
        softSkills.innerHTML = softSkillsList;
    }

    function updateLanguages(profileData) {
        const languagesList = profileData.languages.map(language => {
            return `<li>${language}</li>`;
        }).join('');
        languages.innerHTML = languagesList;
    }

    function updatePortfolio(profileData) {
        const portfolioList = profileData.portfolio.map(item => {
            const github = item.github ? `<a class="github" href="${item.url}" target="_blank">Github</a>` : '';
            return `<li><h3 class="title">${item.name}</h3><a class="link" href="${item.url}" target="_blank">${item.url}</a>${github}</li>`;
        }).join('');
        portfolio.innerHTML = portfolioList;
    }

    function updateProfessionalExperience(profileData) {
        const experienceList = profileData.professionalExperience.map(experience => {
            return `<li><h3 class="title">${experience.name}</h3><p class="period">${experience.period}</p><p>${experience.description}</p></li>`;
        }).join('');
        professionalExperience.innerHTML = experienceList;
    }

    fetch('data/profile.json')
        .then(response => response.json())
        .then(profileData => {
            updateProfileInfo(profileData);
            updateSkills(profileData);
            updateLanguages(profileData);
            updatePortfolio(profileData);
            updateProfessionalExperience(profileData);
        });
})();
