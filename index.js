const projects = [
  {
    title: 'Guess the number',
    link: 'project-1',
    difficulty: 'easy',
    developer: 'Ashwani',
    avatarUrl:
      'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    tags: [],
  },
  {
    title: 'Guess the number',
    link: 'project-1',
    difficulty: 'medium',
    developer: 'Ashwani',
    tags: [],
  },
  {
    title: 'Guess the number',
    link: 'project-1',
    difficulty: 'easy',
    developer: 'Ashwani',
    tags: [],
  },
  {
    title: 'Guess the number',
    link: 'project-1',
    difficulty: 'hard',
    developer: 'Ashwani',
    tags: [],
  },
  {
    title: 'Guess the number',
    link: 'project-1',
    difficulty: 'easy',
    developer: 'Ashwani',
    tags: [],
  },
  {
    title: 'Guess the number',
    link: 'project-1',
    difficulty: 'medium',
    developer: 'Ashwani',
    tags: [],
  },
];

const projectCardsContainer = document.getElementById('project-cards');

// Generate the project cards
projects.forEach((project) => {
  const cardLink = document.createElement('a');
  cardLink.href = `vanilla-js/${project.link}/index.html`;
  cardLink.classList.add('card');

  const title = document.createElement('h3');
  title.textContent = project.title;

  const developer = document.createElement('div');
  developer.classList.add('developer');

  const avatar = document.createElement('img');
  avatar.src =
    project.avatarUrl ||
    'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg';
  avatar.alt = 'User Avatar';
  avatar.classList.add('avatar');

  const developerName = document.createElement('p');
  developerName.textContent = project.developer;

  const ribbon = document.createElement('div');
  ribbon.classList.add('ribbon', project.difficulty.toLowerCase());
  ribbon.textContent =
    project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1);

  developer.appendChild(avatar);
  developer.appendChild(developerName);

  cardLink.appendChild(ribbon);

  cardLink.appendChild(title);
  cardLink.appendChild(developer);

  projectCardsContainer.appendChild(cardLink);
});
