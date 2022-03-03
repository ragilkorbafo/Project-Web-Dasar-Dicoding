const txtElement =['layanan informasi akademik..',  'profil program studi..','panduan siakadcloud..','jadwal praktikum..','panduan tugas akhir..','panduan praktek kerja..'];
let count = 0;
let txtIndex =0;
let currenTxt='';
let words='';

(function ganti(){
    if(count==txtElement.length){
        count=0;
    }
    currenTxt=txtElement[count];

    words = currenTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ganti').textContent = words;
    if (words.length == currenTxt.length){
        count++;
        txtIndex=0;
    }
    setTimeout (ganti, 90);

})();



