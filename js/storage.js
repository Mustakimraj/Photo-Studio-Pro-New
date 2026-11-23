const KEY = "photo-studio-pro-web-v1";
const defaultData = () => ({
  services: [
    {id: crypto.randomUUID(), name:"ছবি এডিট", unit:"piece", price:10},
    {id: crypto.randomUUID(), name:"ছবি প্রিন্ট", unit:"piece", price:8},
    {id: crypto.randomUUID(), name:"Passport Photo", unit:"job", price:50},
    {id: crypto.randomUUID(), name:"CV তৈরি", unit:"job", price:100}
  ],
  work: [], expenses: [], settings:{language:"bn", theme:"light"}, updatedAt:new Date().toISOString()
});
export function loadData(){
  try { const raw=localStorage.getItem(KEY); if(!raw) return defaultData(); const d=JSON.parse(raw); return {...defaultData(),...d,services:Array.isArray(d.services)?d.services:[],work:Array.isArray(d.work)?d.work:[]}; }
  catch { return defaultData(); }
}
export function saveData(data){ data.updatedAt=new Date().toISOString(); localStorage.setItem(KEY,JSON.stringify(data)); }
export function resetData(){ localStorage.removeItem(KEY); return defaultData(); }
export function downloadJson(data, filename="photo-studio-pro-backup.json"){
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=filename; a.click(); URL.revokeObjectURL(url);
}
export function downloadBlob(blob, filename){ const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=filename; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000); }
