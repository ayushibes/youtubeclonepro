import './homepaage.css';
import channel from './cha.jpeg';
import thumbnail from './luffy-the-last-hope-yd.jpg';

const VideoComponent = () => {
    return (

        <div class="video-container">
            <img src={thumbnail} alt="" class="thumbnail" />
            <div class="video-details">
                <img src={channel} alt="" class="channel-logo" />
                <div class="video-title-container">
                    <p class="video-title">24 Years of Glory
                    </p>
                    <p class="channel-name">Eiichiro Sensei</p>
                    <p class="video-stats">
                        500 million views. 4 months ago
                    </p>
                </div>
            </div>
        </div>


    )
};
export default VideoComponent;