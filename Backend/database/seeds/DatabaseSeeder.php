<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call(loai_nguoi_dungs::class);
        $this->call(nguoi_dungs::class);
        $this->call(loai_san_phams::class);
        $this->call(san_phams::class);
        $this->call(anh_san_phams::class);
        $this->call(hinh_thuc_giao_hangs::class);
        $this->call(hinh_thuc_thanh_toans::class);
        $this->call(trang_thai_don_hangs::class);
        $this->call(don_hangs::class);
        $this->call(chi_tiet_don_hangs::class);
    }


}

class loai_nguoi_dungs extends Seeder
{
    public function run()
    {
        DB::table('loai_nguoi_dungs')->insert([
            ['TenLoai' => 'Admin'],
            ['TenLoai' => 'Customer'],
        ]);
    }
}

class nguoi_dungs extends Seeder
{
    public function run()
    {
        DB::table('nguoi_dungs')->insert([
            ['Email'=>'nhatminh785@gmail.com','TenNguoidung'=>'Minh Nhựt','SDT'=>'0911079197','DiaChi'=>'Nha Be','Anh'=>'meo.jpg', 'GioiTinh'=>1,'username'=>'minhnhut123','password'=>bcrypt('12345'),'loai_nguoi_dungs_id'=>1],
            ['Email'=>'binhgold@gmail.com','TenNguoidung'=>'Thái Bình','SDT'=>'12345678','DiaChi'=>'Quận 8','Anh'=>'meo.jpg', 'GioiTinh'=>1,'username'=>'tb1234','password'=>bcrypt('12345'),'loai_nguoi_dungs_id'=>2],
            ['Email'=>'haha@gmail.com','TenNguoidung'=>'test','SDT'=>'12345678','DiaChi'=>'Nhà Bè','Anh'=>'meo.jpg', 'GioiTinh'=>1,'username'=>'test1234','password'=>bcrypt('12345'),'loai_nguoi_dungs_id'=>2],
            ['Email'=>'dangthaibinha3@gmail.com','TenNguoidung'=>'Thái Bình','SDT'=>'12345678','DiaChi'=>'Quận 8','Anh'=>'meo.jpg', 'GioiTinh'=>1,'username'=>'binhdang','password'=>bcrypt('12345'),'loai_nguoi_dungs_id'=>1],

        ]);
    }
}

