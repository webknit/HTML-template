import { slideToggle } from '../utils';

const Accordion = (): void => {
    init();

    function init() {
        const accordions: Element[] = Array.from(document.querySelectorAll('.accordion'));

        accordions?.forEach((item) => {
            const btn: Element | null = item.querySelector('.accordion__btn');

            btn?.addEventListener('click', () => {
                const nextEl = btn.nextElementSibling as HTMLElement;
                slideToggle(nextEl);
                btn?.parentElement?.classList.toggle('accordion--active');
                btn?.setAttribute(
                    'aria-expanded',
                    `${!(btn.getAttribute('aria-expanded') === 'true')}`
                );
            });
        });
    }
};

export default Accordion;
