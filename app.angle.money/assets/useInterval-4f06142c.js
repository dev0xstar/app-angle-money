import{f as e}from"./react-ac02b43c.js";function f(t,r){const n=e.useRef(t);e.useEffect(()=>{n.current=t},[t]),e.useEffect(()=>{if(!r&&r!==0)return;const s=setInterval(()=>n.current(),r);return()=>clearInterval(s)},[r])}export{f as u};