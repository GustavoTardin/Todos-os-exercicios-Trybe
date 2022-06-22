const peça = 'KING';

switch (peça.toLowerCase()) {
    case 'bishop':
        console.log('Freely on Diagonals');
        break;

        case 'knight':
            console.log('as a L to any direction');
            break;

            case 'queen':
                console.log('freely on diagonals, vertically and horizontally');
                break;

                case 'pawn':
                    console.log('one square ahead or one square on diagonal if there is a enemy piece');
                    break;

                    case 'rook':
                        console.log('Freely horizontall and vertically');
                        break;

                        case 'king':
                            console.log('one square to any direction');
                            break;

                            default:
                                console.log('Não é uma peça');
};
