import gsap from 'gsap'

export function slideIn(){
    gsap.from('.slideIn',{
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: {
            amount: 0.3
        }
    
    })
}