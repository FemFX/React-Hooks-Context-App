import React, { useContext } from 'react';
import { Consumer, Context } from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

const Tracks = () => {
  //   const { track_list } = useContext(Context);

  return (
    <Consumer>
      {value => {
        const { track_list, heading } = value;
        if (!track_list || !track_list.length) {
          return <Spinner />;
        } else {
          return (
            <>
              <h3 className="text-center mb-4">{heading}</h3>
              <div className="row">
                {track_list.map(item => (
                  <Track key={item.track.track_id} track={item.track} />
                ))}
              </div>
            </>
          );
        }
      }}
    </Consumer>
  );
};
export default Tracks;
