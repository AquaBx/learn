// node_modules/@tauri-apps/api/chunk-FEIY7W7S.js
var d = Object.defineProperty;
var e = (c, a) => {
  for (var b in a)
    d(c, b, { get: a[b], enumerable: true });
};

// node_modules/@tauri-apps/api/chunk-5UWJICAP.js
var w = {};
e(w, { convertFileSrc: () => u, invoke: () => d2, transformCallback: () => s });
function l() {
  return window.crypto.getRandomValues(new Uint32Array(1))[0];
}
function s(r, n = false) {
  let e2 = l(), t = `_${e2}`;
  return Object.defineProperty(window, t, { value: (o) => (n && Reflect.deleteProperty(window, t), r == null ? void 0 : r(o)), writable: false, configurable: true }), e2;
}
async function d2(r, n = {}) {
  return new Promise((e2, t) => {
    let o = s((i) => {
      e2(i), Reflect.deleteProperty(window, `_${a}`);
    }, true), a = s((i) => {
      t(i), Reflect.deleteProperty(window, `_${o}`);
    }, true);
    window.__TAURI_IPC__({ cmd: r, callback: o, error: a, ...n });
  });
}
function u(r, n = "asset") {
  let e2 = encodeURIComponent(r);
  return navigator.userAgent.includes("Windows") ? `https://${n}.localhost/${e2}` : `${n}://localhost/${e2}`;
}
export {
  u as convertFileSrc,
  d2 as invoke,
  s as transformCallback
};
//# sourceMappingURL=@tauri-apps_api_tauri.js.map
