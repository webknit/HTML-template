import { FunctionComponent, ReactElement, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useGlobalStore from '../../stores/globalStore';

const Overlay: FunctionComponent = (): ReactElement => {
    const showOverlay = useGlobalStore((state) => state.showOverlay);
    const toggleShowOverlay = useGlobalStore((state) => state.toggleShowOverlay);
    const toggleShowDraw = useGlobalStore((state) => state.toggleShowDraw);

    const close = () => {
        toggleShowDraw(false);
        toggleShowOverlay(false);
    };

    // When React release `useEvent` hook, this would be a good use case rather than callback
    const onEscape = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') close();
    }, []);

    useEffect(() => {
        document.addEventListener('keyup', onEscape);
        return () => document.removeEventListener('keyup', onEscape);
    }, [onEscape]);

    return (
        <AnimatePresence>
            {showOverlay && (
                <motion.div
                    initial={{ display: 'none', opacity: 0 }}
                    animate={{ display: 'block', opacity: 0.6 }}
                    exit={{ display: 'none', opacity: 0 }}
                    transition={{ opacity: { duration: 0.35 }, duration: 0 }}
                    onClick={close}
                    className="inset-0 bg-blue-500 fixed"
                />
            )}
        </AnimatePresence>
    );
};

export default Overlay;
