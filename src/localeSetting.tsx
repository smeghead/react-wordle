/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-key */
import React from 'react'

export type LocaleSetting = {
    title: string;
    label: 'English' | '日本語';
    footer: JSX.Element;
    dictionaryLinkLabel: (word: string) => string;
    dictionaryFormat: (word: string) => string;
    tryAgain: string;
    toggle: () => void;
    shareButtonLabel: string;
    copiedMessage: string;
};

const localeSetting: {'ja': LocaleSetting, 'en': LocaleSetting} = {
    'ja': {
        title: 'WORDLE サンドボックス',
        label: 'English',
        footer: <p>何度でも試せる<a href="https://www.nytimes.com/games/wordle/index.html" rel="noreferrer" target="_blank">Wordle</a>クローンです。<br/>
        チャレンジ回数制限がないので、正解するまで何度でもチャレンジできます。<br/>
        リロードすれば、新しいゲームを開始します。</p>,
        dictionaryLinkLabel: (word) => word.toUpperCase() + 'を辞書で引く',
        dictionaryFormat: (word) => 'https://ejje.weblio.jp/content/' + word,
        tryAgain: 'もう一回',
        toggle: () => {},
        shareButtonLabel: 'Share',
        copiedMessage: '結果をクリップボードにコピーしました',
    },
    'en': {
        title: 'Wordle Sandbox',
        label: '日本語',
        footer: <p><a href="https://www.nytimes.com/games/wordle/index.html" rel="noreferrer" target="_blank">Wordle</a> clone that you can try as many times as you like.<br/>
        There is no limit on the number of failures, so you can answer until you answer correctly.<br/>
        If you reload, you will start a new game.</p>,
        dictionaryLinkLabel: (word) => word.toUpperCase() + ' in Dictionary',
        dictionaryFormat: (word) => 'https://www.ldoceonline.com/jp/dictionary/' + word,
        tryAgain: 'Try Again',
        toggle: () => {},
        shareButtonLabel: 'Share',
        copiedMessage: 'copied the result to clipboard.',
    },
}

export default localeSetting