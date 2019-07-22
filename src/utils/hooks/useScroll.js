import { useEffect, useState } from 'react';

/**
 * 
 * @param {object} ref - The reference to the item to watch
 * @param {function} handler - Handler to use when item is scrolled into view
 * @param {number} offset - The offset of the how much more the item is scrolled into view
 */
export const useScroll = ({ current }, handler, offset = 60) => {
    const [scroll, setScroll] = useState(window.scrollY);
    useEffect(() => {

        if (!current) {
            window.setTimeout(() => setScroll(scroll ? 0 : -1), 10);
        }

        const _handler = () => {
            if (current) {
                if (scroll >= current.offsetTop + offset) {
                    handler();
                    return;
                }
            }
            setScroll(window.scrollY);
        }

        _handler();
        window.addEventListener('scroll', _handler, { passive: true });

        return () => {
            window.removeEventListener('scroll', _handler, { passive: true });
        };
    }, [scroll]);
} 