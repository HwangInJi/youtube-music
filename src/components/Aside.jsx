import React from 'react'
import { IoMusicalNotes, IoPlaySkipForward, IoPlaySkipBack, IoPlay, IoPause, IoRepeat, IoShuffleOutline } from 'react-icons/io5';

const Aside = () => {
    return (
        <aside id='aside'>
            <div className='play-now'>
                <h2><IoMusicalNotes /> Now Playing</h2>
                <div className='thumb'>
                    <div className='img'></div>
                    <div className='title'>노래 제목</div>
                    <div className='artist'>가수</div>
                </div>
                <div className='progress'>
                    <div className='progress-bar'>
                        <input type='range' min='0' max='1' step='0.01' />
                    </div>
                    <div className='times'>
                        <span className='current'>0:00</span>
                        <span className='total'>10:34</span>
                    </div>
                </div>
                <div className='controls'>
                    <span className='shuffle'><IoShuffleOutline /></span>
                    <span className='prev'><IoPlaySkipBack /></span>
                    <span className='play'><IoPlay /></span>
                    <span className='pause'><IoPause /></span>
                    <span className='next'><IoPlaySkipForward /></span>
                    <span className='repeat'><IoRepeat /></span>
                </div>
                <div className='volume'>
                    <input type='range' min='0' max='100' step='1' />
                </div>
            </div>

            <div className='play-list'>
                <h3><IoMusicalNotes /> Play list</h3>
                <ul>
                    <li>
                        <span className='img'></span>
                        <span className='title'></span>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside