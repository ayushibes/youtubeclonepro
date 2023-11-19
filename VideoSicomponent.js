import './homepaage.css';
import channel from './cha.jpeg';
import thumbnail6 from './sceneryoriginal390x220.jpg';

const VideoSicomponent = () => {
    return (

        <div class="video-container">
            <img src={thumbnail6} alt="" class="thumbnail" />
            <div class="video-details">
                <img src={channel} alt="" class="channel-logo" />
                <div class="video-title-container">
                    <p class="video-title">15 Most Beautiful Places Which Are A Must Visit
                    </p>
                    <p class="channel-name">Wanderer</p>
                    <p class="video-stats">
                        97k views. 6 months ago
                    </p>
                </div>
            </div>
        </div>


    )
};
export default VideoSicomponent;