

const Pages = ({secondClass}) => {
    const parentClass = 'results-container__options-box';
    return(
        <div className={`${parentClass} ${parentClass}--${secondClass}`}>
            <label className="results-container__options__label">Page: </label>
            <div className="results-container__options__pages">
                <Page pageNr="1" active />
                <Page pageNr="2" />
                <Page pageNr="3" />
            </div>
        </div>
    )
}


const Page = ({pageNr, active}) => {
    const pageClass = 'results-container__options__page';
    return(
        <div className={active ? `${pageClass} ${pageClass}-active` : `${pageClass}`}>
            {pageNr}
        </div>
    )
}


export default Pages;