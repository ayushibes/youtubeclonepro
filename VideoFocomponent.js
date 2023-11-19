import './homepaage.css';
import channel from './cha.jpeg';
import thumbnail4 from './murderoriginal390x220.jpg';

const VideoFocomponent = () => {
    return (

        <div class="video-container">
            <img src={thumbnail4} alt="" class="thumbnail" />
            <div class="video-details">
                <img src={channel} alt="" class="channel-logo" />
                <div class="video-title-container">
                    <p class="video-title">Worst Of The Worsts Crimes Of The Decade
                    </p>
                    <p class="channel-name">Rio-mystery</p>
                    <p class="video-stats">
                        589k views. 34 minutes ago
                    </p>
                </div>
            </div>
        </div>


    )
};
export default VideoFocomponent;