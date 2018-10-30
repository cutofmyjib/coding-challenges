// Author: Diana Lozano
// Assignment Number: Lab 4
// File Name: L4_lozano.cpp
// Course/Section: COSC 1337 Section 012
// Date: 10/28/2018
// Instructor: Dr. B. Hohlt
//
/*
Write a program that allows two players to play a game of tic-tac-toe
using the class TicTacToe to represent the gameboard. The main function
should include a loop that drives the action of the game invoking
member functions on an instance of your class TicTacToe as well as
calling any stand-alone functions you write. The main program should
only play ONE GAME - do not repeat the game.
*/

#include <iostream>
#include <iomanip>
using namespace std;

class TicTacToe
{
private:
    char ticTacBoard[9] = {};
    char winner;
    char currentPlayer = 'X';
    
public:
    bool isValidSquare(int index) const;
    bool isGameOver() const;
    void displayBoard();
    char getCurrentPlayer() const;
    char getWinner() const;
    void markSquare(int row, int column) ;
};

//function prototypes
int getIndex(int row, int column);
void displayPrompt(const TicTacToe &instance);
void displayWinner(char winner);


//class function definitions

void TicTacToe::displayBoard()
{
    for (int index = 0; index < 9; index++)
    {
        string  endL,
                beginL;
        char square = ticTacBoard[index];
        
        if ((index % 3 == 0) && (index != 0))
        {
            endL = "\n| ";
        }
        else if (index == 0)
        {
            beginL = "| ";
        }
        
        if (!ticTacBoard[index]) {
            square = ' ';
        }
        
        cout << beginL << endL << square << " | ";
        
    }
    cout << endl;
}

bool TicTacToe::isValidSquare(int index) const
{
    bool validRange = static_cast<bool>((index >= 0) && (index <= 8));
    bool vacantSquare = !(static_cast<bool>(ticTacBoard[index]));

    return (validRange && vacantSquare);
}

bool TicTacToe::isGameOver() const
{
    for (int index = 0; index < 9; index++)
    {
        if (!(static_cast<int>(ticTacBoard[index])))
        {
            return false;
        }
    }
    return true;
}

char TicTacToe::getCurrentPlayer() const
{
    return currentPlayer;
}

char TicTacToe::getWinner() const
{
    char winner;
    // horizontal
    if ((ticTacBoard[0] == 'X' && ticTacBoard[1] == 'X' && ticTacBoard[2] == 'X') ||
        (ticTacBoard[3] == 'X' && ticTacBoard[4] == 'X' && ticTacBoard[5] == 'X') ||
        (ticTacBoard[6] == 'X' && ticTacBoard[7] == 'X' && ticTacBoard[8] == 'X'))
    {
        winner = 'X';
    }
    
    // vertical
    if ((ticTacBoard[0] == 'X' && ticTacBoard[3] == 'X' && ticTacBoard[6] == 'X') ||
        (ticTacBoard[1] == 'X' && ticTacBoard[4] == 'X' && ticTacBoard[7] == 'X') ||
        (ticTacBoard[2] == 'X' && ticTacBoard[5] == 'X' && ticTacBoard[8] == 'X'))
    {
        winner = 'X';
        
    }
    
    // diagonal
    if ((ticTacBoard[0] == 'X' && ticTacBoard[4] == 'X' && ticTacBoard[8] == 'X') ||
        (ticTacBoard[2] == 'X' && ticTacBoard[4] == 'X' && ticTacBoard[6] == 'X'))
    {
        winner = 'X';
    }
    
    // horizontal
    if ((ticTacBoard[0] == 'O' && ticTacBoard[1] == 'O' && ticTacBoard[2] == 'O') ||
        (ticTacBoard[3] == 'O' && ticTacBoard[4] == 'O' && ticTacBoard[5] == 'O') ||
        (ticTacBoard[6] == 'O' && ticTacBoard[7] == 'O' && ticTacBoard[8] == 'O'))
    {
        winner = 'O';
    }
    
    
    // vertical
    if ((ticTacBoard[0] == 'O' && ticTacBoard[3] == 'O' && ticTacBoard[6] == 'O') ||
        (ticTacBoard[1] == 'O' && ticTacBoard[4] == 'O' && ticTacBoard[7] == 'O') ||
        (ticTacBoard[2] == 'O' && ticTacBoard[5] == 'O' && ticTacBoard[8] == 'O'))
    {
        winner = 'O';
    }
    
    //diagonal
    if ((ticTacBoard[0] == 'O' && ticTacBoard[4] == 'O' && ticTacBoard[8] == 'O') ||
        (ticTacBoard[2] == 'O' && ticTacBoard[4] == 'O' && ticTacBoard[6] == 'O'))
    {
        winner = 'O';
    }
    return winner;
}

