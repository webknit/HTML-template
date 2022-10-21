import { FunctionComponent, ReactElement } from 'react';
import useGlobalStore from '../../stores/globalStore';

const SearchToggle: FunctionComponent = (): ReactElement => {
    const showDraw = useGlobalStore((state) => state.showDraw);
    const toggleShowDraw = useGlobalStore((state) => state.toggleShowDraw);

    return (
        <button
            id="global-search-toggle"
            onClick={() => (showDraw ? toggleShowDraw(false) : toggleShowDraw(true))}
            className="aside"
        >
        
        <div className="aside__slide">
                <span className="aside__slide-board">
                    OPEN SEARCH
                </span>
        </div>

        <div className="absolute z-90">
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>

            
        </button>
    );
};

export default SearchToggle;
