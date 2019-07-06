import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

const createSrc = urls =>
    urls
        .reduce(
            (acc, { type, url }) => `${acc}, url('${url}') format('${type}')`,
            'local("Europa")'
        )
        .slice(2);

const createFontface = (weight, urls) => `
    @font-face {
        font-family: 'Europa';
        font-weight: ${weight};
        src: ${createSrc(urls)};
    }
`;

export const Fontfaces = createGlobalStyle`${Object.entries(fonts).reduce(
    (acc, curr) => `${acc}${createFontface(...curr)}`,
    ''
)}`;
