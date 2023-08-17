var express = require('express');
var request = require('request');
var alasql = require('alasql');
var port = process.env.PORT || 3030;
var compression = require('compression');
var app = express();
app.use(compression());

app.get('/api', function(req, res) {
    return res.json({
        description: 'end point zmbpediabogor.my.id data author ramahardiansidik@gmail.com / visit ramahardian.online'
    });
});

app.get("/api/kategori", function(req, res) {
    request({
        url: 'https://api.airtable.com/v0/appMmICDCO6mBhZYl/kategori?api_key=keysY3XpvIdkAd38I',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var bulk = [];
            var resd = alasql('SELECT * FROM ?', [html.records]);
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;
                var idkategori = vall['id_kategori'];
                var namakategori = vall['nama_kategori'];

                bulk.push({
                    id: id,
                    idkategori: idkategori,
                    namakategori: namakategori
                });
            }
            res.send(bulk)
        }
    })
});

function removeSpecialChars(str) {
    return str.replace(/(?!\w|\s)./g, '')
        .replace(/\s+/g, ' ')
        .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
}

app.get("/api/caridata/:nama", function(req, res) {
    var namas = req.params.nama.replace(/-/g, " ");
    request({
        url: 'https://api.airtable.com/v0/appJnzRgVZn2IjPX6/product_data?api_key=keyn7tbnITsVXlugK',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql("SELECT * FROM ?", [html.records]);
            var myArrays = [];
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                if (resd[i].fields['gambar']) {
                    var gb = resd[i].fields['gambar'][0]['thumbnails'].large.url;
                    var id = resd[i].id;
                    var filename = vall['gambar'][0]['filename'];
                    var satu = gb.split("/")[4];
                    var dua = gb.split("/")[5];
                    var gam = 'https://zmbpediabogor.my.id/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");
                } else {
                    var gam = 'https://zmbpediabogor.my.id/assets/img/tdk.svg'
                }
                var namaproduk = vall['namaproduk'];
                var stok = vall['stok'];
                var harga = vall['harga'];
                var kategori = vall['kategori'];
                var deskripsi = vall['deskripsi'];
                var stokproduk = vall['stokproduk'];

                myArrays.push({
                    id: id,
                    namaproduk: namaproduk,
                    gambar: gam,
                    stok: stok,
                    harga: harga,
                    kategori: kategori,
                    deskripsi: deskripsi,
                    stokproduk: stokproduk
                });

            }
            var myArraysa = []
            var pur = removeSpecialChars(namas)
            var hasil = alasql("SELECT * FROM ? WHERE namaproduk LIKE ?", [myArrays, '%' + pur + '%']);
            var inputText = namas;
            for (var i = 0; i < hasil.length; i++) {
                var vall = hasil[i];
                var namaproduk = vall['namaproduk'].replace(new RegExp(namas, "gi"), (match) => `<span class="higlight">${match}</span>`);
                var stok = vall['stok'];
                var namaproduks = vall['namaproduk'];
                var harga = vall['harga'];
                var id = vall['id'];
                var kategori = vall['kategori'];
                var deskripsi = vall['deskripsi'];
                var stokproduk = vall['stokproduk'];
                var gambar = vall['gambar'];

                myArraysa.push({
                    id: id,
                    namaproduk: namaproduk,
                    namaproduks: namaproduks,
                    gambar: gambar,
                    stok: stok,
                    harga: harga,
                    kategori: kategori,
                    deskripsi: deskripsi,
                    stokproduk: stokproduk
                });
            }
            res.send({ data: myArraysa });
        }
    })
});

