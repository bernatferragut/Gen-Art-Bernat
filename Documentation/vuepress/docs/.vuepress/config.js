module.exports = {
    title: "Generative Art",
    description: "Introduction to Generative Art with P5.js",
    themeConfig: {
        nav: [
            {text: "Start", link: '/'},
            {text: 'Introduction', link: 'introduction.md'},
            {text: 'Generative Art Course', link: 'dot-abstraction.md'},
            {text: 'P5JS-Reference', link: 'https://p5js.org/es/reference/'},
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