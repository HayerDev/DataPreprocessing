# DataPreprocessing and file backup using server

## Overview
This project includes a set of Jupyter notebooks for data processing and visualization, along with a 
backend server for handling data uploads and downloads. The server adds a few key benefits. Firstly it
introduces a layer of security for backing up and saving the data. The server acts as a centralized hub for data storage and management.
It also enhances collaboration as multiple users can interact with the same dataset in an isolated instance. 

## Structure
### Notebooks
Located in the notebooks/ directory:

- generateCSV.ipynb: Generates CSV files with sample data
- imports.ipynb: Imports data from the server
- exports.ipynb: Exports data to the server
- analysis.ipynb: Provides data insights, including histogram, boxplot, and heatmap
- preprocessing.ipynb: fills missing values and handles outliers using the Interquartile Range (IQR) method
- final_preprocessing.ipynb: Normalizes the dataset

### Server
Located in the server/ directory:

- app.js: The main entry point for the Node.js server
- routes/dataRoutes.js: Defines routes for data uploads and downloads
- controllers/dataController.js: Handles the logic for data upload and download requests
- filestorage/dataModel.js: Manages file storage operations

### File Storage Directories
uploads/: Contains files uploaded to the server.
data/: Files generated from scripts
server/uploads/: Files received by the server
server/data/: Files stored by the serveer

## How to Use
Provide instructions on how to set up and run the project.
 Include steps to install dependencies, start the server, and open Jupyter notebooks.

- Starting the Server/
	cd server
	npm install
	node app
- Running Scripts/
	cd notebooks
	jupyter notebook/
**Some of the scripts themselves can be run in isolation, namely generateCSV, analysis, preprocessing, and final_preprocessing.
import and export are used to interface with the server for file storage and retrieval**

## Requirements
- Node.js
- Jupyter
- Python 3.x
	