import './homepaage.css';
import channel from './cha.jpeg';
import thumbnail8 from './plantoriginal390x220.jpg';

const VideoEicomponent = () => {
    return (

        <div class="video-container">
            <img src={thumbnail8} alt="" class="thumbnail" />
            <div class="video-details">
                <img src={channel} alt="" class="channel-logo" />
                <div class="video-title-container">
                    <p class="video-title">25 Most Useful Plants For Homes
                    </p>
                    <p class="channel-name">Amish Singh</p>
                    <p class="video-stats">
                        12k views. 2 years ago
                    </p>
                </div>
            </div>
        </div>


    )
};
export default VideoEicomponent;