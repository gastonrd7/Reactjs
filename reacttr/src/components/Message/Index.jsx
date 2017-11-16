import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './message.css'
import moment from 'moment'
import { Link } from 'react-router-dom'

//no me toma los warnings si algo anda mal con esto, volver a ver en algun momento
const propTypes = {
    onFavorite: PropTypes.func.isRequired,
    onRetweet: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired,
    pressRetweet: PropTypes.func.isRequired,
    pressFavorite: PropTypes.func.isRequired,
    date: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired 
}

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pressFavorite: false,
            pressRetweet: false
        }

        this.onPressReweet = this.onPressReweet.bind(this)
        this.onPressFavorite = this.onPressFavorite.bind(this)
    };

    onPressFavorite(){
        this.props.onFavorite()
        this.setState({
            pressFavorite: true
        })
    }

    onPressReweet(){
        this.props.onRetweet()
        this.setState({
            pressRetweet: true
        })
    }

    render () {
        let dateFormat = moment(this.props.date).fromNow()
        let userLink = `/user/${this.props.username}`
        return (
            <div className={styles.root}>
                <div className={styles.user}>
                    <Link to={userLink}> 
                        <figure>
                            <img className={styles.avatar} src={this.props.picture} />
                        </figure>
                    </Link>
                    <span className={styles.displayNameStyle}>{this.props.displayName} </span>
                    <span className={styles.username}>{this.props.username} </span>
                    <span className={styles.date}>{dateFormat} </span>
                </div>
                <h3>{this.props.text}</h3>
                <div className={styles.buttons}>
                    <div 
                        className={styles.icon}
                        onClick={this.props.onReplyTweet}
                    >
                        <span className='fa fa-reply'></span>
                    </div>
                    <div 
                        className={(this.state.pressRetweet) ? styles.rtGreen : ''}
                        onClick={this.onPressReweet}
                    >
                        <span className='fa fa-retweet'></span>
                        <span className={styles.num}>{this.props.numRetweets}</span>
                     </div>
                    <div 
                        className={(this.state.pressFavorite) ? styles.favYellow : ''}
                        onClick={this.onPressFavorite}
                    >
                        <span className='fa fa-star-o'></span>
                        <span className={styles.num}>{this.props.numFavorites}</span>
                    </div>
                </div>
            </div>
        )
    }
}

Message.propTypes = propTypes
// Message.propTypes = {
//     onFavorite: PropTypes.func.isRequired,
//     onRetweet: PropTypes.func.isRequired, 
//     date: PropTypes.number.isRequired,
//     username: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
//     displayName: PropTypes.string.isRequired,
//     onReplyTweet: PropTypes.func.isRequired,
//     pressRetweet: PropTypes.func.isRequired,
//     pressFavorite: PropTypes.func.isRequired
    
// };

export default Message