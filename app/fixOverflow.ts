
const fixOverflow = () => {
    const body = document.body;
    const html = document.documentElement;

    
    const viewportWidth = Math.max(html.clientWidth, window.innerWidth || 0);

    
    document.querySelectorAll<HTMLElement>('*').forEach((element) => {
        if (element.scrollWidth > viewportWidth) {
            element.style.maxWidth = `${viewportWidth}px`;
            element.style.overflowX = 'hidden';
            element.style.overflowX = ''
        }
    });
};


export const initFixOverflow = () => {
    fixOverflow();
    window.addEventListener('resize', fixOverflow);
};