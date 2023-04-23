# Brokkoly-CS

Xplore Drone Control Station Repository

## Sumary 
This repository contains files for being able to run the EPFL Xplore's drone platform (Brokkoly). The CS frontend is developped using the Django Python framework for web development. The control station communicates with the rest of the systems using the ROS2 (Robotic Operating System 2) framework, in particular ROS2 Dashing. 

## Setup

In order to test, contribute and/or run the control station, you will need the following dependencies:
- Ubuntu 16.04
- ROS2 Dashing
- python3

First, clone the Brokkoly-CS repository:
```
git clone git@github.com:dtataru1/Brokkoly-CS.git
```
Afterwards you can run the setup make command to download all necessary requirements (check Makefile for more information)
```
make setup
```
This will download all python modules and setup a virtual environment called **venv**. When contributing, downloading or testing the software it is always recommended to source this environment (source `venv/bin/activate`).

To launch the django development server just run the following command:
```
make brokkoly
```

## Contribution
