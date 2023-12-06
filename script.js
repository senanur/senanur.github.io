function hitungTotal(arr) {
    var tot = 0;
    for (var i=0;i<arr.length;i++) {
        if (parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    return tot;
}

function hitungJumlah(kelas, elemen_id) {
    var arr = document.getElementsByClassName(kelas);
    var tot = hitungTotal(arr);
    document.getElementById(elemen_id).value = tot;
}

function cekLow(id1, id2) {
    const el1 = document.getElementById(id1)
    const el2 = document.getElementById(id2)
    if (el1.value > el2.value) {
        el1.style.backgroundColor = 'red';
        el2.style.backgroundColor = 'red';
    } else {
        el1.style.backgroundColor = '';
        el2.style.backgroundColor = '';
    }
}

function cekA() {
    hitungJumlah('pemilih-dpt', 'p1');
    hitungJumlah('pemilih-laki', 'p4');
    hitungJumlah('total-pemilih', 'p6');
}

function cekB() {
    hitungJumlah('pemilih-dpt', 'p1');
    hitungJumlah('pemilih-perempuan', 'p5');
    hitungJumlah('total-pemilih', 'p6');
}

function cekC() {
    hitungJumlah('pemilih-dptb', 'p2');
    hitungJumlah('pemilih-laki', 'p4');
    hitungJumlah('total-pemilih', 'p6');
}

function cekD() {
    hitungJumlah('pemilih-dptb', 'p2');
    hitungJumlah('pemilih-perempuan', 'p5');
    hitungJumlah('total-pemilih', 'p6');
}

function cekE() {
    hitungJumlah('pemilih-dpk', 'p3');
    hitungJumlah('pemilih-laki', 'p4');
    hitungJumlah('total-pemilih', 'p6');
}

function cekF() {
    hitungJumlah('pemilih-dpk', 'p3');
    hitungJumlah('pemilih-perempuan', 'p5');
    hitungJumlah('total-pemilih', 'p6');
}

function cekG() {
    hitungJumlah('pengguna-dpt', 'p7');
    hitungJumlah('pengguna-laki', 'p10');
    hitungJumlah('total-pengguna', 'p12');
    cekLow('g', 'a');
}

function cekH() {
    hitungJumlah('pengguna-dpt', 'p7');
    hitungJumlah('pengguna-perempuan', 'p11');
    hitungJumlah('total-pengguna', 'p12');
    cekLow('h', 'b');
}

function cekI() {
    hitungJumlah('pengguna-dptb', 'p8');
    hitungJumlah('pengguna-laki', 'p10');
    hitungJumlah('total-pengguna', 'p12');
    cekLow('i', 'c');
}

function cekJ() {
    hitungJumlah('pengguna-dptb', 'p8');
    hitungJumlah('pengguna-perempuan', 'p11');
    hitungJumlah('total-pengguna', 'p12');
    cekLow('j', 'd');
}

function cekK() {
    hitungJumlah('pengguna-dpk', 'p9');
    hitungJumlah('pengguna-laki', 'p10');
    hitungJumlah('total-pengguna', 'p12');
    cekLow('k', 'e');
}

function cekL() {
    hitungJumlah('pengguna-dpk', 'p9');
    hitungJumlah('pengguna-perempuan', 'p11');
    hitungJumlah('total-pengguna', 'p12');
    cekLow('l', 'f');
}