app.get("/api/catalogdata", function(req, res) {
    function shuffle(o) { //v1.0
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    request({
        url: 'https://api.airtable.com/v0/appMmICDCO6mBhZYl/produk?api_key=keysY3XpvIdkAd38I',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []
            var keyArray = Object.keys(resd);
            keyArray = shuffle(keyArray)


            if (resd[0].fields['gambar_produk'][0]['thumbnails']) {
                var vall = resd[0].fields;
                if (vall['gambar_produk'][0].type !== 'video/mp4') {
                    var namaprodukur = vall['nama_produk'];
                    var gambar = vall['gambar_produk'][0]['thumbnails'].large.url;
                    var filename = vall['gambar_produk'][0]['filename'];
                    var satu = gambar.split("/")[4];
                    var dua = gambar.split("/")[5];
                    var gamm = 'https://zmbpediabogor.my.id/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");

                } else {
                    var gambar = '';
                    var filename = '';
                    var satu = '';
                    var dua = '';
                    var gamm = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                    var url = vall['gambar_produk'][0]['url']
                }

            } else {
                var namaprodukur = ''
                var gamm = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
            }
            var gam;
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;
                if (vall['gambar_produk']) {

                    if (vall['gambar_produk'][0].type !== 'video/mp4') {
                        var gb = resd[i].fields['gambar_produk'][0]['thumbnails'].large.url;


                        var filename = vall['gambar_produk'][0]['filename'];
                        var satu = gb.split("/")[4];
                        var dua = gb.split("/")[5];
                        gam = 'https://zmbpediabogor.my.id/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");
                    } else {
                        var gambar = '';
                        var filename = '';
                        var satu = '';
                        var dua = '';
                        gam = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                        var url = vall['gambar_produk'][0]['url']
                    }

                } else {
                    var gam = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                }


                var namaproduk = '';
                var kategori = ''
                var harga = ''
                var stok = ''
                var deskripsi = ''
                if (vall['nama_produk']) {
                    var namaproduk = vall['nama_produk'];
                }
                if (vall['kategori_produk']) {
                    var kategori = vall['kategori_produk'];
                }
                if (vall['harga_produk']) {
                    var harga = vall['harga_produk'];
                }

                if (vall['stok_prodduk']) {
                    var stok = vall['stok_prodduk'];
                }

                if (vall['deskripsi-produk']) {

                    var deskripsi = vall['deskripsi-produk'];
                }

                harganya = 'saat ini produk tidak ada dalam etalase penjualan';
                if (harga) {
                    var number_string = harga.toString(),
                        split = number_string.split(','),
                        sisa = split[0].length % 3,
                        rupiah = split[0].substr(0, sisa),
                        ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);

                    if (ribuan) {
                        separator = sisa ? '.' : '';
                        rupiah += separator + ribuan.join('.');
                    }
                    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
                    harganya = 'dikisaran harga Rp. ' + rupiah;
                }



                myArrays.push({
                    id: id,
                    namaproduk: namaproduk,
                    gambar: gam,
                    stok: stok,
                    harga: harganya,
                    kategori: kategori,
                    deskripsi: deskripsi
                });

            }

            res.send({ data: myArrays, ogimg: gamm, alt: namaprodukur });
        }

    })
});


app.get("/api/aboutdata", function(req, res) {
    request({
        url: 'https://api.airtable.com/v0/appJnzRgVZn2IjPX6/tentang_kami?api_key=keyn7tbnITsVXlugK',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;
                var deskripsi = vall['deskripsi'];
                var gambar = vall['photo'][0]['thumbnails'].large.url;
                var filename = vall['photo'][0]['filename'];
                var satu = gambar.split("/")[4];
                var dua = gambar.split("/")[5];
                var stok = vall['stok_prodduk'];
                myArrays.push({
                    id: id,
                    deskripsi: deskripsi,
                    stok: stok,
                    photo: 'https://zmbpediabogor.my.id/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_")
                });
            }
            res.send(myArrays);
        }
    })
});

app.get("/api/tremdata", function(req, res) {
    request({
        url: 'https://api.airtable.com/v0/appJnzRgVZn2IjPX6/trem?api_key=keyn7tbnITsVXlugK',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;
                var deskripsi = vall['deskripsi'];
                var gambar = vall['photo'][0]['thumbnails'].large.url;
                var filename = vall['photo'][0]['filename'];
                var satu = gambar.split("/")[4];
                var dua = gambar.split("/")[5];
                var stokproduk = vall['stokproduk'];
                myArrays.push({
                    id: id,
                    deskripsi: deskripsi,
                    photo: 'https://zmbpediabogor.my.id/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_")
                });
            }
            res.send(myArrays);
        }
    })
});

