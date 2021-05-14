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
            $table->string('RAM')->nullable();// Bộ nhớ ram
            $table->string('Ổ Cứng')->nullable();
            $table->string('Card Đồ Họa')->nullable();// card màn hình, card đồ họa
            $table->string('Màn hình')->nullable();
            $table->string('Cổng giao tiếp')->nullable();
            $table->string('FDD')->nullable();// Ổ quang
            $table->string('Thẻ nhớ')->nullable();// đọc thẻ nhớ  (có hoăc không)
            $table->string('Audio')->nullable();// Chuẩn âm thanh
            $table->string('LAN')->nullable(); // Chuẩn LAN
            $table->string('WIFI')->nullable();// Chuẩn WIFI
            $table->string('BLuetooth')->nullable(); //công nghệ của bluetooth
            $table->string('Webcam')->nullable();// Tên webcam
            $table->string('Camera')->nullable();// độ phân giải của camera
            $table->string('Hệ điều hành')->nullable();// Tên hệ điều hành
            $table->string('PIN')->nullable();// bao nhiêu mah hoặc cell
            $table->string('Màu sắc')->nullable(); // Mô tả màu sắc của sản phẩm
            $table->string('Trọng lượng')->nullable();// 2.1kg
            $table->string('Kích thước')->nullable();// DxRxC
            $table->string('Tốc độ quay')->nullable();// tốc độ quay của quạt (Tản nhiệt)
            $table->string('Vật liệu')->nullable();// Vật liệu làm ra sản phẩm
            $table->string('Độ ồn')->nullable();// Độ ồn quạt
            $table->string('Tản nhiệt')->nullable();// Tan Nhiet khí nước
            $table->string('Kết nối')->nullable();// kết nối
            $table->string('Tuổi thọ')->nullable();// tuoitho san pham
            $table->string('Switch')->nullable();// switch bấm
            $table->string('Tốc độ phản hồi')->nullable();// toc do phan hoi
            $table->string('Thiết kế')->nullable();// thiết kế của sản phẩm
            $table->string('Model')->nullable();// model sản phẩm
            $table->string('Hỗ trợ')->nullable();// SP hệ điều hành
            $table->string('Phụ kiện')->nullable();// phụ kiện đi theo sản phẩm
            $table->string('Mainboard')->nullable();
            $table->string('Nguồn')->nullable();
            $table->string('Case')->nullable();
            $table->string('Fan')->nullable();
            $table->unsignedBigInteger('san_phams_id')->default(1);//Khóa ngoại
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
