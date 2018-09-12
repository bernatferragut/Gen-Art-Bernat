module.exports = {
    title: "Generative Art",
    description: "Introduction to Generative Art with P5.js",
    themeConfig: {
        nav: [
            {text: "Start", link: '/'},
            {text: 'Introduction', link: 'introduction.md'},
            {text: 'The Dot', link: 'dot-abstraction.md'},
        ],
        sidebar: [
            '/',
            ['/introduction.md','introduction'],
            ['/dot-abstraction.md','dot-abstraction'],
            ['/dot-creation.md','dot-creation'],
            ['/dot-animation.md','dot-animation'],
            ['/sliders.md','dot control: sliders'],
            ['/translate-motion.md','dot-animation-translate'],
            ['/modulus.md','dot-animation-periodical'],
            ['/sinus.md', 'dot-animation-circular'],
            ['/log.md', 'dot-animation-limited'],
        ]
    }
}