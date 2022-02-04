import { render, screen, fireEvent } from '@testing-library/react';
import Wordle from './wordle';

test('keyboard a key exists.', () => {
    render(<Wordle />);
    const aElement = screen.getByRole(/keyboard-key-a/);
    expect(aElement).toHaveTextContent('a');
});

test('press keyboard a key.', async () => {
    render(<Wordle />);

    fireEvent.click(screen.getByRole(/keyboard-key-a/), {
        bubbles: true,
        cancelable: true,
    })
    const challenge = await screen.findByRole('Challenge-undefined');
    expect(challenge.textContent).toContain('a')
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

test('input world and press enter.', async () => {
    render(<Wordle />);
    
    // words.txt の読み込みを待つ
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(1000)

    let c = 'w'
    fireEvent.click(screen.getByRole('keyboard-key-' + c), {
        // bubbles: true,
        // cancelable: true,
    })
    let inputed = await screen.findByRole('Challenge-undefined')
    expect(inputed.textContent).toContain(c)

    c = 'o'
    fireEvent.click(screen.getByRole('keyboard-key-' + c), {
        // bubbles: true,
        // cancelable: true,
    })
    inputed = await screen.findByRole('Challenge-undefined')
    expect(inputed.textContent).toContain(c)

    c = 'r'
    fireEvent.click(screen.getByRole('keyboard-key-' + c), {
        // bubbles: true,
        // cancelable: true,
    })
    inputed = await screen.findByRole('Challenge-undefined')
    expect(inputed.textContent).toContain(c)

    c = 'l'
    fireEvent.click(screen.getByRole('keyboard-key-' + c), {
        // bubbles: true,
        // cancelable: true,
    })
    inputed = await screen.findByRole('Challenge-undefined')
    expect(inputed.textContent).toContain(c)

    c = 'd'
    fireEvent.click(screen.getByRole('keyboard-key-' + c), {
        // bubbles: true,
        // cancelable: true,
    })
    inputed = await screen.findByRole('Challenge-undefined')
    expect(inputed.textContent).toContain(c)

    fireEvent.click(screen.getByRole(/keyboard-key-Enter/), {
        // bubbles: true,
        // cancelable: true,
    })
    // await screen.findByRole('Challenge-true')
    screen.debug()
    await delay(1000)

    
    expect((await screen.findByRole('Challenge-true')).textContent).toContain('world')
});