app.get("/api/shipingdata", function(req, res) {
    request({
        url: 'https://api.airtable.com/v0/appJnzRgVZn2IjPX6/shiping?api_key=keyn7tbnITsVXlugK',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;
                var deskripsi = vall['deskripsi'];
                var gambar = vall['photo'][0]['thumbnails'].large.url;
                var filename = vall['photo'][0]['filename'];
                var satu = gambar.split("/")[4];
                var dua = gambar.split("/")[5];
                var stokproduk = vall['stokproduk'];
                myArrays.push({
                    id: id,
                    deskripsi: deskripsi,
                    photo: 'https://plant29.store/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_")
                });
            }
            res.send(myArrays);
        }
    })
});

app.get('/bulk/item-gambar/:idone/:idtwo/:file', function(req, res) {
    var file = req.params.file.replace(/_/g, " ");
    var idtwo = req.params.idtwo;
    var idone = req.params.idone;
    var url = 'https://dl.airtable.com/.attachmentThumbnails/' + idone + '/' + idtwo
    request({
        url: url,
        method: "HEAD",
        tunnel: true,
        gzip: true,
        proxy: false,
        followRedirect: false
    }, function(err, headRes) {
        if (!err) {
            var size = headRes.headers['content-length'];
            const fileSize = size
                //console.log(fileSize)
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'image/jpeg',
                'Cache-Control': 'max-age=3600'
            }
            res.writeHead(200, head)
            request.get(url).pipe(res);
        }
    })
})



app.get("/api/homie", function(req, res) {
    function shuffle(o) { //v1.0
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    request({
        url: "https://api.airtable.com/v0/appMmICDCO6mBhZYl/produk?api_key=keysY3XpvIdkAd38I",
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ? order by id ASC LIMIT 4', [html.records]);
            var myArrays = []
            var keyArray = Object.keys(resd);
            keyArray = shuffle(keyArray)

            for (var i = 0; i < resd.length; i++) {
                var vall = resd[keyArray[i]].fields;
                var id = resd[keyArray[i]].id;
                var namaproduk = '';
                var url = '';
                var kategori = ''
                var harga = ''
                var stok = ''
                if (vall['nama_produk']) {
                    var namaproduk = vall['nama_produk'];
                }
                if (vall['kategori_produk']) {
                    var kategori = vall['kategori_produk'];
                }
                if (vall['harga_produk']) {
                    var harga = vall['harga_produk'];
                }

                if (vall['stok_prodduk']) {
                    var stok = vall['stok_prodduk'];
                }

                if (resd[keyArray[i]].fields['gambar_produk']) {

                    if (vall['gambar_produk'][0]['thumbnails']) {
                        var gambar = vall['gambar_produk'][0]['thumbnails'].large.url;
                        var filename = vall['gambar_produk'][0]['filename'];
                        var satu = gambar.split("/")[4];
                        var dua = gambar.split("/")[5];
                        var gam = 'https://zmbpediabogor.my.id/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");

                    } else {
                        var gambar = '';
                        var filename = '';
                        var satu = '';
                        var dua = '';
                        var gam = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                        var url = vall['gambar_produk'][0]['url']
                    }
                } else {
                    var gam = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                }
                harganya = 'saat ini produk tidak ada dalam etalase penjualan';
                des = 'Belum ada detail keterangan deskripsi untuk produk ini';
                if (harga) {
                    var number_string = harga.toString(),
                        split = number_string.split(','),
                        sisa = split[0].length % 3,
                        rupiah = split[0].substr(0, sisa),
                        ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);

                    if (ribuan) {
                        separator = sisa ? '.' : '';
                        rupiah += separator + ribuan.join('.');
                    }
                    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
                    harganya = 'dikisaran harga Rp. ' + rupiah;
                }
                myArrays.push({
                    id: id,
                    namaproduk: namaproduk,
                    gambar: gam,
                    kategori: kategori,
                    stok: stok,
                    harga: harganya,
                    url: url
                });

            }
            res.send(myArrays);
        }
    })
});


