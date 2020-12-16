

const ResultsOption = ({secondClass, selectId, options}) => {

const parentClass = 'results-container__options-box'
    return(
        <div className={`${parentClass} ${parentClass}--${secondClass}`}>
            <label htmlFor={selectId} className="results-container__options__label">Sort: </label>
            <select name={selectId} id={selectId} className="results-container__options__select">
                {
                    options.map((option, index) => {
                        return(<Option key={index} printedVal={option} />)
                    })
                }
            </select>
        </div>
    )
}


const Option = ({printedVal}) => {
    let value;
    if(typeof printedVal === 'string'){
        value = printedVal.toLowerCase();
        value = value.split(' ').join('-');
    }else{
        value = printedVal;
    }

    return(
    <option value={value}>{printedVal}</option>
    )
}

export default ResultsOption;