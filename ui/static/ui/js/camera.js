const videoContainer = document.getElementById('video-container');
const socket = new WebSocket('ws://' + window.location.host + '/ws/video_stream/');

socket.onmessage = function(event) {
  const imgElement = document.createElement('img');
  imgElement.src = URL.createObjectURL(event.data);
  
  while (videoContainer.firstChild) {
    videoContainer.firstChild.remove();
  }
  videoContainer.appendChild(imgElement);
};