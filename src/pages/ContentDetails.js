import React from 'react'
import axios from 'axios'
import videojs from 'video.js'

export default class ContentDetails extends React.Component{
    state = {
        baseUrl: 'https://api.bioscopelive.com',
        contentTitle: '',
        contentDetails: '',
        contentUrl: '',

    }

    async componentDidMount(){
        const {bongoId} = this.props.match.params;

        var token = localStorage.getItem("tokenSaved");
        // console.log( this.$route.params.bongoId);

        let objectInstance = {
            url: this.state.baseUrl + '/api/en/content/' + bongoId,
            method: 'get',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + token,
                "Access-Code" : "QkQ%3D"
            },
        };

        // console.log(objectInstance);

        await axios(objectInstance).then((res) => {
            this.setState({contentUrl : res.data._embedded.content.videoUrl});
            // console.log(this.contentUrl);
            this.setState({contentTitle : res.data._embedded.content.title});
            this.setState({contentDetails : res.data._embedded.content.synopsis.detailSynopsis});

        }).catch((e) => {
            console.log('error = '+ JSON.stringify(e, null, 2))
        })

        var options = {
            html5: {
                hls: {

                }
            },

            techOrder: ['html5'],
        }

        var player = videojs('my-player', options);
        // console.log('content = '+this.contentUrl);
        var obj = {
            // src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
            src: this.state.contentUrl,
            type: 'application/x-mpegURL'

        };

        // console.log(obj);
        await player.src({
            src: this.state.contentUrl,
            // src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
            type: 'application/x-mpegURL'
        });
        player.play();
    }

    componentDidUpdate(){

    }
    render(){
        return(
            <div className="total-content-list">
                <div>
                <div className=""><h1>{this.state.contentTitle}</h1></div>
                <div className="total-content-list">
                    <video id="my-player" className="video-js vjs-default-skin" controls preload="auto" width="640" height="264" data-setup='{"fluid": true}'>
                    </video>
                </div>
                    <div className="description"><b>Description: </b>{this.state.contentDetails}</div>
                </div>
            </div>
        );
    }
}


