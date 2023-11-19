import './homepaage.css';
import channel from './cha.jpeg';
import thumbnail9 from './videogamesoriginal390x220.jpg';

const VideoNicomponent = () => {
    return (

        <div class="video-container">
            <img src={thumbnail9} alt="" class="thumbnail" />
            <div class="video-details">
                <img src={channel} alt="" class="channel-logo" />
                <div class="video-title-container">
                    <p class="video-title">12 Most Addictive Games Of Summer 2023
                    </p>
                    <p class="channel-name">LeviathanGaming</p>
                    <p class="video-stats">
                        3 million views. 1 month ago
                    </p>
                </div>
            </div>
        </div>


    )
};
export default VideoNicomponent;