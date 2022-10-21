import { FunctionComponent, PropsWithChildren, ReactElement, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useGlobalStore from '../../stores/globalStore';

interface Props {
    onCloseFocusElementID?: string;
}

const Draw: FunctionComponent<PropsWithChildren<Props>> = ({
    onCloseFocusElementID,
    children
}): ReactElement => {
    const showDraw = useGlobalStore((state) => state.showDraw);
    const toggleShowDraw = useGlobalStore((state) => state.toggleShowDraw);
    const toggleShowOverlay = useGlobalStore((state) => state.toggleShowOverlay);
    showDraw ? toggleShowOverlay(true) : toggleShowOverlay(false);

    const drawRef = useRef<HTMLElement | null>(null);

    const trapFocus = (event: KeyboardEvent) => {
        if (event.key !== 'Tab') return;

        const focusableElements = drawRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement> | null;

        if (focusableElements) {
            const firstEl = focusableElements[0];
            const lastEl = focusableElements[focusableElements?.length - 1];

            // Going forward and hit the last focusable element
            if (!event.shiftKey && document.activeElement === lastEl) {
                firstEl.focus();
                return event.preventDefault();
            }

            // Going backwards & hits the first focusable element
            if (event.shiftKey && document.activeElement === firstEl) {
                lastEl.focus();
                event.preventDefault();
            }
        }
    };

    // Good use case for when `useEvent` offical hook is released
    useEffect(() => {
        if (showDraw) document.addEventListener('keydown', (event) => trapFocus(event));
        return () => document.removeEventListener('keydown', (event) => trapFocus(event));
    }, [showDraw]);

    return (
        <AnimatePresence initial={false}>
            {showDraw && (
                <motion.aside
                    ref={drawRef}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.3 }}
                    className="h-full fixed top-0 bg-white lg:w-2/3 w-full z-90 right-0 shadow-lg"
                >
                    <header className="h-[69px] w-full flex justify-end pt-6">
                        <button
                            ref={(element) => element?.focus()}
                            onClick={() => {
                                onCloseFocusElementID?.length
                                    ? document.getElementById(onCloseFocusElementID)?.focus()
                                    : null;
                                toggleShowDraw(false);
                            }}
                            className="w-[72px] h-full flex items-center justify-center border-l border-b border-gray-400 group"
                        >
                            <i className="fa-solid fa-xmark text-blue-900 text-3xl group-hover:text-blue-500 transition-colors duration-300" />
                        </button>
                    </header>
                    <main>
                        {children ?? null}

                        {/** TEST CONTEXT */}
                        <a href="https://google.com" className="block my-4">
                            Test content item
                        </a>
                        <a href="https://google.com" className="block my-4">
                            Test content item
                        </a>
                        <a href="https://google.com" className="block my-4">
                            Test content item
                        </a>
                        <a href="https://google.com" className="block my-4">
                            Test content item
                        </a>
                        <a href="https://google.com" className="block my-4">
                            Test content item
                        </a>
                        <a href="https://google.com" className="block my-4">
                            Test content item
                        </a>
                        <a href="https://google.com" className="block my-4">
                            Test content item
                        </a>
                    </main>
                </motion.aside>
            )}
        </AnimatePresence>
    );
};

export default Draw;
