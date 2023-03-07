const staticCV = "curriculum-vitae-site-v1"

var GHPATH = '/PWA-CV';

const assets = [
    "${GHPATH}/",
    "${GHPATH}/index.html",
    "${GHPATH}/estilo.css",
    "${GHPATH}/js/app.js",
    "${GHPATH}/ui.js",
    "${GHPATH}/img/contact_bg.png",
    "${GHPATH}/img/fondo.jpg",
    "${GHPATH}/img/favicon.png",
    "${GHPATH}/img/curso1.PNG",
    "${GHPATH}/img/curso2.PNG",
    "${GHPATH}/img/curso3.PNG",
    "${GHPATH}/img/hack1.jpg",
    "${GHPATH}/img/hack2.jpg",
    "${GHPATH}/img/hack3.PNG",
    "${GHPATH}/img/ntaxi1.PNG",
    "${GHPATH}/img/ntaxi2.PNG",
    "${GHPATH}/img/ntaxi3.PNG",
    "${GHPATH}/img/ntaxi4.PNG",
    "${GHPATH}/img/ntaxi5.PNG",
    "${GHPATH}/img/ntaxi6.jpg",
    "${GHPATH}/img/Tacuche.PNG",
    "${GHPATH}/pdf/curriculum.pdf"
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
