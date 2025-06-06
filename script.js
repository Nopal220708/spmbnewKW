function cetakPDF() {
  const element = document.getElementById('summary');
  const opt = {
    margin: 1,
    filename: 'bukti-pendaftaran.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

window.addEventListener('DOMContentLoaded', () => {
  const kode = 'PPDB' + Math.floor(100000 + Math.random() * 900000);
  const kodeEl = document.getElementById('kode');
  if (kodeEl) {
    kodeEl.textContent = kode;
  }
});
