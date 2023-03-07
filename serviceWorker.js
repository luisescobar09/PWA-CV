const staticCV = "curriculum-vitae-site-v1"

const assets = [
    "https://luisescobar09.github.io/PWA-CV/",
    "https://luisescobar09.github.io/PWA-CV/index.html",
    "https://luisescobar09.github.io/PWA-CV/estilo.css",
    "https://luisescobar09.github.io/PWA-CV/js/app.js",
    "https://luisescobar09.github.io/PWA-CV/ui.js",
    "https://luisescobar09.github.io/PWA-CV/img/contact_bg.png",
    "https://luisescobar09.github.io/PWA-CV/img/fondo.jpg",
    "https://luisescobar09.github.io/PWA-CV/img/favicon.png",
    "https://luisescobar09.github.io/PWA-CV/img/curso1.PNG",
    "https://luisescobar09.github.io/PWA-CV/img/curso2.PNG",
    "https://luisescobar09.github.io/PWA-CV/img/curso3.PNG",
    "https://luisescobar09.github.io/PWA-CV/img/hack1.jpg",
    "https://luisescobar09.github.io/PWA-CV/img/hack2.jpg",
    "https://luisescobar09.github.io/PWA-CV/img/hack3.PNG",
    "https://luisescobar09.github.io/PWA-CV/img/ntaxi1.PNG",
    "https://luisescobar09.github.io/PWA-CV/img/ntaxi2.PNG",
    "https://luisescobar09.github.io/PWA-CV/img/ntaxi3.PNG",
    "https://luisescobar09.github.io/PWA-CV/img/ntaxi4.PNG",
    "https://luisescobar09.github.io/PWA-CV/img/ntaxi5.PNG",
    "https://luisescobar09.github.io/PWA-CV/img/ntaxi6.jpg",
    "https://luisescobar09.github.io/PWA-CV/img/Tacuche.PNG",
    "https://luisescobar09.github.io/PWA-CV/pdf/curriculum.pdf"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticCV).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
