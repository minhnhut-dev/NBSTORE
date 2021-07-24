<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNguoiDungsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nguoi_dungs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('Email')->unique();
            $table->string('TenNguoidung');
            $table->string('SDT');
            $table->string('DiaChi');
            $table->text('Anh')->nullable();
            $table->integer('GioiTinh')->default(1);
            $table->string('username')->unique();
            $table->string('password');
            $table->unsignedBigInteger('loai_nguoi_dungs_id');
            $table->boolean('TrangThai')->default(1);
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
        Schema::dropIfExists('nguoi_dungs');
    }
}
