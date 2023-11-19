import './homepaage.css';
import channel from './cha.jpeg';
import thumbnail5 from './covidoriginal390x220.jpg';

const VideoFicomponent = () => {
    return (

        <div class="video-container">
            <img src={thumbnail5} alt="" class="thumbnail" />
            <div class="video-details">
                <img src={channel} alt="" class="channel-logo" />
                <div class="video-title-container">
                    <p class="video-title">Why Is Covid The Worst Of All Pandemics?
                    </p>
                    <p class="channel-name">World Talks</p>
                    <p class="video-stats">
                        67 million views. 1 year ago
                    </p>
                </div>
            </div>
        </div>


    )
};
export default VideoFicomponent;