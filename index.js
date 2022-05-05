$(document).ready(function () {
  // menyiapkan database dengan format json
  let stokProduk = [
    {
      namaBarang: "Jet Tempur",
      jumlah: 10,
    },
    {
      namaBarang: "Nuklir Hiroshima",
      jumlah: 2,
    },
    {
      namaBarang: "Infinity Stone",
      jumlah: 5,
    },
    {
      namaBarang:"Burj Khalifa",
      jumlah:5,
    },
    {
      namaBarang: "Rudal Hipersonik",
      jumlah: 10,
    }
  ];
  let products = [
    "Jet Tempur",
    "Nuklir Hiroshima",
    "Infinity Stone",
    "Burj Khalifa",
    "Rudal Hipersonik",
  ];
  
  //menyembunyikan tombol tambah produk
  var n = 1;
  $("#btn-tambah").hide();
  $("#produk-" + n).change(function () {
    $("#btn-tambah").show();
  });
  
  //menampilkan hasil pesanan produk berdasarkan index
  let pesanan = "";
  $("#btn-pesan").click(function () {
    for (let i = 1; i <= n; i++) {
      let jumlah_idx = stokProduk.findIndex(
        (data) => data.namaBarang === $("#produk-" + i).val()
      );
      if ($("#jumlah-" + i).val() <= stokProduk[jumlah_idx].jumlah) {
        //mengurangi jumlah stok
        stokProduk[jumlah_idx].jumlah -= $("#jumlah-" + i).val();
        //output message
        pesanan +=
          "<li>" +
          $("#produk-" + i).val() +
          " (" +
          $("#jumlah-" + i).val() +
          ")</li>";
        $("#list-produk").html(`${pesanan}`);
      } else {
        alert(
          `Produk ${stokProduk[jumlah_idx].namaBarang}. Jumlah Stok ${stokProduk[jumlah_idx].jumlah}`
        );
      }
    }
  });

  //menambahkan produk
  $("#btn-tambah").click(function () {
    let jumlah_idx = stokProduk.findIndex(
      (data) => data.namaBarang === $("#produk-" + n).val(),
    );
    n += 1;
    let pesanan = `<div class="cont-2"><div class="left" id="id-${n}"><label for="produk-${n}">Produk</label><br><select id="produk-${n}" required><option value="" hidden selected>Pilih produk</option>`;
    //mapping produk ke select
    products.map((data) => {
      pesanan += `<option value="${data}">${data}</option>`;
    }
  );
    //membuat input jumlah dan tombol hapus
    pesanan += `</select><br></div><div class="left-cont-3"><label for="jumlah-${n}" style="padding-left: 5px;">Jumlah</label><br><input type="nber" id="jumlah-${n}" class="jumlah" required><br></div>`;
    pesanan += `<div id='button-delete' class="left pd-top"><button id="btn-del-${n}" class="btn-3"><div class = box style="padding-top:5px;color:red;border-color:red;">x</div></button></div>`;
    $(this).before(pesanan);

    $("#btn-del-" + n).click(function () {
      $("#id-" + n).nextAll();
      $(this).parent().parent().remove();
      $("#id-" + n).closest("div");
      $(this).parent().parent().remove();
    });
  });
});
// langsung menampilkan nama ketika input nama telah diisi
function nama (){
  var nama = $("#nama").html(`${$("#nama-pemesan").val()}`);
  $("#nama").show() = nama;
  }