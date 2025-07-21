const CACHE_NAME='confeitaria-v2';
const urlsToCache=[
    '/',
    '/index.html',
    '/style.min.css',
    '/menu.min.js',
    '/imagens/logo.png',
    '/imagens/loja.jpg',
    '/imagens/BOLO1.png',
    '/imagens/BOLO2.png',
    '/imagens/BOLO3.png'
];

self.addEventListener('install',event=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=>cache.addAll(urlsToCache))
        .then(()=>self.skipWaiting())
    )
});

self.addEventListener('activate',event=>{
    event.waitUntil(
        caches.keys().then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cacheName=>{
                    if(cacheName!==CACHE_NAME){
                        return caches.delete(cacheName)
                    }
                })
            )
        }).then(()=>self.clients.claim())
    )
});

self.addEventListener('fetch',event=>{
    if(event.request.destination==='image'){
        event.respondWith(
            caches.match(event.request).then(response=>{
                if(response){return response}
                return fetch(event.request).then(fetchResponse=>{
                    if(fetchResponse.ok){
                        const responseClone=fetchResponse.clone();
                        caches.open(CACHE_NAME).then(cache=>{
                            cache.put(event.request,responseClone)
                        })
                    }
                    return fetchResponse
                })
            })
        )
    }else{
        event.respondWith(
            caches.match(event.request).then(response=>{
                return response||fetch(event.request)
            })
        )
    }
});
