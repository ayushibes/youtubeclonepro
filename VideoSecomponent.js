import './homepaage.css';
import channel from './cha.jpeg';
import thumbnail2 from './ronaldooriginal390x220.jpg';

const VideoSecomponent = () => {
    return (

        <div class="video-container">
            <img src={thumbnail2} alt="" class="thumbnail" />
            <div class="video-details">
                <img src={channel} alt="" class="channel-logo" />
                <div class="video-title-container">
                    <p class="video-title">Best Of Cristiano Ronaldo
                    </p>
                    <p class="channel-name">Footballtalks</p>
                    <p class="video-stats">
                        590 million views. 1 year ago
                    </p>
                </div>
            </div>
        </div>


    )
};
export default VideoSecomponent;