void TicTacToe::markSquare(int posX, int posY)
{
    int square = getIndex(posX, posY);
    
    if (isValidSquare(square))
    {
        ticTacBoard[square] = currentPlayer;
        
        //switch player turn
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    }
    else
    {
        cout << "Illegal move, please try again. \n";
        return;
    }
    
}

int main()
{
    TicTacToe game;
    
    int row,
        column;

    while (!game.getWinner() && !game.isGameOver())
    {
        displayPrompt(game);
        cin >> row >> column;
        
        game.markSquare(row, column);
        game.displayBoard();

    }
    
    if (game.getWinner())
    {
        displayWinner(game.getWinner());
    }
    else
    {
        cout << "There's no winner \n";
    }
    
}

//function definitions
void displayPrompt(const TicTacToe &instance)
{
    cout << "Player " << instance.getCurrentPlayer();
    cout << ", enter the row and column of the square separated by space:" << endl;
}

void displayWinner(char winner)
{
    cout << "'*'*'*'*'*'*'" << endl;
    cout << "Player " << winner << " won!" << endl;
    cout << "'*'*'*'*'*'*'" << endl;
    exit(0);
}

int getIndex(int row, int column)
{
    int index = (row - 1) * 3 + column - 1;
    return index;
}


/*
 ------ Happy Path ------
 Player X, enter the row and column of the square separated by space:
 1 1
 | X |   |   |
 |   |   |   |
 |   |   |   |
 Player O, enter the row and column of the square separated by space:
 1 2
 | X | O |   |
 |   |   |   |
 |   |   |   |
 Player X, enter the row and column of the square separated by space:
 2 2
 | X | O |   |
 |   | X |   |
 |   |   |   |
 Player O, enter the row and column of the square separated by space:
 1 3
 | X | O | O |
 |   | X |   |
 |   |   |   |
 Player X, enter the row and column of the square separated by space:
 3 3
 | X | O | O |
 |   | X |   |
 |   |   | X |
 '*'*'*'*'*'*'
 Player X won!
 '*'*'*'*'*'*'
 
 ------ Non-Happy Path ------
 Player X, enter the row and column of the square separated by space:
 3 2
 |   |   |   |
 |   |   |   |
 |   | X |   |
 Player O, enter the row and column of the square separated by space:
 1 1
 | O |   |   |
 |   |   |   |
 |   | X |   |
 Player X, enter the row and column of the square separated by space:
 3 3
 | O |   |   |
 |   |   |   |
 |   | X | X |
 Player O, enter the row and column of the square separated by space:
 3 1
 | O |   |   |
 |   |   |   |
 | O | X | X |
 Player X, enter the row and column of the square separated by space:
 2 1
 | O |   |   |
 | X |   |   |
 | O | X | X |
 Player O, enter the row and column of the square separated by space:
 2 2
 | O |   |   |
 | X | O |   |
 | O | X | X |
 Player X, enter the row and column of the square separated by space:
 1 3
 | O |   | X |
 | X | O |   |
 | O | X | X |
 Player O, enter the row and column of the square separated by space:
 2 3
 | O |   | X |
 | X | O | O |
 | O | X | X |
 Player X, enter the row and column of the square separated by space:
 1 2
 | O | X | X |
 | X | O | O |
 | O | X | X |
 There's no winner 
 
 */
