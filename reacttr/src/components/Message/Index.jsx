import React, { Component } from 'react'
import styles from './message.css'
import moment from 'moment'

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
        this.props.onReweet()
        this.setState({
            pressRetweet: true
        })
    }

    render () {
        let dateFormat = moment(this.props.date).fromNow()
        return (
            <div className={styles.root}>
                <div className={styles.user}>
                    <figure>
                        <img className={styles.avatar} src={this.props.picture} />
                    </figure>
                    <span className={styles.displayName}>{this.props.displayName} </span>
                    <span className={styles.username}>{this.props.username} </span>
                    <span className={styles.date}>{dateFormat} </span>
                </div>
                <h3>{this.props.text}</h3>
                <div className={styles.buttons}>
                    <div className={styles.icon}><span className='fa fa-reply'></span></div>
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

export default Message