class loai_san_phams extends Seeder
{
    public function run()
    {
        DB::table('loai_san_phams')->insert([
           ['TenLoai'=>'Laptop','icon'=>'<i class="fas fa-laptop"></i>','parent_id'=>null],
           ['TenLoai'=>'PC','icon'=>'<i class="fas fa-desktop"></i>','parent_id'=>null],
           ['TenLoai'=>'Laptop Gaming','icon'=>null,'parent_id'=>1],
           ['TenLoai'=>'PC Gaming','icon'=>null,'parent_id'=>2],
           ['TenLoai'=>'Linh kiện','icon'=> '<i class="fas fa-microchip"></i>', 'parent_id'=>null],
           ['TenLoai'=>'CPU','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'RAM','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'MainBoard','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'Monitor','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'Storage','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'Power','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'VGA','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'Cooler','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'Fan','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'Case','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'Headphone','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'Bàn phím','icon'=>null,'parent_id'=>5],
           ['TenLoai'=>'Chuột','icon'=>null,'parent_id'=>5],
        ]);
    }
}
class san_phams extends Seeder
{
    public function run()
    {
        DB::table('san_phams')->insert([
           ['TenSanPham'=>'Laptop Gaming Asus TUF Dash FX516PE HN005T','ThongTin'=>'mới','HangSanXuat'=>'Acer','GiaCu'=>22490000,'GiaKM'=>21990000,'Soluong'=>10,'AnhDaiDien'=>'image2.jpg','CauHinh'=>'','loai_san_phams_id'=>1],
           ['TenSanPham'=>'Laptop HP 15s FQ2027TU 2Q5Y3PA','ThongTin'=>'mới','HangSanXuat'=>'HP','GiaCu'=>16590000,'GiaKM'=>15990000,'Soluong'=>10,'AnhDaiDien'=>'image8.jpg','CauHinh'=>'','loai_san_phams_id'=>1],
           ['TenSanPham'=>'Macbook Air 2020 M1 8GPU 8GB 512GB MGNA3SA/A - Silver','ThongTin'=>'mới','HangSanXuat'=>'Apple','GiaCu'=>34990000,'GiaKM'=>30500000,'Soluong'=>10,'AnhDaiDien'=>'image9.jpg','CauHinh'=>'','loai_san_phams_id'=>1],
           ['TenSanPham'=>'Laptop ASUS TUF Gaming F15 FX506LH HN002T','ThongTin'=>'mới','HangSanXuat'=>'Asus','GiaCu'=>20490000,'GiaKM'=>19490000,'Soluong'=>10,'AnhDaiDien'=>'image1.jpg','CauHinh'=>'','loai_san_phams_id'=>1],
           ['TenSanPham'=>'Laptop Asus ROG Strix SCAR 15 G533QR HF113T','ThongTin'=>'mới','HangSanXuat'=>'Asú','GiaCu'=>59990000,'GiaKM'=>57490000,'Soluong'=>10,'AnhDaiDien'=>'image7.jpg','CauHinh'=>'','loai_san_phams_id'=>1],

        ]);
    }
}

class anh_san_phams extends Seeder {
    public function run()
    {
        DB::table('anh_san_phams')->insert([
            // sản phẩm 1
            ['AnhSanPham'=>'image2.jpg','san_phams_id'=>1],
            ['AnhSanPham'=>'image2_1.jpg','san_phams_id'=>1],
            ['AnhSanPham'=>'image2_2.jpg','san_phams_id'=>1],
            // sản phẩm 2
            ['AnhSanPham'=>'image8.jpg','san_phams_id'=>2],
            ['AnhSanPham'=>'image8_1.jpg','san_phams_id'=>2],
            ['AnhSanPham'=>'image8_2.jpg','san_phams_id'=>2],
            // sản phẩm 3
            ['AnhSanPham'=>'image9.jpg','san_phams_id'=>3],
            // sản phẩm 4
            ['AnhSanPham'=>'image1.jpg','san_phams_id'=>4],
            // sản phẩm 5
            ['AnhSanPham'=>'image7.jpg','san_phams_id'=>5],
            ['AnhSanPham'=>'image7_1.png','san_phams_id'=>5],
            ['AnhSanPham'=>'image7_2.png','san_phams_id'=>5],
        ]);
    }
}

class hinh_thuc_giao_hangs extends Seeder
{
    public function run()
    {
        DB::table('hinh_thuc_giao_hangs')->insert([
         ['TenHinhThuc'=>'COD']
        ]);
    }
}

class hinh_thuc_thanh_toans extends Seeder
{
    public function run()
    {
        DB::table('hinh_thuc_thanh_toans')->insert([
         ['TenThanhToan'=>'Tiền mặt'],
         ['TenThanhToan'=>'MOMO'],
         ['TenThanhToan'=>'Paypal'],
        ]);
    }
}
class trang_thai_don_hangs extends Seeder
{
    public function run()
    {
        DB::table('trang_thai_don_hangs')->insert([
         ['TenTrangThai'=>'Chưa thanh toán'],
         ['TenTrangThai'=>'Đã thanh toán'],
         ['TenTrangThai'=>'Đã xác nhận'],
         ['TenTrangThai'=>'Đã hủy'],
        ]);
    }
}
class don_hangs extends Seeder
{
    public function run()
    {
        DB::table('don_hangs')->insert([
         ['hinh_thuc_thanh_toans_id'=>1,'hinh_thuc_giao_hangs_id'=>1,'nguoi_dungs_id'=>3,'ThoiGianMua'=>'2021/6/3','Tongtien'=>2000000,'trang_thai_don_hangs_id'=>1],
        ]);
    }
}

class chi_tiet_don_hangs extends Seeder
{
    public function run()
    {
        DB::table('chi_tiet_don_hangs')->insert([
        ['don_hangs_id'=>1,'san_phams_id'=>1,'SoLuong'=>4,'DonGia'=>200000,'ThanhTien'=>800000],
        ['don_hangs_id'=>1,'san_phams_id'=>2,'SoLuong'=>6,'DonGia'=>200000,'ThanhTien'=>1200000]
        ]);
    }
}
