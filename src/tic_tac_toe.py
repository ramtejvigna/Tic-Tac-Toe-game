# tic_tac_toe.py
def UserTurn(board, pos, player):
    if board[pos]!= " ":
        return False
    board[pos] = player
    return True

def minimax(board, player, alpha, beta, depth):
    winner = analyzeboard(board)
    if winner!= " ":
        if winner == "O":
            return 10 - depth
        elif winner == "X":
            return -10 + depth
        else:
            return 0

    if player == "O":
        value = -float('inf')
        for i in range(9):
            if board[i] == " ":
                board[i] = player
                score = minimax(board, "X", alpha, beta, depth + 1)
                board[i] = " "
                value = max(value, score)
                alpha = max(alpha, value)
                if beta <= alpha:
                    break
        return value
    else:
        value = float('inf')
        for i in range(9):
            if board[i] == " ":
                board[i] = player
                score = minimax(board, "O", alpha, beta, depth + 1)
                board[i] = " "
                value = min(value, score)
                beta = min(beta, value)
                if beta <= alpha:
                    break
        return value

def CompTurn(board):
    pos = -1
    value = -float('inf')
    alpha = -float('inf')
    beta = float('inf')
    for i in range(9):
        if board[i] == " ":
            board[i] = "O"
            score = minimax(board, "X", alpha, beta, 0)
            board[i] = " "
            if score > value:
                value = score
                pos = i
    board[pos] = "O"

def analyzeboard(board):
    winning_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for combo in winning_combinations:
        if board[combo[0]]!= " " and board[combo[0]] == board[combo[1]] == board[combo[2]]:
            return board[combo[0]]
    return " "