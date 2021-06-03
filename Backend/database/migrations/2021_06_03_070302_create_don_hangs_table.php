<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDonHangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('don_hangs', function (Blueprint $table) {
            $table->bigIncrements('id');
            // Khoa ngoai
            $table->unsignedBigInteger('hinh_thuc_giao_hangs_id');
            $table->unsignedBigInteger('hinh_thuc_thanh_toans_id');
            $table->unsignedBigInteger('nguoi_dungs_id');
            $table->date('ThoiGianMua');
            $table->string('Tongtien');
            $table->integer('TrangThai'); // 1 Đã thanh toán , 0 Chưa thanh toán
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('don_hangs');
    }
}
