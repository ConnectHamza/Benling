// src/utils/setAOSAnimation.ts

export function setAOSAnimation(): void {
    
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-aos-desktop], [data-aos-mobile]');
  
    elements.forEach((element: HTMLElement) => {
      
      const isMobile: boolean = window.innerWidth <= 768;
      
      const animation: string | undefined = isMobile ? element.dataset.aosMobile : element.dataset.aosDesktop;
  
      
      if (animation) {
        element.setAttribute('data-aos', animation);
      }
    });
  }