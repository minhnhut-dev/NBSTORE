<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCauHinhsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cau_hinhs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('CPU')->nullable();
            $table->string('RAM')->nullable();
            $table->string('OCung')->nullable();
            $table->string('VGA')->nullable();// card màn hình
            $table->string('ManHinh')->nullable();
            $table->string('CongGiaoTiep')->nullable();
            $table->string('FDD')->nullable();// Ổ quang
            $table->string('DocTheNho')->nullable();// đọc thẻ nhớ  (có hoăc không)
            $table->string('Audio')->nullable();
            $table->string('LAN')->nullable(); // Chuẩn LAN
            $table->string('WIFI')->nullable();// Chuẩn WIFI
            $table->string('BLuetooth')->nullable(); //công nghệ của bluetooth
            $table->string('Webcam')->nullable();// Tên webcam
            $table->string('HeDieuHanh')->nullable();// Tên hệ điều hành
            $table->string('PIN')->nullable();// bao nhiêu mah hoặc cell
            $table->string('MauSac')->nullable(); // Mô tả màu sắc của sản phẩm
            $table->string('TrongLuong')->nullable();// 2.1kg
            $table->string('KichThuoc')->nullable();// DxRxC
            $table->string('TocDoQuay')->nullable();// tốc độ quay của quạt (Tản nhiệt)
            $table->string('VatLieu')->nullable();// Vật liệu làm ra sản phẩm
            $table->string('DoON')->nullable();// Độ ồn quạt
            $table->string('BaoHanh')->nullable();// bảo hành của sản phẩm
            $table->string('TanNhiet')->nullable();// Tan Nhiet khí nước
            $table->string('KetNoi')->nullable();// kết nối
            $table->string('TuoiTho')->nullable();// tuoitho san pham
            $table->string('Switch')->nullable();// switch bấm
            $table->string('TocDoPhanHoi')->nullable();// toc do phan hoi
            $table->string('ThietKe')->nullable();// thiết kế của sản phẩm
            $table->string('model')->nullable();// model sản phẩm
            $table->string('Hotro')->nullable();// SP hệ điều hành
            $table->string('PhuKien')->nullable();// phụ kiện đi theo sản phẩm
            $table->unsignedBigInteger('san_phams_id');//Khóa ngoại
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cau_hinhs');
    }
}
