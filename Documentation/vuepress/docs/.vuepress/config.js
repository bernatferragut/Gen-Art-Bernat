module.exports = {
    title: "Generative Art",
    description: "Generative Art with P5.js by Bernat Ferragut",
    themeConfig: {
        nav: [
            {text: "Start", link: '/'},
            {text: 'Introduction', link: 'introduction.md'},
            {text: 'Generative Art Course', link: 'dot-abstraction.md'},
            {text: 'P5JS-Reference', link: 'https://p5js.org/es/reference/'},
        ],
        sidebar: [
            '/',
            ['/introduction.md','generative art'],
            ['/dot-abstraction.md','dot-abstraction'],
            ['/dot-creation.md','dot-creation'],
            ['/dot-animation.md','dot-animation'],
            ['/dot-sliders.md','dot-sliders'],
            ['/dot-row.md','dot-row'],
            ['/dot-matrix.md','dot-matrix'],
            ['/dot-experiments.md', 'dot-experiments'],
        ]
    }
}