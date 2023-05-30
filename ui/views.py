from django.http import HttpResponse, StreamingHttpResponse
from django.shortcuts import render
import cv2
# Create your views here.


def setup(request):
    return render(request, "ui/setup.html")

def manual_control(request):
    return render(request, "ui/manual_control.html")

def navigation(request):
    return render(request, "ui/navigation.html")

def drone_info(request):
    return render(request, "ui/drone_info.html")

def documentation(request):
    return render(request, "ui/documentation.html")



def video_feed(request):
    def generate_frames():
        camera = cv2.VideoCapture(0)  # Open the default camera (index 0)

        while True:
            _, frame = camera.read()  # Read the video frame

            # Convert the frame to JPEG format
            _, jpeg_frame = cv2.imencode('.jpg', frame)

            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + jpeg_frame.tobytes() + b'\r\n\r\n')

    return StreamingHttpResponse(generate_frames(), content_type='multipart/x-mixed-replace; boundary=frame')
