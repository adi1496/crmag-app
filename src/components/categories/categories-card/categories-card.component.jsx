import React from 'react';
import { Redirect } from 'react-router-dom';

import CardButton from '../../button/button.component';

// style={{
//     backgroundImage: `url(img/temp/laptop.jpeg)`
//   }}

class CategoriesCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: false
        }
    }
    // const [redirect, setRedirect] = useState(false);

    clickSeeMore = (event) => {
        this.props.handleCategoryBtn(event.target.dataset.id);
        this.setState({redirect: true});
    }

    componentWillUnmount() {
        this.setState({redirect: false});
    }

    render() {
        const {catName, articleCount, img, data} = this.props;
        if(this.state.redirect) {
            return (<Redirect to="/products" />);
        }else{
            return (
                <div className="categories__card">
                    <img className="categories__img" data-id={data} onClick={this.clickSeeMore} src={img} alt="img"/>
                    <h3 className="heading-3" data-id={data} onClick={this.clickSeeMore}>{catName.toUpperCase()}</h3>
                    <span className="categories__text">{articleCount} {articleCount > 1 ? 'articles' : 'article'}</span>
                    <CardButton data-id={data} onClick={this.clickSeeMore} btnClass="see-more-btn">See More</CardButton>
                </div>
            )
        }
    }


}


export default CategoriesCard;