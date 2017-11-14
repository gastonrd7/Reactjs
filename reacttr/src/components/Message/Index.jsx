import React, { Component } from 'react'
import styles from './message.css'
import moment from 'moment'
import { Link } from 'react-router-dom'

class Message extends Component {
    constructor(props) {
        super(props)
        
    };

    render () {
        let dateFormat = moment(this.props.date).fromNow()
        return (
            <div className={styles.root}>
                <div className={styles.user}>
                    <Link to='/profile'>
                        <figure>
                            <img className={styles.avatar} src={this.props.picture} />
                        </figure>
                    </Link>
                    <span className={styles.displayName}>{this.props.displayName} </span>
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
                        className={styles.icon}
                        onClick={this.props.onPressReweet}
                    >
                        <span className='fa fa-retweet'></span>
                        <span className={styles.num}>{this.props.numRetweets}</span>
                     </div>
                    <div 
                        className={styles.icon}
                        onClick={this.props.onPressFavorite}
                    >
                        <span className='fa fa-star-o'></span>
                        <span className={styles.num}>{this.props.numFavorites}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message