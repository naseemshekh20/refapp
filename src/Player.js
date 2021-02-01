import { Lightning, VideoPlayer } from '@lightningjs/sdk'


export default class Player extends Lightning.Component {

    static _template() {
        return {

        };
    }

    mplay(source) {
        console.log("mplay");
        VideoPlayer.open(source);
        VideoPlayer.play(source);
    }

    _firstActive() {
        let url = 'http://clips-media-aka.warnermediacdn.com/cnn/clips/2021-01/79895-97f21462b4db4236abcbd68a5819234b/mp4/cms3-CNN-trump-alamo-border-wall-texas-remarks-vpx-primary-58581-79895-1920x1080_8000k.mp4'

        VideoPlayer.consumer(this);
        this.mplay(url)
    }

    $mediaplayerPlaying() {
        console.log("playing")
    }
}
