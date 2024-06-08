import gsap from 'gsap'

export const useListAnimations = () =>{
    function onBeforeEnter(el: Element): void {
        const element = el as HTMLElement;
        element.style.opacity = '0';
        element.style.height = '0';
      }
      
      function onEnter(el: Element, done: () => void): void {
        const element = el as HTMLElement;
        const index = parseFloat(element.dataset.index || '0'); // Default to '0' if undefined
       requestAnimationFrame(()=>{
        gsap.to(element, {
          opacity: 1,
          height: 'auto',
          delay: Math.min(index * 0.1, 0.15),
          onComplete: done,
        });
       })
      }
      
      function onLeave(el: Element, done: () => void): void {
        const element = el as HTMLElement;
        const index = parseFloat(element.dataset.index || '0'); // Default to '0' if undefined
        requestAnimationFrame(()=>
          {gsap.to(element, {
          opacity: 0,
          height: '0',
          delay: Math.min(index * 0.1, 0.15),
          onComplete: done,
        });
      })}
      return {onBeforeEnter, onEnter, onLeave}
}