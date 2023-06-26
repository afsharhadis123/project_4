import React from 'react';
import DefaultLayout from '../Layout/DefaultLayout';
import YouTube from 'react-youtube';

const YouTubePage = () => {
  const videoIds = ['BZVmcPlgF70','R4Gg356-uF4','8iAYou8v8hA', '1i-I_ka2RIQ', 'd6pJeEYQzB8']; // Replace with your desired video IDs

  return (
    <DefaultLayout>
      {videoIds.map((videoId) => (
        <YouTube key={videoId} videoId={videoId} className="youtube-video" />
      ))}
    </DefaultLayout>
  );
};

export default YouTubePage;