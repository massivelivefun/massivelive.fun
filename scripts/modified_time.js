var _currDateAsISO = new Date().toISOString();
document.querySelector('meta[name="modified_time"]').setAttribute("content", _currDateAsISO)
