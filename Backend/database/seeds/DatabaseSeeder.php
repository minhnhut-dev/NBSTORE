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
    }


}

class loai_nguoi_dungs extends Seeder
{
    public function run()
    {
        DB::table('loai_nguoi_dungs')->insert([
            ['TenLoai' => 'Admin'],
            ['TenLoai' => 'Nhân Viên'],
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

        ]);
    }
}

class loai_san_phams extends Seeder
{
    public function run()
    {
        DB::table('loai_san_phams')->insert([
           ['TenLoai'=>'Laptop','parent_id'=>null],
           ['TenLoai'=>'PC','parent_id'=>null],
           ['TenLoai'=>'Laptop Gaming','parent_id'=>1],
           ['TenLoai'=>'PC Gaming','parent_id'=>2],
        ]);
    }
}
class san_phams extends Seeder
{
    public function run()
    {
        DB::table('san_phams')->insert([
           ['TenSanPham'=>'nitro 5 2021','ThongTin'=>'mới','HangSanXuat'=>'Acer','GiaCu'=>17000000,'GiaKM'=>16000000,'Soluong'=>10,'loai_san_phams_id'=>1]
        ]);
    }
}

