import {Link} from 'react-router-dom';


const AccountDropItem = ({children, appProps, link, ...otherProps}) => {

    if(link !== undefined) {
        return(
            <Link to={link} className="header__dropdown--item">
                <span className="header__dropdown--text">{children}</span>
            </Link>
        )
    }else {
        return(
            <div {...otherProps} className="header__dropdown--item">
                <span className="header__dropdown--text">{children}</span>
            </div>
        )
    }
}

export default AccountDropItem;