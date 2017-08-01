import os
from flask import Flask
from flask import render_template

import sudoku
# Creates Web Server Object
app = Flask(__name__)


# Create Root Directory Route
@app.route('/')

# Static File Hotlinking
#url_for('static', filename='css/main.css')
#url_for('static', filename='css/bootstrap.css')
#url_for('static', filename='css/font-awesome.min.css')



def hello(name=None):
	# sudokuMatrix = sudokugen.genSudoku()
	# Create Medium Level Sudoku using Github Sudoku Library https://github.com/JoeKarlsson/Python-Sudoku-Generator-Solver
	sudokuMatrix = sudoku.main("Medium")
	return render_template('index.html', sudokuMatrix=sudokuMatrix)


# Sets environment variables by retrieving them from the OS Module (Host IP and Listening Port)
app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT', 8080)), debug=True)