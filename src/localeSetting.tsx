
export type LocaleSetting = {
    title: string;
    label: 'English' | '日本語';
    footer: JSX.Element;
    dictionaryLinkLabel: (word: string) => string;
    dictionaryFormat: (word: string) => string;
    tryAgain: string;
    toggle: () => void;
};

const localeSetting: {'ja': LocaleSetting, 'en': LocaleSetting} = {
    'ja': {
        title: 'WORDLE サンドボックス',
        label: 'English',
        footer: <p>何度でも試せるWordleです。<br/>
        失敗回数制限がないので、正解するまで回答できます。<br/>
        リロードすれば正解の単語も違う新しいゲームを開始します。</p>,
        dictionaryLinkLabel: (word) => word.toUpperCase() + 'を辞書で引く',
        dictionaryFormat: (word) => 'https://ejje.weblio.jp/content/' + word,
        tryAgain: 'もう一回',
        toggle: () => {},
    },
    'en': {
        title: 'Wordle Sandbox',
        label: '日本語',
        footer: <p>Wordle that you can try as many times as you like.<br/>
        There is no limit on the number of failures, so you can answer until you answer correctly.<br/>
        If you reload, you will start a new game with a different correct word.</p>,
        dictionaryLinkLabel: (word) => word.toUpperCase() + ' in Dictionary',
        dictionaryFormat: (word) => 'https://www.ldoceonline.com/jp/dictionary/' + word,
        tryAgain: 'Try Again',
        toggle: () => {},
    },
}

export default localeSetting