const config = {
    "12hr": true, // 12 hour clock
    greetings: {
        night: "Good Night",
        morning: "Good Morning",
        afternoon: "Pleasing afternoon",
        evening: "Delightful evening",
        name: "AA"
    },
    // main buttons
    buttons: [
        {
            url: 'https://github.com',
            icon: 'github'
        },
        {
            url: 'https://mail.google.com',
            icon: 'mail'
        }
    ],
    // right side panels
    panels: [
        // example link list panel
        {
            icon: 'github',
            items: [
                {
                    name: 'Me',
                    url: 'https://github.com/AAGaming00'
                },
                {
                    name: 'Powercord fork',
                    url: 'https://github.com/AAGaming00/powercord'
                }
            ]
        },
        // example iframe panel
        {
            url: 'https://canary.discord.com/widget?id=754130139415183401&theme=dark',
            // optional prop to zoom the frame in/out
            zoom: 0.8
        }
    ],
    // for weather data, remove this to remove weather
    weather: {
        // weather icon pack to use
        iconPack: 'OneDark',
        // whether to preload the icons or not
        preloadIcons: true,
        tempUnit: 'C',
        key: '1ba472bdeb003a88cf66c572ac6ffb3e',
        latitude: 43.653225,
        longitude: -79.383186
    }
}

if (typeof window !== 'undefined') Object.assign(config, window.config)

export default config
