import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import Panoroma from './PanoromaImages'

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowVrImage: false,
            Image: ''
        }

    }
    componentDidMount() {
        this.props.fetchData('http://demo8754559.mockable.io/getImages');
    }
    ShowVrHandler(...e) {
        this.setState({
            ShowVrImage: true, Image: e[0]
        })
    }
    CloseVrImage(){
        this.setState({
            ShowVrImage:false
        })
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        else if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        else if (this.state.ShowVrImage) {
            return <Panoroma img={this.state.Image} close={this.CloseVrImage.bind(this)} />
        }
        else {

            return (
                <div>
                    <h1>A Sample Vr Viewing Experience</h1>
                    {this.props.items.map((item, index) => (
                        <div key={index} style={{
                            height: '100px', width: '100px', position: 'relative', display: 'inline-block',
                            float: 'left', marginRight: '50px', paddingLeft: '50px'
                        }}>

                            <img onClick={this.ShowVrHandler.bind(this, item.pano)} src={item.pano} alt="" height='100%' width='100%' />
                            {item.name}
                        </div>
                    ))}

                </div>
            );
        }
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
