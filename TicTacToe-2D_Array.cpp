#include <iostream>
#include <iomanip>
using namespace std;

class TicTacToe
{
private:
    char board[3][3];
    char player;
    char winner;
    
public:
    TicTacToe();
    //getters
    char getPlayer() const;
    char getWinner() const;
    bool isGameOver() const;
    
    //setters
    void markSquare(char mark, int row, int column);
    void changePlayer(const char &next);

    bool isValidSquare(int row, int column);
    void displayBoard() const;
};

//function prototypes
void displayPrompt(const TicTacToe &instance);
void displayWinner(char winner);


//default constructor
TicTacToe::TicTacToe()
{
    player = 'X';

    for (int row = 0; row < 3; row++)
    {
        for (int column = 0; column < 3; column++)
        {
            board[row][column] = '*';
        }
    }
}

//class function definitions
void TicTacToe::displayBoard() const
{
    for (int row = 0; row < 3; row++)
    {
        string  endL;
        
        for (int column = 0; column < 3; column++)
        {
            if ((column % 2 == 0) && (column != 0))
            {
                endL = " |\n";
            }
            
            char square = board[row][column];
            if (!square) {
                square = ' ';
            }
            
            cout << " | " << square << endL;
        }
    }
    cout << endl;
}

bool TicTacToe::isValidSquare(int r, int c)
{
    int withinRowRange = ((r >= 1) && (c <= 3));
    int withinColumnRange = ((r >= 1) && (c <= 3));
    bool validRange = static_cast<bool>(withinRowRange && withinColumnRange);
    bool vacantSquare = (static_cast<bool>(board[r-1][c-1] == '*'));

    return (validRange && vacantSquare);
}

bool TicTacToe::isGameOver() const
{
    for (int row = 0; row < 3; row++)
    {
        for (int column = 0; column < 3; column++)
        {
            if (board[row][column] == '*')
            {
                return false;
            }
        }
    }
    return true;
}

char TicTacToe::getPlayer() const
{
    return player;
}

char TicTacToe::getWinner() const
{
    char winner;
    
    // horizontal
    if ((board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') ||
        (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') ||
        (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X'))
    {
        winner = 'X';
    }
    
    // vertical
    if ((board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') ||
        (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') ||
        (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X'))
    {
        winner = 'X';
    }
    
    // diagonal
    if ((board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') ||
        (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X'))
    {
        winner = 'X';
    }
    
    // horizontal
    if ((board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') ||
        (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') ||
        (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X'))
    {
        winner = 'X';
    }
    
    // vertical
    if ((board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') ||
        (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') ||
        (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O'))
    {
        winner = 'O';
        
    }
    
    // diagonal
    if ((board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') ||
        (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O'))
    {
        winner = 'O';
    }
    return winner;
}

void TicTacToe::markSquare(char mark, int r, int c)
{
    board[--r][--c] = mark;
}

void TicTacToe::changePlayer(const char &next)
{
    player = next;
}


int main()
{
    TicTacToe game;
    int       row,
              column;
    char      currentPlayer,
              nextPlayer;

    while (!game.getWinner() && !game.isGameOver())
    {
        displayPrompt(game);
        cin >> row >> column;
        
        currentPlayer = game.getPlayer();
        if (game.isValidSquare(row, column))
        {
            game.markSquare(currentPlayer, row, column);
            //switch player turn
            nextPlayer = currentPlayer == 'X' ? 'O' : 'X';
            game.changePlayer(nextPlayer);
            game.displayBoard();
        }
        else
        {
            cout << "Illegal move, please try again. \n";
        }
        
    }
    
    if (game.getWinner())
    {
        displayWinner(game.getWinner());
    }
    else
    {
        cout << "It's a tie! \n";
    }
    
}

//function definitions
void displayPrompt(const TicTacToe &instance)
{
    cout << "Player " << instance.getPlayer();
    cout << ", enter the row and column of the square separated by space:" << endl;
}

void displayWinner(char winner)
{
    cout << "'*'*'*'*'*'*'" << endl;
    cout << "Player " << winner << " won!" << endl;
    cout << "'*'*'*'*'*'*'" << endl;
    exit(0);
}
