import './homepaage.css';
import channel from './cha.jpeg';
import thumbnail7 from './messioriginal390x220.jpg';

const VideoSevcomponent = () => {
    return (

        <div class="video-container">
            <img src={thumbnail7} alt="" class="thumbnail" />
            <div class="video-details">
                <img src={channel} alt="" class="channel-logo" />
                <div class="video-title-container">
                    <p class="video-title">The Little Boy From Rosario.Best of Messi Magic
                    </p>
                    <p class="channel-name">Football lives</p>
                    <p class="video-stats">
                        250 million views. 1 year ago
                    </p>
                </div>
            </div>
        </div>


    )
};
export default VideoSevcomponent;