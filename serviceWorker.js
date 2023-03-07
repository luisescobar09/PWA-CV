const staticCV = "curriculum-vitae-site-v1"

const assets = [
    "/PWA-CV/",
    "/PWA-CV/index.html",
    "/PWA-CV/estilo.css",
    "/PWA-CV/js/app.js",
    "/PWA-CV/ui.js",
    "/PWA-CV/img/contact_bg.png",
    "/PWA-CV/img/fondo.jpg",
    "/PWA-CV/img/favicon.png",
    "/PWA-CV/img/curso1.PNG",
    "/PWA-CV/img/curso2.PNG",
    "/PWA-CV/img/curso3.PNG",
    "/PWA-CV/img/hack1.jpg",
    "/PWA-CV/img/hack2.jpg",
    "/PWA-CV/img/hack3.PNG",
    "/PWA-CV/img/ntaxi1.PNG",
    "/PWA-CV/img/ntaxi2.PNG",
    "/PWA-CV/img/ntaxi3.PNG",
    "/PWA-CV/img/ntaxi4.PNG",
    "/PWA-CV/img/ntaxi5.PNG",
    "/PWA-CV/img/ntaxi6.jpg",
    "/PWA-CV/img/Tacuche.PNG",
    "/PWA-CVpdf/curriculum.pdf"
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
