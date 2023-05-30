setup:
	sudo apt update
	sudo apt install build-essential
	sudo apt install software-properties-common
	sudo add-apt-repository ppa:deadsnakes/ppa
	sudo apt install python3
	sudo apt-get install python3-pip
	sudo apt-get install python3-tk
	sudo apt-get install python3-dev
	sudo apt-get install python3-distutils
	sudo python3 -m pip install virtualenv 
	python3 -m virtualenv venv
	venv/bin/python3 -m pip install -r requirements.txt

brokkoly:
	sudo venv/bin/python3 -m manage runserver 0.0.0.0:8000
