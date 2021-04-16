<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaiKhoanNguoiDungsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tai_khoan_nguoi_dungs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('TenTaiKhoan');
            $table->string('MatKhau');
            $table->unsignedBigInteger('nguoi_dungs_id');
            $table->boolean('TrangThai');
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
        Schema::dropIfExists('tai_khoan_nguoi_dungs');
    }
}