app.get("/api/slide", function(req, res) {

    request({
        url: "https://api.airtable.com/v0/appMmICDCO6mBhZYl/slide?api_key=keysY3XpvIdkAd38I",
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []


            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;
                var desk = vall['deskripsi_slide'];
                var mini = vall['mini_deskripsi'];


                if (resd[i].fields['gambar_slide']) {

                    if (vall['gambar_slide'][0]['thumbnails']) {
                        var gambar = vall['gambar_slide'][0]['thumbnails'].large.url;
                        var filename = vall['gambar_slide'][0]['filename'];
                        var satu = gambar.split("/")[4];
                        var dua = gambar.split("/")[5];
                        var gam = 'https://zmbpediabogor.my.id/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");
                    } else {
                        var gambar = '';
                        var filename = '';
                        var satu = '';
                        var dua = '';
                        var gam = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                    }
                } else {
                    var gam = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                }

                myArrays.push({
                    id: id,
                    desk: desk,
                    mini: mini,
                    mini: mini,
                    gambar: gam

                });

            }
            res.send(myArrays);
        }
    })
});


app.get("/api/productdata/:id/:nama", function(req, res) {

    request({
        url: 'https://api.airtable.com/v0/appMmICDCO6mBhZYl/produk?api_key=keysY3XpvIdkAd38I',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var iddata = req.params.id
            var names = req.params.nama.replace(/-/g, ' ');
            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []
            var vid;

            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;

                var nama = resd[i].nama_produk;

                if (id == iddata) {
                    var harganya;
                    var des;
                    var it;
                    var namaproduk = vall['nama_produk'];
                    var vid = vall['gambar_produk'][0].type;
                    var uri = vall['gambar_produk'][0].url;



                    if (resd[i].fields['gambar_produk']) {

                        if (vall['gambar_produk'][0]['thumbnails']) {
                            var gambar = vall['gambar_produk'][0]['thumbnails'].large.url;
                            var filename = vall['gambar_produk'][0]['filename'];
                            var satu = gambar.split("/")[4];
                            var dua = gambar.split("/")[5];
                            var gam = 'https://zmbpediabogor.my.id/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");



                        } else {
                            var gambar = '';
                            var filename = '';
                            var satu = '';
                            vid = ''
                            var dua = '';
                            var gam = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                        }
                    } else {
                        var gam = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                    }

                    var stok = vall['stok_prodduk'];
                    var harga = vall['harga_produk'];
                    var kategori = vall['kategori_produk'];
                    var deskripsi = vall['deskripsi_produk'];
                    var cronical = 'https://zmbpediabogor.my.id/produk/' + id + '/' + names.replace(/\s/g, "-");
                    var rupiah = ''
                    if (namaproduk == names) {
                        var nyu = '(stok habis)'
                        if (stok) {
                            var nyu = '(tersedia)'
                        }
                        harganya = ' - untuk harga silahkan hubungi admin di nomer hotline kami ';
                        des = 'Belum ada detail keterangan deskripsi untuk produk ini';
                        if (harga) {
                            var number_string = harga.toString(),
                                split = number_string.split(','),
                                sisa = split[0].length % 3,
                                rupiah = split[0].substr(0, sisa),
                                ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);
                            if (ribuan) {
                                separator = sisa ? '.' : '';
                                rupiah += separator + ribuan.join('.');
                            }
                            rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
                            harganya = ' - dikisaran harga Rp. ' + rupiah;
                        }
                        it = 'mb-5'
                        if (deskripsi) {
                            des = deskripsi
                            it = 'mb-5 nodes'
                        }

                        myArrays.push({
                            id: id,
                            namaproduk: namaproduk,
                            gambar: gam,
                            stok: stok,
                            nyu: nyu,
                            harga: harganya,
                            kategori: kategori,
                            harganom: rupiah,
                            deskripsi: des,
                            vid: vid,
                            uri: uri,
                            it: it,
                            cronical: cronical
                        });

                    }
                }
            }
            res.send(myArrays);
        }
    })
});


