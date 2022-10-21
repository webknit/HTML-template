const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['src/**/*.html', 'src/**/*.ts', 'src/**/*.tsx', '../Views/**/*.cshtml'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.25rem',
                sm: '2rem',
                md: '3.875rem',
                lg: '3.25rem',
               '2xl': '0',
            },
        },
        screens: {
            sm: '414px',
            md: '768px',
            lg: '1024px',
            xl: '1288px',
            '2xl': '1440px'
        },
        fontFamily: {
            sans: ['AvenirNextLTPro', ...defaultTheme.fontFamily.sans]
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '2rem',
            '6xl': '3.5rem',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            gray: {
                50: '#f6f6f6',
                100: '#f2f2f2',
                200: '#efefef',
                300: '#e5e5e5',
                400: '#cccccc',
                500: '#b4b4b4',
                600: '#9c9c9c',
                700: '#888888',
                800: '#666666',
                900: '#505050',
                950: '#333333'
            },
            slate: {
                500: '#a7adba',
                600: '#3c4a6f'
            },
            blue: {
                200: '#99d6f0',
                300: '#8cd3ef',
                400: '#66c5e9',
                500: '#4cbbe5',
                600: '#009fda',
                700: '#085ec4',
                800: '#003591',
                900: '#0f204b'
            },
            red: {
                500: '#c4262e',
                600: '#a63931'
            },
            purple: {
                500: '#675390'
            },
            orange: {
                500: '#e68523'
            },
            green: {
                300: '#64b33a',
                400: '#58b550',
                500: '#46aa1e',
                600: '#3f9c35',
                700: '#36842d',
                800: '#588131'
            },
            yellow: {
                500: '#ff0',
                600: '#eecc23'
            },
            brand: {
                facebook: '#3b5998',
                twitter: '#1da1f2',
                youtube: 'red',
                instagram: {
                    magenta: '#c32aa3',
                    blue: '#4c5fd7',
                    purple: '#7232bd',
                    orange: '#f46f30',
                    yellow: '#ffdc7d'
                },
                google: {
                    blue: '#4285f4',
                    red: '#ea4335',
                    yellow: '#fbbc05',
                    green: '#34a853',
                    plus: '#db4437'
                },
                pinterest: '#bd081c',
                linkedin: '#007bb5',
                vimeo: '#1ab7ea',
                tumblr: '#2c4762',
                snapchat: '#fffc00',
                whatsapp: {
                    light: '#25d366',
                    default: '#075e54',
                    dark: '#128c7e'
                },
                apple: '#a6b1b7',
                amazon: '#f90',
                microsoft: {
                    red: '#f35022',
                    green: '#80bb03',
                    blue: '#03a5f0',
                    yellow: '#ffb903'
                },
                foursquare: {
                    pink: '#f94877',
                    navy: '#073282',
                    blue: '#2d5be3'
                },
                swarm: '#ffa633',
                medium: '#02b875',
                skype: {
                    default: '#00aff0',
                    dark: '#0078d7'
                },
                android: '#a4c639',
                stumbleupon: '#e94826',
                flickr: {
                    pink: '#f40083',
                    blue: '#006add'
                },
                yahoo: '#430297',
                soundcloud: '#f50',
                spotify: {
                    default: '#1ed760',
                    dark: '#1db954'
                },
                dribbble: '#ea4c89',
                slack: {
                    purple: '#4d394b',
                    blue: '#70cadb',
                    moss: '#3eb890',
                    pink: '#e01765',
                    yellow: '#e8a723',
                    greenblue: '#1a937d',
                    olive: '#65863a',
                    red: '#cc2027'
                },
                reddit: '#ff5700',
                deviantart: '#05cc47',
                pocket: '#ee4056',
                quora: {
                    red: '#a20',
                    blue: '#2b6dad'
                },
                slideshare: {
                    orange: '#e68523',
                    blue: '#00a0dc'
                },
                fivehundredpx: '#0099e5',
                vk: '#4a76a8',
                listly: {
                    orange: '#df6d46',
                    blue: '#52b1b3'
                },
                vine: '#00b489',
                steam: '#171a21',
                discord: '#7289da'
            }
        },

        extend: {
            zIndex: {
                // ... 0 - 50
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100'
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
};
