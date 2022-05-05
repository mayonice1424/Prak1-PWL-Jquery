$(document).ready(function () {
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
  
  // hiding btn tambah
  var num = 1;
  $("#btn-tambah").hide();
  $("#produk-" + num).change(function () {
    $("#btn-tambah").show();
  });
  
  //pesan produk
  let pesanan = "";
  $("#btn-pesan").click(function () {
    for (let i = 1; i <= num; i++) {
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

  //tambah produk
  $("#btn-tambah").click(function () {
    let jumlah_idx = stokProduk.findIndex(
      (data) => data.namaBarang === $("#produk-" + num).val(),
    );
    num += 1;
    let pesanan = `<div class="clearfix cont2"><div class="left" id="id-${num}"><label for="produk-${num}">Produk</label><br><select id="produk-${num}" required><option value="" hidden selected>Pilih produk</option>`;
    
    products.map((data) => {
      pesanan += `<option value="${data}">${data}</option>`;
    }
  );

    pesanan += `</select><br></div><div class="left cont3"><label for="jumlah-${num}" style="padding-left: 5px;">Jumlah</label><br><input type="number" id="jumlah-${num}" class="jumlah" required><br></div>`;
    pesanan += `<div id='button-delete' class="left pd-top"><button id="btn-del-${num}" class="btn-3"><div class = box style="padding-top:5px;color:red;border-color:red;">x</div></button></div>`;
    $(this).before(pesanan);

    $("#btn-del-" + num).click(function () {
      $("#id-" + num).nextAll();
      $(this).parent().parent().remove();
      $("#id-" + num).closest("div");
      $(this).parent().parent().remove();
    });
  });
});

function nama (){
  var nama = $("#nama").html(`${$("#nama-pemesan").val()}`);
  $("#nama").show() = nama;
  }