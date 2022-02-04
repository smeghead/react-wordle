import { render, screen, fireEvent } from '@testing-library/react';
import Wordle from './wordle';

test('keyboard a key exists.', () => {
    render(<Wordle />);
    const aElement = screen.getByRole(/keyboard-key-a/);
    expect(aElement).toHaveTextContent('a');
});

test('press keyboard a key.', () => {
    render(<Wordle />);

    fireEvent.click(screen.getByRole(/keyboard-key-a/), {
        bubbles: true,
        cancelable: true,
    })
    screen.debug()
    const challenge = screen.getByRole('Challenge-undefined');
    expect(challenge).toHaveTextContent('a');
});

test('press keyboard a key 5times.', () => {
    render(<Wordle />);

    const aKey = screen.getByRole(/keyboard-key-a/)
    'aaaaa'.split('').forEach(() => {
        fireEvent.click(aKey, {
            bubbles: true,
            cancelable: true,
        })
    })
    const challenge = screen.getByRole('Challenge-undefined');
    expect(challenge).toHaveTextContent('aaaaa');
});

test('press keyboard a key 5times and press enter.', async () => {
    render(<Wordle />);

    const aKey = screen.getByRole(/keyboard-key-a/)
    'aaaaa'.split('').forEach(() => {
        fireEvent.click(aKey, {
            bubbles: true,
            cancelable: true,
        })
    })
    fireEvent.click(screen.getByRole(/keyboard-key-Enter/), {
        bubbles: true,
        cancelable: true,
    })
    screen.debug()
    await screen.findByRole('Challenge-true')
    const challenge = screen.getByRole('Challenge-true');
    expect(challenge).toHaveTextContent('aaaaa');
});
