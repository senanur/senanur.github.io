function hitungTotal(arr) {
    var tot = 0;
    for (var i=0;i<arr.length;i++) {
        if (parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    return tot;
}

function valPemilihDPTLaki(kelas, elemen_id) {
    hitungJumlah(kelas, elemen_id);
    hitungJumlah()
}

function hitungJumlah(kelas, elemen_id) {
    var arr = document.getElementsByClassName(kelas);
    var tot = hitungTotal(arr);
    document.getElementById(elemen_id).value = tot;
}

function findTotalDPTb() {
    var arr = document.getElementsByClassName('pemilih-dptb');
    var tot = hitungTotal(arr);
    document.getElementById('pemilih-dptb-total').value = tot;
}

function findTotalDPK() {
    var arr = document.getElementsByClassName('pemilih-dpk');
    var tot = hitungTotal(arr);
    document.getElementById('pemilih-dpk-total').value = tot;
}