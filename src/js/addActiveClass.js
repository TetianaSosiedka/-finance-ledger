export const AddActiveClass = () => {
  const header = document.getElementsByClassName('nav-list')[0];
  const links = header.getElementsByClassName('nav-link');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      const current = document.getElementsByClassName('active');
      if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '');
      }
      this.className += ' active';
    });
  }
};
