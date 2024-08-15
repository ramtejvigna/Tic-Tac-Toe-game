# app.py
from flask import Flask, render_template, jsonify, request
import src.tic_tac_toe as ttt

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/board')
def index():
    return render_template('index.html')

@app.route('/move', methods=['POST'])
def move():
    try: 
        data = request.json
        board = data['board']
        position = data['position']
        player = data['player']
        
        if not data or 'board' not in data or 'position' not in data or 'player' not in data:
            return jsonify({"status": "error", "message": "Invalid data"}), 400

        if player == "X":  # Human player
            valid_move = ttt.UserTurn(board, position, player)
            if not valid_move:
                return jsonify({"status": "invalid", "board": board})

            winner = ttt.analyzeboard(board)
            if winner != " ":
                return jsonify({"status": "win", "winner": winner, "board": board})

            if " " not in board:
                return jsonify({"status": "draw", "board": board})

            ttt.CompTurn(board)
            winner = ttt.analyzeboard(board)
            if winner != " ":
                return jsonify({"status": "win", "winner": winner, "board": board})

            if " " not in board:
                return jsonify({"status": "draw", "board": board})

        return jsonify({"status": "continue", "board": board})
    except Exception as e: 
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
