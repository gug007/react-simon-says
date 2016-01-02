import React from 'react'
import Sound from 'react-sound'

export default ({data, active, user, handleClick}) => {
    return active === data.id
        ? <div key={data.id}  id={data.id} onClick={user && handleClick} className={data.color}
               style={{opacity: '1', cursor: user ? 'pointer' : 'default'}}>
              <Sound playStatus={'PLAYING'} url={`http://www.kellyking.me/projects/simon/sounds/${data.id}.ogg`} />
          </div>
        : <div key={data.id} id={data.id} onClick={user && handleClick}className={data.color} style={{opacity: user ?  '.4' : '.3', cursor: user ?  'pointer' : 'default'}}></div>
}