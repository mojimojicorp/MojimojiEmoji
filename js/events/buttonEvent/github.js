export default function addGithubBtnEvent() {
  const githubIcon = document.querySelector('.fa-github');
  githubIcon.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    whale.tabs.create({
      url: 'https://github.com/mojimojicorp/EmojiByEternal',
    });
  });
}
