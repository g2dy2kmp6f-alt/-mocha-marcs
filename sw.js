const CACHE="mocha-marcs-v8";
const ASSETS=["./","./index.html","./manifest.webmanifest","./logo.png","./espresso.jpg","./americano.jpg","./latte.jpg","./cappuccino.jpg","./mocha.jpg","./iced-coffee.jpg","./iced-latte.jpg","./iced-mocha.jpg","./iced-caramel-macchiato.jpg","./brown-sugar-shaken-espresso.jpg","./iced-white-chocolate-cinnamon-dolce-latte.jpg","./hazelnut-cream-americano.jpg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request)))})