app.get("/api/kategoryproduct/:kat/:name", function(req, res) {

    request({
        url: 'https://api.airtable.com/v0/appMmICDCO6mBhZYl/kategori?api_key=keysY3XpvIdkAd38I',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);

            var katdat = [];
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var namakategori = vall['nama_kategori'];
                katdat.push(namakategori)
            }

            request({
                url: 'https://api.airtable.com/v0/appMmICDCO6mBhZYl/produk?api_key=keysY3XpvIdkAd38I',
                json: true
            }, function(error, response, html) {
                if (!error) {
                    var kategoris = req.params.kat;
                    var resd = alasql('SELECT * FROM ?', [html.records]);
                    var myArrays = [];
                    var names = req.params.name.replace(/-/g, ' ');
                    var arraycontainsturtles = (katdat.indexOf(names) > -1);

                    if (arraycontainsturtles) {

                        for (var i = 0; i < resd.length; i++) {
                            var vall = resd[i].fields;
                            var id = resd[i].id;
                            var kategori = vall['kategori_produk'];

                            if (kategori == kategoris) {
                                var namaproduk = vall['nama_produk'];
                                if (resd[i].fields['gambar_produk']) {


                                    if (vall['gambar_produk'][0]['thumbnails']) {
                                        var gambar = vall['gambar_produk'][0]['thumbnails'].large.url;
                                        var filename = vall['gambar_produk'][0]['filename'];
                                        var satu = gambar.split("/")[4];
                                        var dua = gambar.split("/")[5];
                                        var gam = 'https://zmbpediabogor.my.id/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");
                                    } else {
                                        var gambar = '';
                                        var filename = '';
                                        var satu = '';
                                        var dua = '';
                                        var gam = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                                    }


                                } else {
                                    var gam = 'https://zmbpediabogor.my.id/assets/img/tdk.svg'
                                }

                                if (resd[0].fields['gambar_produk']) {


                                    if (vall['gambar_produk'][0]['thumbnails']) {
                                        var gambard = vall['gambar_produk'][0]['thumbnails'].large.url;
                                        var filenamea = vall['gambar_produk'][0]['filename'];
                                        var satua = gambar.split("/")[4];
                                        var duaa = gambar.split("/")[5];
                                        var gams = 'https://zmbpediabogor.my.id/bulk/item-gambar/' + satua + '/' + duaa + '/' + filenamea.replace(/\s/g, "_");
                                    } else {
                                        var gambard = '';
                                        var filenamea = '';
                                        var satua = '';
                                        var duaa = '';
                                        var gams = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                                    }

                                } else {
                                    var gams = 'https://zmbpediabogor.my.id/assets/img/tdk.svg';
                                }

                                var stok = vall['stok_prodduk'];
                                var harga = vall['harga_produk'];
                                var kategori = vall['kategori_produk'];
                                var deskripsi = vall['deskripsi_produk'];
                                var cronical = 'https://zmbpediabogor.my.id/kategori/' + kategori + '/' + names.replace(/\s/g, "-");

                                harganya = 'saat ini produk tidak ada dalam etalase penjualan';
                                if (harga) {
                                    var number_string = harga.toString(),
                                        split = number_string.split(','),
                                        sisa = split[0].length % 3,
                                        rupiah = split[0].substr(0, sisa),
                                        ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);

                                    if (ribuan) {
                                        separator = sisa ? '.' : '';
                                        rupiah += separator + ribuan.join('.');
                                    }
                                    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
                                    harganya = 'dikisaran harga Rp. ' + rupiah;
                                }


                                myArrays.push({
                                    id: id,
                                    namaproduk: namaproduk,
                                    gambar: gam,
                                    stok: stok,
                                    harga: harganya,
                                    kategori: kategori,
                                    deskripsi: deskripsi,
                                    oggambar: gams,
                                    cronical: cronical
                                });
                            }
                        }

                    }
                    res.send({ data: myArrays, gambarog: gams, namatitle: req.params.name.replace(/\s/g, "-") });
                }
            })

        }
    })


});

//module.exports = app;
// listen for requests :)

var listener = app.listen(port, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});