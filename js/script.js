  function hitungLuas() {
    const alas = document.getElementById('alas').value.trim();
    const tinggi = document.getElementById('tinggi').value.trim();
    const output = document.getElementById('output');

    if (alas === '' || tinggi === '' || isNaN(alas) || isNaN(tinggi)) {
      output.innerText = 'Masukkan angka valid untuk alas dan tinggi.';
      return;
    }

    const a = parseFloat(alas);
    const t = parseFloat(tinggi);
    const luas = 0.5 * a * t;

    output.innerHTML = `
      <strong>Perhitungan Luas:</strong><br>
      L = 1/2 × a × t<br>
      L = 1/2 × ${a} × ${t}<br>
      L = ${luas.toFixed(2)} cm²
    `;
  }

  function hitungKeliling() {
    const sisiA = document.getElementById('sisiA').value.trim();
    const sisiB = document.getElementById('sisiB').value.trim();
    const sisiC = document.getElementById('sisiC').value.trim();
    const output = document.getElementById('output');

    if (
      sisiA === '' || sisiB === '' || sisiC === '' ||
      isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)
    ) {
      output.innerText = 'Masukkan angka valid untuk ketiga sisi.';
      return;
    }

    const a = parseFloat(sisiA);
    const b = parseFloat(sisiB);
    const c = parseFloat(sisiC);
    const keliling = a + b + c;

    output.innerHTML = `
      <strong>Perhitungan Keliling:</strong><br>
      K = a + b + c<br>
      K = ${a} + ${b} + ${c}<br>
      K = ${keliling.toFixed(2)} cm
    `;
  }