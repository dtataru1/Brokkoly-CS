# Brokkoly-CS

Xplore Drone Control Station Repository

## Sumary 
This repository contains files for being able to run the EPFL Xplore's drone platform (Brokkoly). The CS frontend is developped using the Django Python framework for web development. The control station communicates with the rest of the systems using the ROS2 (Robotic Operating System 2) framework, in particular ROS2 Dashing. 

## Setup

In order to test, contribute and/or run the control station, you will need the following dependencies:
- Ubuntu 20.04
- ROS2 Foxy

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

This repository follows the continous CI/CD workflow. Functional working versions are patched in releases, and the main branch always contains the latest release.
The dev branch is the main working branch on which developped code is pushed to and tested. Everytime a new feature, bugfix or other code needs to be written or updated, you need to branch out from the dev branch using the following guidelines:
The following conventions should be followed for branch naming:
For new features: /feature/description-of-feature
For bug fixes: /bugfix/bug-description
For refactoring of code: /refactor/stuff-to-refactor


For merging back to dev the following procedure should be followed:
Ensure branch is working, in parcticular by writing unit tests (described later)
merge dev back to your branch, to ensure proper functionality, and resolve any merge conflicts (use of VS Code merge conflict editor is recommended)
Create a Pull Request on Github and detailing the changes to your branch, and request a review from someone else on the team. Once the PR is approved (if changes requested address those and re-request review), the person that created the PR is responsible for merging to the dev branch. Once merged, delete the feature/bugfix branch as it is not needed.

## Testing

For testing and ensuring no broken code is pushed on the dev and even less so on the main branch, unittests are written and applied. On each pull request, a github action is set up to set the environment and run all unit tests.

MORE INFORMATION COMING...