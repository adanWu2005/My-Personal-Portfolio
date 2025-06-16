export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const getActiveSection = (sections, offset = 100) => {
  const scrollPosition = window.scrollY + offset;
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return section;
      }
    }
  }
  return sections[0];
};