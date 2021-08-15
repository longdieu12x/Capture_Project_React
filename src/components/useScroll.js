import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const UseScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.25 }); 
    //view return true when we can see ServicesSection
    (view) ? controls.start('show') : controls.start('hidden');
    return [element, controls];
}